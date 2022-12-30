import React from 'react'
import { useState, useEffect, } from 'react'
import ImageGrid from './watchpagecomp/ImageGrid'
import useFirestore from './hooks/useFirestore'
import Modal from './watchpagecomp/Modal'
import Top from './watchpagecomp/Top'
import UploadForm from './watchpagecomp/UploadForm'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [order, setOrder] = useState('desc')
  const [emotion, setEmotion] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [imgType, setImgType] = useState("")

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
    createdAt: ""
  })
 
  
  return (
    <div>
      <div className="flex mt-20 bg-stone-200 h-20  w-full justify-center items-center">
            <h1 className="font-hbold  text-4xl text-slate-700">Huskies' Gallery</h1>
            </div>
        <div className="mx-24 mb-6  mt-4 flex border-slate-800 border-dashed">
        <Top  uploaded={uploaded} setOrder = {setOrder} setEmotion = {setEmotion}  setImgType={setImgType} file={file}/>
        
        <UploadForm onImageUpload={handleImageUpload} file={file} setFile={setFile} />
        </div>
        
        <ImageGrid imgData={imgData} onImageUpload={handleImageUpload} uploaded={uploaded} setImgData={setImgData} setSelectedImg = {setSelectedImg} order={order} emotion = {emotion}  imgType={imgType}/>
        { selectedImg && <Modal imgData={imgData} setImgData={setImgData} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage