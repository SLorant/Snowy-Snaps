import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ShowcaseImg from './ShowcaseImg'
import useLoadProfile from './useLoadProfile'
import Bio from './Bio'
import Settings from './Settings'

const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [username, setUserName] = useState('')
  const [profilename, setProfileName] = useState('')
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

  const navigate = useNavigate()

  let imgData
  const [userId, setUserId] = useState('')
  if (currentUser) {
    setUserId(currentUser.uid)
  }

  const pathname = useLocation().pathname

  const user = pathname.substring(1)

  console.log(user)
  let bio
  let url

  useLoadProfile(
    userId,
    setUserId,
    setUserName,
    setGalleryText,
    setLoadedBio,
    setCanEdit,
    setProfileName,
  )

  async function handleNavigate() {
    setError('')

    try {
      if (currentUser && currentUser.uid === userId) {
        console.log('kakakakak2')
        navigate('/my-gallery')
      } else {
        console.log('kakakakak')
        navigate(`/`)
      }
    } catch {
      setError('Failed to go to my gallery')
    }
  }
  console.log(userId)

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
                        profilename.length > 20 ? ' text-2xl' : 'text-4xl'
                      }   font-header text-blue`}>
                      {profilename}
                    </p>
                  </div>
                  <Bio canEdit={canEdit} loadedBio={loadedBio} />
                </div>
              </div>
              <div className="mb-8 flex  flex-col items-center justify-center">
                <p className=" mb-6 font-header text-4xl text-peach ">{galleryText}</p>
                <div className="mr-12  mb-8 flex  w-full  items-center justify-center md:mr-8  ">
                  <Link
                    to={`/${username}/gallery`}
                    /* state={{ userId: userId, userName: user, imgData: imgData }} */
                  >
                    <ShowcaseImg userID={userId} />
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
