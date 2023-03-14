import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useEffect } from 'react'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { useLocation } from 'react-router-dom'

const LoadProfile = (setUser) => {
  const { currentUser } = useAuth()
  // Get the username from the url
  const pathname = useLocation().pathname
  let user = pathname.split('/')[2]
  let bio

  async function loadProfile() {
    try {
      let data
      if (currentUser) {
        const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
        const profDocSnap = await getDoc(profDocRef)
        data = profDocSnap.data()
      }
      // If the current user is viewing their own profile or the user is 'profile'
      // (indicating the current user's own profile), set the user state accordingly
      if (currentUser && (data.username === user || user === 'me')) {
        setUser({
          userName: `${data.username}`,
          userID: `${currentUser.uid}`,
          galleryText: 'My Snaps',
          profileName: `Hi, ${data.username}`,
          loadedBio: data.bio && data.bio,
          canEdit: true,
        })
        console.log(user)
        return currentUser.uid
      } else {
        // Otherwise, query the Firestore collection for the requested user's data
        const q = query(collection(projectFirestore, 'users'), where('username', '==', user))
        const querySnapshot = await getDocs(q)
        let id
        querySnapshot.forEach((doc) => {
          id = doc.id
          bio = doc.data().bio
        })
        // If the requested user does not exist, fill the state with empty strings
        if (id === undefined) {
          setUser({
            userName: '',
            userID: '',
            galleryText: '',
            profileName: 'This user does not exist',
            loadedBio: '',
            canEdit: false,
          })
        } else {
          setUser({
            userName: `${user}`,
            userID: id,
            galleryText: `${user}'s Snaps`,
            profileName: `${user}'s profile`,
            loadedBio: bio && bio,
            canEdit: false,
          })
        }

        return id
      }
    } catch (error) {
      console.log('Error getting user data:', error)
    }
  }

  useEffect(() => {
    ;(async () => {
      let userProfile = await loadProfile()
      // Get the profile picture form Firebase Storage and set the user's profile in the DOM
      const url = await getDownloadURL(ref(projectStorage, `${userProfile}/profilepics/image`))
      console.log(url)
      const img = document.getElementById('profileimg')
      img.setAttribute('src', url)
    })()
  }, [])
}

export default LoadProfile
