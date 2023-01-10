import React from 'react'
import { useState, useEffect, } from 'react'
import ImageGrid from './watchpagecomp/ImageGrid'
import useFirestore from './hooks/useFirestore'
import Modal from './watchpagecomp/Modal'
import FilterSort from './watchpagecomp/FilterSort'
import UploadForm from './watchpagecomp/UploadForm'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [order, setOrder] = useState('desc')
  const [emotion, setEmotion] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [imgType, setImgType] = useState("")
  const [emotionArray, setEmotionArray] = useState([]);

  const [file, setFile] = useState(null);
  let changed = false;

  const handleImageUpload = (value) => {
    setUploaded(value)
  }

  useEffect(() => {
    setUploaded(false)
  }, [uploaded])

  const [imgData, setImgData] = useState({
    user: "",
    emotion: "",
    emotion2: "",
    emotion3: "",
    createdAt: ""
  })
 
  
  return (
    <div className=" ">
      <div className="flex mt-16 md:mt-20 h-10 md:h-20  w-full justify-center items-center">
      <h1 className=" text-3xl  text-blue  xl:text-4xl font-header">Huskies' Gallery</h1>
            </div>
        <div className="mx-7 md:mx-16 lg:mx-24 mb-2  mt-4 flex ">
        <FilterSort setOrder = {setOrder} emotionArray={emotionArray} setEmotionArray = {setEmotionArray}  setImgType={setImgType} file={file}/>
        
        <UploadForm onImageUpload={handleImageUpload} file={file} setFile={setFile} />
        </div>
        
        <ImageGrid imgData={imgData} onImageUpload={handleImageUpload} uploaded={uploaded} setImgData={setImgData} setSelectedImg = {setSelectedImg} order={order} emotionArray = {emotionArray}  imgType={imgType}/>
        { selectedImg && <Modal imgData={imgData} setImgData={setImgData} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage