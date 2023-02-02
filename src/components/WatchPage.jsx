import React from 'react'
import { useState, useEffect } from 'react'
import ImageGrid from './watchpagecomp/ImageGrid'
import useFirestore from './hooks/useFirestore'
import Modal from './watchpagecomp/Modal'
import FilterSort from './watchpagecomp/FilterSort'
import UploadForm from './watchpagecomp/UploadForm'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [order, setOrder] = useState('desc')
  const [emotion, setEmotion] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [imgType, setImgType] = useState('')
  const [emotionArray, setEmotionArray] = useState([])

  const [file, setFile] = useState(null)
  let changed = false

  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })

  return (
    <div className=" ">
      <div className="mt-20 flex h-10 w-full items-center  justify-center md:mt-28 md:h-20">
        <h1 className=" font-header  text-4xl  text-blue xl:text-5xl">Huskies' Gallery</h1>
      </div>
      <div className="mx-7 mb-2 mt-4 flex  md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 ">
        <FilterSort
          setOrder={setOrder}
          emotionArray={emotionArray}
          setEmotionArray={setEmotionArray}
          setImgType={setImgType}
          file={file}
        />

        <UploadForm setUploaded={setUploaded} file={file} setFile={setFile} />
      </div>

      <ImageGrid
        imgData={imgData}
        uploaded={uploaded}
        setUploaded={setUploaded}
        setImgData={setImgData}
        setSelectedImg={setSelectedImg}
        order={order}
        emotionArray={emotionArray}
        imgType={imgType}
      />
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
