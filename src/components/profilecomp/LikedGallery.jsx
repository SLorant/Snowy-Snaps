import React from 'react'
import { useState } from 'react'

import LikedImages from './LikedImages'
import Modal from '../watchpagecomp/Modal'

const LikedGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [imgData, setImgData] = useState({
      user: "",
      emotion: "",
      createdAt: ""
    })
    return (
      <div>
          
          <LikedImages imgData={imgData} setImgData={setImgData} setSelectedImg = {setSelectedImg}/>
          { selectedImg && <Modal imgData={imgData} setImgData={setImgData} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
  
          </div>
    )
  }

export default LikedGallery