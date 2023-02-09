import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { useLocation } from 'react-router-dom'

const useLoadProfile = (
  userId,
  setUserId,
  setUserName,
  setGalleryText,
  setLoadedBio,
  setCanEdit,
  setProfileName,
) => {
  const { currentUser, logout } = useAuth()
  const pathname = useLocation().pathname
  const user = pathname.substring(1)

  if (currentUser) {
    setUserId(currentUser.uid)
  }

  let bio
  let url

  useEffect(() => {
    async function loadProfilePic() {
      try {
        if (currentUser) {
          const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
          const profDocSnap = await getDoc(profDocRef)
          /*   if (profDocSnap.exists()) { */

          const data = profDocSnap.data()

          if (data.username === user) {
            setCanEdit(true)
            setUserName(`${data.username}`)
            setProfileName(`Hi, ${data.username}`)
            setGalleryText('My Gallery')
            data.bio ? setLoadedBio(data.bio) : ''
          }
        } else {
          setCanEdit(false)
          const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            console.log(doc.id)
            setUserId(doc.id)
            bio = doc.data().bio
          })
          setUserName(`${user}`)
          setProfileName(`${user}'s profile`)
          setGalleryText(`${user}'s Gallery`)
          console.log(userId)
          url = await getDownloadURL(ref(projectStorage, `${userId}/profilepics/image`))
          console.log(url)
          const img = document.getElementById('profileimg')
          img.setAttribute('src', url)
          bio ? setLoadedBio(bio) : ''
        }
      } catch (error) {
        console.log('Error getting user data:', error)
      }
    }
    loadProfilePic()
  }, [userId])
}

export default useLoadProfile
