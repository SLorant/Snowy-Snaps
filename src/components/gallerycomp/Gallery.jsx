import React from 'react'
import { useState, useEffect } from 'react'
/* import ImageGrid from './ImageGrid'
import Modal from './Modal' */
import GalleryFilter from './GalleryFilter'
import UploadSnap from './UploadSnap'
import { Helmet } from 'react-helmet-async'
import { lazy, Suspense } from 'react'
const Modal = lazy(() => import('./Modal'))
const ImageGrid = lazy(() => import('./ImageGrid'))
import LoadingSpinner from '../LoadingSpinner'

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [order, setOrder] = useState('desc')
  const [isUploaded, setIsUploaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imgType, setImgType] = useState('')
  const [emotionArray, setEmotionArray] = useState([])
  const emotions = [
    [{ label: 'happy' }, { src: '/assets/emojis/happy.png' }],
    [{ label: 'silly' }, { src: '/assets/emojis/silly.png' }],
    [{ label: 'relaxed' }, { src: '/assets/emojis/relaxed.png' }],
    [{ label: 'excited' }, { src: '/assets/emojis/excited.png' }],
    [{ label: 'confused' }, { src: '/assets/emojis/confused.png' }],
    [{ label: 'mischievous' }, { src: '/assets/emojis/mischievous.png' }],
    [{ label: 'stubborn' }, { src: '/assets/emojis/stubborn.png' }],
    [{ label: 'sad' }, { src: '/assets/emojis/sad.png' }],
  ]
  const [file, setFile] = useState(null)
  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })
  return (
    <div className="h-full min-h-screen w-full dark:bg-darkblue">
      <Helmet>
        <title>Huskies' Gallery</title>
        <meta property="og:title" content="Snowy Snaps - Huskies' Gallery" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Like snaps, customize your images before uploading, and much more!" />
      </Helmet>
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
        {loading && <LoadingSpinner />}
        <Suspense fallback={<LoadingSpinner />} >
          <ImageGrid
            imgData={imgData}
            isUploaded={isUploaded}
            setIsUploaded={setIsUploaded}
            setImgData={setImgData}
            setSelectedImg={setSelectedImg}
            order={order}
            emotionArray={emotionArray}
            imgType={imgType}
            onLoaded={() => setLoading(false)}
          />
        </Suspense>
      <div className=" h-60 w-full dark:bg-darkblue"></div>
      {selectedImg && (
        <Suspense fallback={<LoadingSpinner />}>
          <Modal
            emotions={emotions}
            imgData={imgData}
            setImgData={setImgData}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        </Suspense>
      )}
    </div>
  )
}

export default Gallery
