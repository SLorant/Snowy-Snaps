import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadProfile from './LoadProfile'
import Bio from './Bio'
import Settings from './Settings'
import MySnapsPreview from './MySnapsPreview'

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
    <div className="z-50 h-full w-full md:h-full  ">
      <div className="z-20 flex h-full w-full items-center  justify-center bg-cream">
        <div
          className=" z-20  flex h-full w-full flex-col items-center justify-center 
        rounded-lg bg-white md:mb-10 md:mt-28 md:h-4/5  md:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
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
                  {showSettings && user.canEdit && <Settings />}
                </div>
                <div className=" flex flex-col items-center  md:mt-8 md:items-end ">
                  <div className="absolute top-20 flex items-end justify-between md:static ">
                    <p className={`${user.profileName.length > 20 ? ' text-2xl' : 'text-4xl'}   font-header text-blue`}>
                      {user.profileName}
                    </p>
                  </div>
                  <Bio canEdit={user.canEdit} loadedBio={user.loadedBio} />
                </div>
              </div>
              <div className="mb-8 flex  flex-col items-center justify-center">
                <p
                  className={`${user.profileName.length > 20 ? ' text-2xl' : 'text-4xl'} mb-6 font-header text-peach `}>
                  {user.galleryText}
                </p>
                <div className="mr-12  mb-8 flex  w-full  items-center justify-center md:mr-8  ">
                  <Link to={`/${user.userName}/gallery`}>
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
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-cream"></div>
    </div>
  )
}

export default Profile
