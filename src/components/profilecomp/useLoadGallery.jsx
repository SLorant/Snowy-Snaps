import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { useLocation } from 'react-router-dom'

const useLoadGallery = (userID, setuserID, setUserName, setGalleryText) => {
  const { currentUser, logout } = useAuth()
  const pathname = useLocation().pathname
  const user = pathname.substring(1, pathname.lastIndexOf('/'))
  console.log(user)

  if (currentUser) {
    setuserID(currentUser.uid)
  }

  useEffect(() => {
    async function loadContentGallery() {
      try {
        if (currentUser) {
          const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
          const profDocSnap = await getDoc(profDocRef)
          const data = profDocSnap.data()
          if (data.username === user) {
            setUserName(`${data.username}`)
            setGalleryText('My Gallery')
          }
        } else {
          const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            setuserID(doc.id)
          })
          setUserName(`${user}`)
          setGalleryText(`${user}'s Gallery`)
        }
      } catch (error) {
        console.log('Error getting user data:', error)
      }
    }
    loadContentGallery()
  }, [])
}

export default useLoadGallery
