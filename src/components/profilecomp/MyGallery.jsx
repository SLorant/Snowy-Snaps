import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'
import UploadForm from '../watchpagecomp/UploadForm'
import MyGalleryFilter from './MyGalleryFilter'
import { useAuth } from '../../contexts/AuthContext'
import LikedImages from './LikedImages'
import { Link } from 'react-router-dom'
import useLoadGallery from './useLoadGallery'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [likedGallery, setLikedGallery] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [userID, setUserID] = useState('')
  const [myImages, setMyImages] = useState(true)
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({
    userName: '',
    userID: '',
    galleryText: '',
    canUpload: false,
  })
  const [galleryText, setGalleryText] = useState('')
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
  const gallery = true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useLoadGallery(setUser, setCanUpload)
  console.log(canUpload)
  return (
    <div>
      <div className="mt-32 flex flex-col items-center justify-center">
        <h1 className=" font-header  text-4xl  text-blue sm:text-5xl">{`${user.galleryText}`}</h1>
        <div className="mt-2 flex w-full items-center justify-center md:gap-4 lg:w-4/5 lg:gap-10  xl:w-3/4 xl:gap-20 2xl:gap-40 ">
          <div className={`${canUpload ? 'visible' : 'invisible'} mt-1  lg:w-60`}>
            <UploadForm setUploaded={setUploaded} gallery={gallery} file={file} setFile={setFile} />
          </div>
          <MyGalleryFilter setMyImages={setMyImages} likedGallery={likedGallery} setLikedGallery={setLikedGallery} />
          <Link to={`/${user.userName}`} className="mt-6  hidden w-20    md:block lg:w-60 lg:text-xl">
            <motion.button
              className=" cursor-pointer rounded-md bg-cream  p-2 font-header text-blue   hover:bg-blue hover:text-peach  xl:px-4"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Back
              <p className="hidden xl:inline">&nbsp;to profile</p>
            </motion.button>
          </Link>
        </div>
      </div>
      {!loading && !likedGallery && (
        <MyImages
          userID={user.userID}
          uploaded={uploaded}
          setUploaded={setUploaded}
          setImgData={setImgData}
          setSelectedImg={setSelectedImg}
        />
      )}
      {!loading && likedGallery && (
        <LikedImages userID={user.userID} imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
      )}
      {selectedImg && (
        <Modal
          uploaded={uploaded}
          setUploaded={setUploaded}
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

export default WatchPage
