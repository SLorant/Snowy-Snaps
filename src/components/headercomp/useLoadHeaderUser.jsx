import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { useAuth } from '../../contexts/AuthContext'

const useLoadHeaderUser = (setUserName) => {
  const { currentUser } = useAuth()

  async function loadProfilePic() {
    try {
      const docRef = doc(projectFirestore, 'users', currentUser.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        setUserName(data.username)
      } else console.log('No such document!')

      const url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
      const img = document.getElementById('myimg')
      img.setAttribute('src', url)
    } catch (error) {
      /*  console.log("user has no profile pic:", error)
        console.log("Error getting user data:", error); */
    }
  }

  useEffect(() => {
    if (currentUser) {
      ;(async () => {
        await loadProfilePic()
      })()
    }
  }, [currentUser])
}

export default useLoadHeaderUser
