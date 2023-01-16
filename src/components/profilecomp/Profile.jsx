import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { Link, useNavigate } from 'react-router-dom'
import ShowcaseImg from './ShowcaseImg'
import LargeButton from '../homepagecomp/LargeButton'
import Bio from './Bio'
import Settings from './Settings'

const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [username, setUserName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadedBio, setLoadedBio] = useState('')

  const likedImages = [
    { id: 'myimg6' },
    { id: 'myimg7' },
    { id: 'myimg8' },
    { id: 'myimg9' },
    { id: 'myimg10' },
  ]

  if (currentUser) {
    async function loadProfilePic() {
      try {
        const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
        const profDocSnap = await getDoc(profDocRef)
        if (profDocSnap.exists()) {
          const data = profDocSnap.data()
          setUserName(data.username)
          setLoadedBio(data.bio)
        } else console.log('No such document!')

        const url = await getDownloadURL(
          ref(projectStorage, `${currentUser.uid}/profilepics/image`),
        )
        const img = document.getElementById('profileimg')
        img.setAttribute('src', url)
      } catch (error) {
        /*  console.log("user has no profile pic:", error)
        console.log("Error getting user data:", error); */
      }
    }
    loadProfilePic()
  }

  //console.log(storageRef.listAll())
  // Now we get the references of these images

  /* if( useAuth().currentUser){
    getDownloadURL(ref(projectStorage, `${currentUser.uid}/uploadedpics/image`))
   .then((url) => {
      // Or inserted into an <img> element
      const img = document.getElementById('myimg2');
      img.setAttribute('src', url);
      //console.log(url)
    })
    .catch((error) => {
     console.log("user has no profile pic")
    });
   }  */

  const navigate = useNavigate()

  async function handleNavigate() {
    setError('')

    try {
      navigate('/my-gallery')
    } catch {
      setError('Failed to go to my gallery')
    }
  }

  async function handleNavigate2() {
    setError('')

    try {
      navigate('/liked-gallery')
    } catch {
      setError('Failed to go to my gallery')
    }
  }

  // if (currentUser.email === docs.map(doc) )
  return (
    <div className="flex h-screen w-full items-center  justify-center bg-cream">
      <div className=" flex h-3/4 w-2/3 flex-col items-center justify-center rounded-lg bg-white">
        <p className="mb-2 mt-12  font-header text-4xl text-blue">
          Hi, {username}
        </p>
        <div className="flex w-full items-center justify-around rounded-lg  ">
          <motion.div
            className="mt-0  flex w-full items-center  justify-center gap-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <div className="flex   flex-col  items-center justify-center ">
              <img
                className="w-60 "
                id="profileimg"
                src="src\assets\profile.png"
                alt="userpic"
              />
              <Bio loadedBio={loadedBio} />
            </div>
            <div className="mb-8 flex  flex-col items-center justify-center">
              <p className=" mb-6 font-header text-2xl text-peach ">
                My Gallery
              </p>
              <div className="mr-0 mb-20 flex  w-full items-center justify-center  ">
                <Link to="/my-gallery">
                  <ShowcaseImg onClick={handleNavigate} />
                </Link>
              </div>
              <Settings />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile
