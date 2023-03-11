import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg, order, emotionArray, imgType, isUploaded, setIsUploaded, setImgData }) => {
  const { docs } = useFirestore('images', undefined, isUploaded, setIsUploaded, order, emotionArray, imgType)

  return (
    <div className="  ">
      <div className="mx-2 mt-6 flex items-center justify-center md:mx-10 lg:mx-24 xl:mx-32 2xl:mx-36">
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
                    userid: doc.userid,
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
