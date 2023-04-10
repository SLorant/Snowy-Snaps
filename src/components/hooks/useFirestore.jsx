import { useState, useEffect } from 'react'
import { projectFirestore } from '../../../firebase/config'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'

const useFirestore = (imageCollection, userID, isUploaded, setIsUploaded, uploadDate, emotionArray, imgType) => {
  const [docs, setDocs] = useState([])
  let q, q2, q3
  let multipleEmotions = false
  let isGif = false
  useEffect(() => {
    imgType === 'gif' ? (isGif = true) : (isGif = false)
    // In MySnaps, only the userID is provided, no other filters are needed
    if (userID)
      q = query(
        collection(projectFirestore, imageCollection),
        where('userid', '==', userID),
        orderBy('createdAt', 'desc'),
      )
    // If there are no emotions and no image type specified, query for all images sorted by upload date
    else if (!emotionArray?.length && imgType === '') {
      q = query(collection(projectFirestore, imageCollection), orderBy('createdAt', uploadDate))
    }
    // If there are no emotions specified but an image type is specified, query for images that match the image type
    else if (!emotionArray?.length) {
      q = query(
        collection(projectFirestore, imageCollection),
        where('gif', '==', isGif),
        orderBy('createdAt', uploadDate),
      )
    }
    // If there are emotions specified but no image type specified, query for images that match any of the emotions
    else if (emotionArray?.length && imgType === '') {
      q = query(
        collection(projectFirestore, imageCollection),
        where('emotion', 'in', emotionArray),
        orderBy('createdAt', uploadDate),
      )
      // Query for images that match the second and third emotions
      q2 = query(
        collection(projectFirestore, imageCollection),
        where('emotion2', 'in', emotionArray),
        orderBy('createdAt', uploadDate),
      )
      q3 = query(
        collection(projectFirestore, imageCollection),
        where('emotion3', 'in', emotionArray),
        orderBy('createdAt', uploadDate),
      )
      multipleEmotions = true
    }
    // If there are emotions and an image type specified, query for images that match both
    else {
      q = query(
        collection(projectFirestore, 'images'),
        where('emotion', 'in', emotionArray),
        where('gif', '==', isGif),
        orderBy('createdAt', uploadDate),
      )
    }

    async function GalleryQuery() {
      let documents = []
      const querySnapshot = await getDocs(q)
      // If multiple emotions are specified, fetch the second and third query snapshots and add the docs to documents
      if (multipleEmotions) {
        const querySnapshot2 = await getDocs(q2)
        const querySnapshot3 = await getDocs(q3)
        querySnapshot2.forEach((doc) => {
          if (!documents.find((d) => d.id === doc.id)) {
            documents.push({ ...doc.data(), id: doc.id })
          }
        })
        querySnapshot3.forEach((doc) => {
          if (!documents.find((d) => d.id === doc.id)) {
            documents.push({ ...doc.data(), id: doc.id })
          }
        })
      }

      querySnapshot.forEach((doc) => {
        if (!documents.find((d) => d.id === doc.id)) {
          documents.push({ ...doc.data(), id: doc.id })
        }
      })
      setDocs(documents)
      setIsUploaded(false)
      return () => querySnapshot()
    }
    GalleryQuery()
  }, [imageCollection, uploadDate, emotionArray, imgType, isUploaded])

  return { docs }
}

export default useFirestore
