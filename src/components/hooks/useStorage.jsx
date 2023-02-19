import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'
import { getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore'
import uuid from 'react-uuid'

const useStorage = (file, uploadType, emotion, emotion2, emotion3, gif) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  const { currentUser } = useAuth()
  // const [user, setUser] = useState("");
  //console.log(username)
  //const filename = file.name
  let storageRef

  useEffect(() => {
    //references
    uploadType === 'profile'
      ? (storageRef = projectStorage.ref(`${currentUser.uid}/profilepics/image`))
      : (storageRef = projectStorage.ref(`${currentUser.uid}/uploadedpics/${uuid()}`))

    //const storageRef = projectStorage.ref(`${currentUser.uid}/uploadedpics/${uuid()}`);
    //const user = username;

    const docRef = doc(projectFirestore, 'users', currentUser.uid)

    const collectionRef = projectFirestore.collection('images')
    const db = getFirestore()
    //console.log('i fire once');
    // Create a storage reference
    //const reviewRef = projectStorage.ref(`profilepics/${file.name}`);

    // Upload the object to that ref
    //reviewRef.put(file);

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        //const emotion = "happy"

        let user = ''
        let email = ''
        let userid = ''
        const docSnap = await getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data())
            const data = docSnap.data()
            user = data.username
            email = data.email
            userid = currentUser.uid
            //console.log(data.username)
          } else {
            // doc.data() will be undefined in this case
            //console.log("No such document!");
          }

          if (uploadType === 'gallery') {
            async function addtoFireStore() {
              const newImgAdded = await collectionRef.add({
                url,
                createdAt,
                emotion,
                emotion2,
                emotion3,
                user,
                userid,
                email,
                gif,
              })
              const data = { id: newImgAdded.id }
              const imageRef = doc(projectFirestore, 'images', newImgAdded.id)
              await updateDoc(imageRef, data)
            }
            addtoFireStore()
          }
        })
        //Sconsole.log(uploadType)
        setUrl(url)

        /*let docRef = doc(db, 'images', url)
            
            await updateDoc(docRef, {
                profilePic: url
                
            });*/
      },
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
