import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
//import { useForceUpdate } from './useForceUpdate'

const ImageGrid = ({
  setSelectedImg,
  order,
  emotionArray,
  imgType,
  uploaded,
  onImageUpload,
  setImgData,
  imgData,
}) => {
  let { docs } = ''

  if (uploaded) {
    ;({ docs } = useFirestore('images', undefined, order, emotionArray, imgType))
    onImageUpload(false)
  } else {
    ;({ docs } = useFirestore('images', undefined, order, emotionArray, imgType))
  }

  return (
    <div className="  ">
      <div className="mx-2 flex items-center justify-center md:mx-10 lg:mx-24">
        {/*  flex flex-wrap */}
        {/*  grid grid-cols-5  */}
        <div className=" mx-auto mx-4 mt-4 columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4 xl:columns-5">
          {docs &&
            docs.map((doc) => (
              <motion.div
                className="break-inside-avoid "
                key={doc.id}
                layout
                onClick={() => {
                  setSelectedImg(doc.url)
                  setImgData({
                    user: doc.user,
                    emotion: doc.emotion,
                    emotion2: doc.emotion2,
                    emotion3: doc.emotion3,
                    createdAt: doc.createdAt,
                  })
                }}>
                <motion.img
                  src={doc.url}
                  className="h-full w-full rounded-lg object-cover opacity-80 hover:opacity-100"
                  loading="lazy"
                  alt="huskypic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
