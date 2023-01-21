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
      <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className=" font-header  text-3xl  text-blue xl:text-4xl">My Gallery</h1>
        <div className="mt-2 flex w-2/3  items-center  justify-center gap-20 ">
          <div className="w-60 ">
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
            className=" mt-6 w-1/5 cursor-pointer rounded-md bg-cream p-2 font-header text-lg  text-blue hover:bg-blue hover:text-peach"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Back to profile
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
