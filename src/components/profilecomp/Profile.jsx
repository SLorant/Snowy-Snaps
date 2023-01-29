import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ShowcaseImg from './ShowcaseImg'
import LargeButton from '../homepagecomp/LargeButton'
import Bio from './Bio'
import Settings from './Settings'

const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [username, setUserName] = useState('')
  const [galleryText, setGalleryText] = useState('')
  const [error, setError] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [loadedBio, setLoadedBio] = useState('')
  const [canEdit, setCanEdit] = useState(true)

  const likedImages = [
    { id: 'myimg6' },
    { id: 'myimg7' },
    { id: 'myimg8' },
    { id: 'myimg9' },
    { id: 'myimg10' },
  ]
  /* const history = useNavigate() */
  const navigate = useNavigate()
  let { state } = useLocation()
  console.log(state)
  let imgData
  let userId = currentUser.uid
  if (state.imgData !== undefined) {
    /*  const imgData = state ? state.imgData : null */
    imgData = state.imgData
    console.log(state.imgData.userid)
    userId = state.imgData.userid
  }

  const pathname = useLocation().pathname

  const user = pathname.substring(1)
  console.log(userId)

  useEffect(() => {
    if (currentUser.uid === userId) {
      async function loadProfilePic() {
        try {
          setCanEdit(true)
          const profDocRef = doc(projectFirestore, 'users', currentUser.uid)
          const profDocSnap = await getDoc(profDocRef)
          if (profDocSnap.exists()) {
            const data = profDocSnap.data()
            setUserName(`Hi, ${data.username}`)
            setGalleryText('My Gallery')
            data.bio ? setLoadedBio(data.bio) : ''
          } else console.log('No such document!')

          const url = await getDownloadURL(
            ref(projectStorage, `${currentUser.uid}/profilepics/image`),
          )

          const img = document.getElementById('profileimg')
          img.setAttribute('src', url)
        } catch (error) {
          console.log('user has no profile pic:', error)
          console.log('Error getting user data:', error)
        }
      }
      loadProfilePic()
    } else {
      console.log('other')
      async function loadProfileOther() {
        try {
          setCanEdit(false)
          const profDocRef = doc(projectFirestore, 'users', userId)
          const profDocSnap = await getDoc(profDocRef)
          if (profDocSnap.exists()) {
            const data = profDocSnap.data()
            setUserName(`${data.username}'s profile`)
            setGalleryText(`${data.username}'s Gallery`)
            data.bio ? setLoadedBio(data.bio) : ''
          } else console.log('No such document!')

          const url = await getDownloadURL(ref(projectStorage, `${userId}/profilepics/image`))
          const img = document.getElementById('profileimg')
          img.setAttribute('src', url)
        } catch (error) {
          console.log('user has no profile pic:', error)
          console.log('Error getting user data:', error)
        }
      }
      loadProfileOther()
    }
  }, [])

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

  const handleSelectSettings = () => {}

  // if (currentUser.email === docs.map(doc) )
  return (
    <div className="z-50 h-full w-full md:h-full  ">
      <div className="z-20 flex h-full w-full items-center  justify-center bg-cream">
        <div className=" z-20  flex h-full w-full flex-col items-center justify-center rounded-lg bg-white md:mb-10 md:mt-28 md:h-4/5  md:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="flex w-full items-center justify-around rounded-lg  ">
            <motion.div
              className="mt-36 flex w-full  flex-col items-center justify-center md:mt-0  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}>
              <div className="flex flex-col items-center  justify-center gap-4 md:flex-row ">
                <div className="flex items-end md:relative">
                  {canEdit && (
                    <motion.button
                      className="invisible absolute md:visible"
                      /*  whileFocus={{ rotate: 90 }} */

                      animate={showSettings ? { rotate: 90 } : { rotate: 0 }}
                      onClick={() => {
                        setShowSettings(!showSettings)
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-settings  cursor-pointer"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2D4550"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </motion.button>
                  )}
                  <img
                    className="relative w-64 rounded-full  md:mt-0"
                    id="profileimg"
                    src="src\assets\profile.png"
                    alt="userpic"
                  />
                  {showSettings && canEdit && <Settings />}
                </div>
                <div className=" flex flex-col items-center  md:mt-8 md:items-end ">
                  <div className="absolute top-20 flex items-end justify-between md:static ">
                    <p
                      className={`${
                        username.length > 20 ? ' text-2xl' : 'text-4xl'
                      }   font-header text-blue`}>
                      {username}
                    </p>
                  </div>
                  <Bio canEdit={canEdit} loadedBio={loadedBio} />
                </div>
              </div>
              <div className="mb-8 flex  flex-col items-center justify-center">
                <p className=" mb-6 font-header text-4xl text-peach ">{galleryText}</p>
                <div className="mr-12  mb-8 flex  w-full  items-center justify-center md:mr-8  ">
                  <Link to="/gallery" state={{ userId: userId, userName: user, imgData: imgData }}>
                    <ShowcaseImg onClick={handleNavigate} userID={userId} />
                  </Link>
                </div>
              </div>
              {/*  <Settings /> */}
            </motion.div>
          </div>
          {canEdit && (
            <div className="mb-0 mt-6 block flex w-full items-center justify-center md:hidden">
              <Settings />
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-cream"></div>
    </div>
  )
}

export default Profile
