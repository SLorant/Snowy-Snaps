import React from 'react'
import { useState } from 'react'

import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'


const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
        
        <MyImages setSelectedImg = {setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }

        </div>
  )
}

export default WatchPage