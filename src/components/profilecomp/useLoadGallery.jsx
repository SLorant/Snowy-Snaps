import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { useLocation } from 'react-router-dom'

const useLoadGallery = (setUser, setCanUpload) => {
  const { currentUser } = useAuth()
  const pathname = useLocation().pathname
  const user = pathname.substring(1, pathname.lastIndexOf('/'))

  async function loadContentGallery() {
    try {
      let data
      if (currentUser) {
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
            galleryText: 'My Gallery',
            canUpload: true,
          })
        }
      } else {
        const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
        const querySnapshot = await getDocs(q)
        let id
        querySnapshot.forEach((doc) => {
          id = doc.id
        })

        setUser({
          userID: `${id}`,
          userName: `${user}`,
          galleryText: `${user}'s Gallery`,
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

export default useLoadGallery
