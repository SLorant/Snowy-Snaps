import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'
import UploadForm from '../watchpagecomp/UploadForm'
import GalleryTop from './GalleryTop'
import LikedImages from './LikedImages'
import { useNavigate } from 'react-router-dom'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [likedGallery, setLikedGallery] = useState(false)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })
  const handleImageUpload = (value) => {
    setUploaded(value)
  }
  const gallery = true

  async function handleNavigate() {
    try {
      navigate('/profile')
    } catch {
      setError("Couldn't load page")
    }
  }
  return (
    <div>
      <div className="mt-32 flex flex-col items-center justify-center">
        <h1 className=" font-header  text-5xl  text-blue xl:text-5xl">My Gallery</h1>
        <div className="mt-2 flex w-full items-center justify-center   md:gap-10 lg:w-4/5  xl:w-3/4 xl:gap-24 2xl:gap-28 ">
          <div className="mt-1 md:w-60">
            <UploadForm
              gallery={gallery}
              onImageUpload={handleImageUpload}
              file={file}
              setFile={setFile}
            />
          </div>
          <GalleryTop likedGallery={likedGallery} setLikedGallery={setLikedGallery} />
          <motion.button
            onClick={handleNavigate}
            className="mt-6 hidden w-20 cursor-pointer rounded-md bg-cream p-2 font-header text-blue hover:bg-blue hover:text-peach md:block   lg:text-xl xl:w-1/6"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Back
            <p className="hidden xl:inline">&nbsp;to profile</p>
          </motion.button>
        </div>
      </div>
      {!likedGallery && (
        <MyImages imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
      )}
      {likedGallery && (
        <LikedImages imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
      )}
      {selectedImg && (
        <Modal
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
