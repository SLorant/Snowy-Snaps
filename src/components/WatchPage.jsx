import React from 'react'
import { useState } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import ImageGrid from './watchpagecomp/ImageGrid'
import Modal from './watchpagecomp/Modal'
import Top from './watchpagecomp/Top'
import UploadForm from './watchpagecomp/UploadForm'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
        
        <Top/>
        <UploadForm/>
        
        <ImageGrid setSelectedImg = {setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage