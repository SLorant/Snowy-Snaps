import React from 'react'
import { useState } from 'react'

import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'


const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgData, setImgData] = useState({
    user: "",
    emotion: "",
    emotion2: "",
    emotion3: "",
    createdAt: ""
  })
  return (
    <div>
        
        <MyImages imgData={imgData} setImgData={setImgData} setSelectedImg = {setSelectedImg}/>
        { selectedImg && <Modal imgData={imgData} setImgData={setImgData} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage