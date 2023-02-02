import { useState, useEffect } from 'react'
import { projectFirestore } from '../../../firebase/config'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'

const useFirestore = (
  imageCollection,
  userID,
  uploaded,
  setUploaded,
  sort,
  emotionArray,
  imgType,
) => {
  const [docs, setDocs] = useState([])
  let q, q2, q3
  let ismore = false
  let isGif = false

  useEffect(() => {
    imgType === 'gif' ? (isGif = true) : (isGif = false)
    console.log(userID)
    if (userID)
      q = query(
        collection(projectFirestore, imageCollection),
        where('userid', '==', userID),
        orderBy('createdAt', 'desc'),
      )
    else if (!emotionArray.length && imgType === '') {
      q = query(collection(projectFirestore, imageCollection), orderBy('createdAt', sort))
    } else if (!emotionArray.length) {
      q = query(
        collection(projectFirestore, imageCollection),
        where('gif', '==', isGif),
        orderBy('createdAt', sort),
      )
    } else if (emotionArray.length && imgType === '') {
      q = query(
        collection(projectFirestore, imageCollection),
        where('emotion', 'in', emotionArray),
        orderBy('createdAt', sort),
      )
      q2 = query(
        collection(projectFirestore, imageCollection),
        where('emotion2', 'in', emotionArray),
        orderBy('createdAt', sort),
      )
      q3 = query(
        collection(projectFirestore, imageCollection),
        where('emotion3', 'in', emotionArray),
        orderBy('createdAt', sort),
      )
      ismore = true
      //console.log(q)
    } else {
      q = query(
        collection(projectFirestore, 'images'),
        where('emotion', 'in', emotionArray),
        where('gif', '==', isGif),
        orderBy('createdAt', sort),
      )
    }

    async function GalleryQuery() {
      let documents = []
      const querySnapshot = await getDocs(q)
      if (ismore) {
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
      setUploaded(false)
      //console.log(documents)
      return () => querySnapshot()
    }
    GalleryQuery()
  }, [imageCollection, sort, emotionArray, imgType, uploaded])

  return { docs }
}

export default useFirestore
