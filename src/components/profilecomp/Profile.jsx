import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoadProfile from './LoadProfile'
import Bio from './Bio'
import Settings from './Settings'
import MySnapsPreview from './mysnaps/MySnapsPreview'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import { Helmet } from 'react-helmet-async'

const Profile = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [user, setUser] = useState({
    userName: '',
    userID: '',
    galleryText: '',
    profileName: '',
    loadedBio: '',
    canEdit: false,
  })
  LoadProfile(setUser)

  return (
    <div className="z-50 h-full w-full   ">
      <Helmet>
        <title>Profile</title>
        <meta property="og:title" content="Snowy Snaps - User Profile" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Upload an avatar, write your bio, and much more!" />
      </Helmet>
      <div className="z-20 flex h-full w-full items-center  justify-center bg-cream dark:bg-blue">
        <div
          className=" z-20  flex h-full w-full flex-col items-center justify-center 
        rounded-lg bg-white dark:bg-darkblue md:mb-10 md:mt-28 md:h-4/5  md:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="flex w-full items-center justify-around rounded-lg  ">
            <motion.div
              className="mt-36 flex w-full  flex-col items-center justify-center md:mt-0  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}>
              <div className="flex flex-col items-center  justify-center gap-4 md:flex-row ">
                <div className="flex items-end md:relative">
                  {user.canEdit && (
                    <motion.button
                      className="invisible absolute md:visible"
                      animate={showSettings ? { rotate: 90 } : { rotate: 0 }}
                      onClick={() => {
                        setShowSettings(!showSettings)
                      }}>
                      <SettingsIcon />
                    </motion.button>
                  )}
                  <img
                    className="relative w-64 rounded-full  md:mt-0"
                    id="profileimg"
                    src="\src\assets\avatars\profile.png"
                    alt="userpic"
                  />
                  {showSettings && user.canEdit && <Settings />}
                </div>
                <div className=" flex flex-col items-center  md:mt-8 md:items-end ">
                  <div className="absolute top-20 flex items-end justify-between md:static ">
                    <p
                      className={`${
                        user.profileName.length > 20 ? ' text-2xl' : 'text-4xl'
                      } font-header text-blue dark:text-peach`}>
                      {user.profileName}
                    </p>
                  </div>
                  <Bio canEdit={user.canEdit} loadedBio={user.loadedBio} />
                </div>
              </div>
              <div className="mb-8 flex  flex-col items-center justify-center">
                <p
                  className={`${
                    user.profileName.length > 20 ? ' text-2xl' : 'text-4xl'
                  } mb-6 font-header text-peach dark:text-cream `}>
                  {user.galleryText}
                </p>
                <div className="mr-12  mb-8 flex  w-full  items-center justify-center md:mr-8  ">
                  <Link to={`/profile/${user.userName}/gallery`}>
                    <MySnapsPreview userID={user.userID} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          {user.canEdit && (
            <div className="mb-0 mt-6 block flex w-full items-center justify-center md:hidden">
              <Settings />
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-cream dark:bg-blue"></div>
    </div>
  )
}

export default Profile
