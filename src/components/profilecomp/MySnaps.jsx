import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import UploadedSnaps from './UploadedSnaps'
import Modal from '../gallerycomp/Modal'
import UploadSnap from '../gallerycomp/UploadSnap'
import MySnapsFilter from './MySnapsFilter'
import LikedSnaps from './LikedSnaps'
import { Link } from 'react-router-dom'
import LoadMySnaps from './LoadMySnaps'

const MySnaps = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [likedImages, setLikedImages] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [myImages, setMyImages] = useState(true)
  const [user, setUser] = useState({
    userName: '',
    userID: '',
    galleryText: '',
    canUpload: false,
  })
  const [canUpload, setCanUpload] = useState(false)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })
  const isMySnaps = true
  const emotions = [
    [{ label: 'happy' }, { src: '/src/assets/emojis/happy.png' }],
    [{ label: 'silly' }, { src: '/src/assets/emojis/silly.png' }],
    [{ label: 'relaxed' }, { src: '/src/assets/emojis/relaxed.png' }],
    [{ label: 'excited' }, { src: '/src/assets/emojis/excited.png' }],
    [{ label: 'confused' }, { src: '/src/assets/emojis/confused.png' }],
    [{ label: 'mischievous' }, { src: '/src/assets/emojis/mischievous.png' }],
    [{ label: 'stubborn' }, { src: '/src/assets/emojis/stubborn.png' }],
    [{ label: 'sad' }, { src: '/src/assets/emojis/sad.png' }],
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  LoadMySnaps(setUser, setCanUpload)

  return (
    <div className="h-full w-full dark:bg-darkblue">
      <div className=" h-1 w-full dark:bg-darkblue"></div>
      <div className="mt-32 flex flex-col items-center justify-center">
        <h1
          className={`${
            user.galleryText.length > 15 ? ' text-2xl' : 'text-5xl'
          }  font-header text-blue dark:text-peach `}>{`${user.galleryText}`}</h1>
        <div className="mt-2 flex w-full items-center justify-center md:gap-4 lg:w-4/5 lg:gap-10  xl:w-3/4 xl:gap-20 2xl:gap-40 ">
          <div className={`${canUpload ? 'visible' : 'invisible'} mt-1  lg:w-60`}>
            <UploadSnap isMySnaps={isMySnaps} file={file} setFile={setFile} setIsUploaded={setIsUploaded} />
          </div>
          <MySnapsFilter setMyImages={setMyImages} likedImages={likedImages} setLikedImages={setLikedImages} />
          <Link to={`/${user.userName}`} className="mt-6 hidden    md:block  lg:text-xl">
            <motion.button
              className=" w-20 cursor-pointer rounded-md bg-cream p-2 font-header text-blue
              hover:bg-blue hover:text-peach dark:bg-blue dark:text-cream dark:hover:text-peach xl:w-48  xl:px-4"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Back
              <p className="hidden xl:inline">&nbsp;to profile</p>
            </motion.button>
          </Link>
        </div>
      </div>
      {!loading && !likedImages && (
        <UploadedSnaps
          userID={user.userID}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
          setImgData={setImgData}
          setSelectedImg={setSelectedImg}
        />
      )}
      {!loading && likedImages && (
        <LikedSnaps userID={user.userID} imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
      )}
      <div className=" h-60 w-full dark:bg-darkblue"></div>
      {selectedImg && (
        <Modal
          emotions={emotions}
          setIsUploaded={setIsUploaded}
          userID={user.userID}
          userName={user.userName}
          myImages={myImages}
          imgData={imgData}
          setImgData={setImgData}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  )
}

export default MySnaps
