import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
//import { useForceUpdate } from './useForceUpdate'

const ImageGrid = ({ setSelectedImg, order, emotion,  imgType, uploaded,  onImageUpload, setImgData, imgData }) => {

    let {docs} = ""
    
    
    
        if (uploaded) {
            ({docs}  = useFirestore('images', order, "", "picture"))
            onImageUpload(false)
        }
        else {
            ({docs}  = useFirestore('images', order, emotion, imgType))
        }
    
  
  return (
    <div className="  ">
     
        <div className="mx-2 md:mx-10 lg:mx-20 flex justify-center items-center">
        
       {/*  flex flex-wrap */}
      {/*  grid grid-cols-5  */}
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 mx-auto space-y-3 mt-4 mx-4">

                { docs && docs.map(doc => (
                 <motion.div className="break-inside-avoid" key={doc.id}
                 layout
                 onClick={() => {setSelectedImg(doc.url); setImgData({
                    user: doc.user,
                    emotion: doc.emotion,
                    createdAt: doc.createdAt
                 })}}>
                <motion.img  src={doc.url} className="object-cover w-full h-full hover:opacity-100 opacity-80 rounded-lg" loading="lazy" alt="huskypic"
                    initial = {{ opacity: 0}}
                    animate = {{ opacity: 1}}
                    transition = {{ delay: 1}} />
                </motion.div>)) }

            </div>
            </div>
        </div>
  )
}

export default ImageGrid