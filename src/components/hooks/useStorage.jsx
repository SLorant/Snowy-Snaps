import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import uuid from 'react-uuid'

const useStorage = (file, uploadType, uploadedEmotions, gif) => {
  //This component is responsible for uploading the users' snaps, and profile avatars to the Firebase Storage
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  const { currentUser } = useAuth()
  let storageRef

  useEffect(() => {
    // create references to the Firebase storage and Firestore collections
    uploadType === 'profile'
      ? (storageRef = projectStorage.ref(`${currentUser.uid}/profilepics/image`))
      : (storageRef = projectStorage.ref(`${currentUser.uid}/uploadedpics/${uuid()}`))
    const docRef = doc(projectFirestore, 'users', currentUser.uid)
    const collectionRef = projectFirestore.collection('images')
    // upload the file to the Firebase storage and handle upload progress, errors, and completion
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
        // get the download URL for the uploaded file, define all of the image attributes
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        let emotion = ''
        let emotion2 = ''
        let emotion3 = ''
        let user = ''
        let email = ''
        let userid = ''
        // get user data from Firestore document and handle emotions
        const docSnap = await getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data()
            user = data.username
            email = data.email
            userid = currentUser.uid
            if (uploadedEmotions === undefined) console.log('undefined emotions')
            else {
              if (uploadedEmotions[0] !== undefined) emotion = uploadedEmotions[0]
              if (uploadedEmotions[1] !== undefined) emotion2 = uploadedEmotions[1]
              if (uploadedEmotions[2] !== undefined) emotion3 = uploadedEmotions[2]
            }
          } else {
            // doc.data() will be undefined in this case
            //console.log("No such document!");
          }
          // if this is not a profile avatar, add uploaded image data to Firestore collection
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
              const docID = { id: newImgAdded.id }
              const imageRef = doc(projectFirestore, 'images', newImgAdded.id)
              await updateDoc(imageRef, docID)
            }
            addtoFireStore()
          }
        })
        setUrl(url)
      },
    )
  }, [file])
  return { progress, url, error }
}

export default useStorage
