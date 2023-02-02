import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../../firebase/config'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'
import { useAuth } from '../../contexts/AuthContext'

const useShowLiked = (userID) => {
  const [docs, setDocs] = useState([])
  /*  const { currentUser } = useAuth() */
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', userID)
  let likedpics = []
  let documents = ''

  useEffect(() => {
    async function LikedQuery() {
      const docSnap = await getDoc(docRef)
      likedpics = docSnap.get('likedpics')
      if (likedpics) {
        const liked = new Set(likedpics.map((pic) => pic.id))
        console.log(liked)
        const chunkSize = 10
        for (let i = 0; i < likedpics.length; i += chunkSize) {
          console.log(i)
          const chunk = likedpics.slice(i, i + chunkSize)
          // do whatever
          const likedIds = new Set(chunk.map((pic) => pic.id))
          const q = query(collectionRef, where('id', 'in', [...likedIds]))
          const querySnapshot = await getDocs(q)
          documents = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        }

        /*  const id = getContentById(likedIds, collectionRef) */

        //const querySnapshot = await getDocs(query(collectionRef, where("id", "in", [...likedIds])));

        /* const q = query(collectionRef, where('id', 'in', [...likedIds]))
        console.log(q)
        const querySnapshot = await getDocs(q)

        documents = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) */

        /* querySnapshot.forEach(doc => {
                    if(!documents.find(d => d.id === doc.id)) {
                        documents.push({...doc.data(), id: doc.id})
                    }
                }); */

        console.log(documents)
        setDocs(documents)
      } else {
        setDocs([])
      }

      //setDocs(likedpics);
      //console.log(documents)
    }
    LikedQuery()
  }, [])
  return { docs }
}

export default useShowLiked
