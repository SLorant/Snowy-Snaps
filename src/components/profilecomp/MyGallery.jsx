import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'
import UploadForm from '../watchpagecomp/UploadForm'
import GalleryTop from './GalleryTop'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [order, setOrder] = useState('desc')
  const [emotion, setEmotion] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [imgType, setImgType] = useState('')
  const [emotionArray, setEmotionArray] = useState([])

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
  return (
    <div>
      <div className="mt-20 flex flex-col items-center justify-center">
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
          <GalleryTop />
          <motion.button
            className=" w-1/5 cursor-pointer  rounded-md bg-cream p-2   font-header text-lg text-blue"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Back to profile
          </motion.button>
        </div>
      </div>
      <MyImages imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
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
