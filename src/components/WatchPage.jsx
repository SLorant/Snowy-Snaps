import React from 'react'
import { useState } from 'react'
import ImageGrid from './watchpagecomp/ImageGrid'
import useFirestore from './hooks/useFirestore'
import Modal from './watchpagecomp/Modal'
import Top from './watchpagecomp/Top'
import UploadForm from './watchpagecomp/UploadForm'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [order, setOrder] = useState('desc')
  const [emotion, setEmotion] = useState('')
  const [limit, setLimit] = useState(50)
  const [imgType, setImgType] = useState("")
  let changed = false;


 
  
  return (
    <div>
      <div className="flex mt-20 bg-stone-200 h-20  w-full justify-center items-center">
            <h1 className="font-hbold  text-4xl text-slate-700">Huskies' Gallery</h1>
            </div>
        <div className="mx-24 mb-6  mt-4 flex  border-b-2 border-slate-800 border-dashed">
        <Top   setOrder = {setOrder} setEmotion = {setEmotion}  setImgType={setImgType}/>
        
        <UploadForm />
        </div>
        
        <ImageGrid  setSelectedImg = {setSelectedImg} order={order} emotion = {emotion}  imgType={imgType}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage