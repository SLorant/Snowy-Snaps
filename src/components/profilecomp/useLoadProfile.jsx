import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { useLocation } from 'react-router-dom'

const useLoadProfile = (setUser) => {
  const { currentUser, logout } = useAuth()
  const pathname = useLocation().pathname
  let user = pathname.substring(1)
  let bio

  async function loadProfile() {
    try {
      let data
      if (currentUser) {
        const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
        const profDocSnap = await getDoc(profDocRef)
        data = profDocSnap.data()
      }
      if (currentUser && (data.username === user || user === 'profile')) {
        setUser({
          userName: `${data.username}`,
          userID: `${currentUser.uid}`,
          galleryText: 'My Gallery',
          profileName: `Hi, ${data.username}`,
          loadedBio: data.bio ? data.bio : '',
          canEdit: true,
        })

        return currentUser.uid
      } else {
        const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
        const querySnapshot = await getDocs(q)
        let id
        querySnapshot.forEach((doc) => {
          console.log(doc.id)
          id = doc.id
          bio = doc.data().bio
        })
        setUser({
          userName: `${user}`,
          userID: id,
          galleryText: `${user}'s Gallery`,
          profileName: `${user}'s profile`,
          loadedBio: bio ? bio : '',
          canEdit: false,
        })

        return id
      }
    } catch (error) {
      console.log('Error getting user data:', error)
    }
  }

  useEffect(() => {
    ;(async () => {
      let user2 = await loadProfile()
      console.log(user2)
      const url = await getDownloadURL(ref(projectStorage, `${user2}/profilepics/image`))

      const img = document.getElementById('profileimg')
      img.setAttribute('src', url)
    })()
  }, [])
  /*  useEffect(() => {
   
    loadProfilePic()
  }, [userId]) */
}

export default useLoadProfile
