import { useAuth } from '../../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../../firebase/config'
import { useLocation } from 'react-router-dom'

const LoadMySnaps = (setUser, setCanUpload) => {
  const { currentUser } = useAuth()
  // Get the username from the url
  const pathname = useLocation().pathname
  const user = pathname.substring(1, pathname.lastIndexOf('/'))

  async function loadContentGallery() {
    try {
      let data
      if (currentUser) {
        //get user data from firestore
        const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
        const profDocSnap = await getDoc(profDocRef)
        data = profDocSnap.data()
      }

      if (currentUser && data.username === user) {
        setCanUpload(true)
        if (data.username === user) {
          setUser({
            userID: `${currentUser.uid}`,
            userName: `${data.username}`,
            galleryText: 'My Snaps',
            canUpload: true,
          })
        }
      } else {
        // if the user is not the signed in user, find it in the firestore database
        const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
        const querySnapshot = await getDocs(q)
        let id
        querySnapshot.forEach((doc) => {
          id = doc.id
        })

        setUser({
          userID: `${id}`,
          userName: `${user}`,
          galleryText: `${user}'s Snaps`,
          canUpload: false,
        })
      }
    } catch (error) {
      console.log('Error getting user data:', error)
    }
  }
  useEffect(() => {
    ;(async () => {
      await loadContentGallery()
    })()
  }, [])
}

export default LoadMySnaps
