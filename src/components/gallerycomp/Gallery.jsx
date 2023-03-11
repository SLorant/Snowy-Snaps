import React from 'react'
import { useState, useEffect } from 'react'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import GalleryFilter from './GalleryFilter'
import UploadSnap from './UploadSnap'

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [order, setOrder] = useState('desc')
  const [isUploaded, setIsUploaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imgType, setImgType] = useState('')
  const [emotionArray, setEmotionArray] = useState([])
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
  const [file, setFile] = useState(null)
  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="h-full w-full dark:bg-darkblue">
      <div className=" h-1 w-full dark:bg-darkblue"></div>
      <div className="mt-20 flex h-10 w-full items-center  justify-center md:mt-28 md:h-20">
        <h1 className=" font-header text-4xl  text-blue  dark:text-peach xl:text-5xl">Huskies' Gallery</h1>
      </div>
      <div className="mx-7 mb-2 mt-6 flex  md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 ">
        <GalleryFilter
          emotions={emotions}
          setOrder={setOrder}
          emotionArray={emotionArray}
          setEmotionArray={setEmotionArray}
          setImgType={setImgType}
          file={file}
        />
        <UploadSnap file={file} setFile={setFile} setIsUploaded={setIsUploaded} />
      </div>
      {!loading && (
        <ImageGrid
          imgData={imgData}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
          setImgData={setImgData}
          setSelectedImg={setSelectedImg}
          order={order}
          emotionArray={emotionArray}
          imgType={imgType}
        />
      )}
      <div className=" h-60 w-full dark:bg-darkblue"></div>
      {selectedImg && (
        <Modal
          emotions={emotions}
          imgData={imgData}
          setImgData={setImgData}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  )
}

export default Gallery
