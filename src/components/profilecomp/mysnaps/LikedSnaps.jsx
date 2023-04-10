import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import useShowLiked from '../../hooks/useShowLiked'

const LikedSnaps = ({ userID, setSelectedImg, setImgData, onLoaded }) => {
  const { docs } = useShowLiked(userID)

  // Loading logic: event listener for each image, when all images are loaded, call onLoaded() to set loading to false
  useEffect(() => {
    if (docs && docs.length > 0 && onLoaded) {
      const images = document.querySelectorAll('.motion-image')
      let loadedCount = 0

      const handleImageLoaded = () => {
        loadedCount++

        if (loadedCount === images.length) {
          onLoaded()
        }
      }

      images.forEach((image) => {
        if (image.complete) {
          handleImageLoaded()
        } else {
          image.addEventListener('load', handleImageLoaded)
        }
      })

      return () => {
        images.forEach((image) => {
          image.removeEventListener('load', handleImageLoaded)
        })
      }
    }
  }, [docs, onLoaded])

  return (
    <div className=" h-full">
      <div className="mx-2 mt-6 flex flex-col items-center justify-center sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-60">
        <div className="mx-auto mx-4 mt-4 columns-2 gap-3 space-y-3 pb-28 md:columns-2 lg:columns-3 xl:columns-4 ">
          {docs &&
            docs.map((doc) => (
              <motion.div
                className="break-inside-avoid"
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
                  className="motion-image h-full w-full rounded-lg object-cover opacity-80 hover:opacity-100"
                  loading="lazy"
                  alt="huskypic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default LikedSnaps
