import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import uuid from 'react-uuid'

const useStorage = (file, uploadType, uploadedEmotions, gif) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  const { currentUser } = useAuth()
  let storageRef

  useEffect(() => {
    //references
    uploadType === 'profile'
      ? (storageRef = projectStorage.ref(`${currentUser.uid}/profilepics/image`))
      : (storageRef = projectStorage.ref(`${currentUser.uid}/uploadedpics/${uuid()}`))
    const docRef = doc(projectFirestore, 'users', currentUser.uid)
    const collectionRef = projectFirestore.collection('images')

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
        let emotion = ''
        let emotion2 = ''
        let emotion3 = ''
        let user = ''
        let email = ''
        let userid = ''
        const docSnap = await getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            //console.log('Document data:', docSnap.data())
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
