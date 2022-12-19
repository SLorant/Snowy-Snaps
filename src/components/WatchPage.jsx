import React from 'react'
import { useState } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
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
  
 
  
  return (
    <div>
        
        <Top  setOrder = {setOrder} setEmotion = {setEmotion} setLimit={setLimit}/>
        
        <UploadForm />
        
        <ImageGrid setSelectedImg = {setSelectedImg} order={order} emotion = {emotion} limit = {limit}  />
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage