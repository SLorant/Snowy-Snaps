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

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  // if (currentUser.email === docs.map(doc) )
  return (
    <div className="flex h-screen w-full items-center  justify-center bg-cream">
      <div className="mt-8 flex h-5/6 w-5/6  flex-col rounded-lg">
        <div className="mt-2 flex h-14 w-full items-center justify-center ">
          <p className="mb-2 font-header text-4xl text-blue">Hi, {username}</p>
        </div>

        <motion.div
          className="mt-0  flex w-full  flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        >
          <div className="flex  w-full items-center justify-center">
            <img
              className="w-60 "
              id="profileimg"
              src="src\assets\profile.png"
              alt="userpic"
            />
            <Bio loadedBio={loadedBio} />
          </div>
          <div className="my-8 flex flex-col items-center justify-center bg-sand">
            <p className="mt-4   font-header text-3xl text-peach ">
              Go to my Gallery
            </p>
            <div className="mr-52 mt-6 flex  w-full items-center justify-center  ">
              {/*   {myImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))} */}
              <ShowcaseImg onClick={handleNavigate} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 flex h-1/6   w-40 cursor-pointer flex-col justify-center   rounded-lg bg-sand"
          onClick={handleNavigate2}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        >
          <p className="my-2 ml-4  font-headersc text-2xl text-darkblue ">
            Go to liked pics
          </p>
          <div className="mr-8 mb-4 flex w-full items-center justify-center gap-12  ">
            {/*  {likedImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))} */}
          </div>
        </motion.div>

        <div className="mt-4  flex w-5/6   justify-between">
          <div className="ml-2 mt-2">
            <LargeButton title={'Change my profile'} />
          </div>
          <div onClick={handleLogout} className="mr-2 mt-2">
            <LargeButton title={'Log out'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
