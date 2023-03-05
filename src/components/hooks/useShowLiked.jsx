import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../../firebase/config'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'

const useShowLiked = (userID) => {
  // This function is responsible for querying the liked images for the current user.
  const [docs, setDocs] = useState([])
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', userID)
  let likedpics = []
  let documents = ''

  useEffect(() => {
    async function LikedQuery() {
      const docSnap = await getDoc(docRef)
      likedpics = docSnap.get('likedpics')
      if (likedpics) {
        // Process liked images in chunks to avoid hitting Firestore limits
        const chunkSize = 10
        for (let i = 0; i < likedpics.length; i += chunkSize) {
          const chunk = likedpics.slice(i, i + chunkSize)
          const likedIds = new Set(chunk.map((pic) => pic.id))
          // Query the Firestore collection for the current chunk of liked images.
          const q = query(collectionRef, where('id', 'in', [...likedIds]))
          const querySnapshot = await getDocs(q)
          // Map the query results to an array of image documents.
          documents = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        }
        setDocs(documents)
      } else {
        setDocs([])
      }
    }
    LikedQuery()
  }, [])
  return { docs }
}

export default useShowLiked
