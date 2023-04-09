import React from 'react'
import { motion } from 'framer-motion'
import Emoji from './Emoji'
import { useState } from 'react'

const GifUploader = ({ setShowGifUploader, setFile, url, uploadedEmotions, setUploadedEmotions }) => {
  const emotions = [
    { label: 'happy' },
    { label: 'silly' },
    { label: 'relaxed' },
    { label: 'excited' },
    { label: 'confused' },
    { label: 'mischievous' },
    { label: 'stubborn' },
    { label: 'sad' },
  ]
  const handleCancel = () => {
    setShowGifUploader(false)
  }
  const handleOnClickEmoji = (label) => {
    if (uploadedEmotions.includes(label)) {
      setUploadedEmotions((arr) => arr.filter((item) => item !== label))
    } else if (uploadedEmotions.length === 3) {
      setUploadedEmotions((arr) => [...arr])
    } else {
      setUploadedEmotions((arr) => [...arr, label])
    }
  }
  let blob
  const [gifUrl, setGifUrl] = useState(null)

  const handleFetch = async () => {
    // fetch the image and convert it to a blob
    blob = await fetch(url).then((r) => r.blob())
    setGifUrl(url)
  }
  handleFetch()

  const handleSave = async () => {
    setShowGifUploader(false)
    var file = new File([blob], 'my_image.gif', {
      type: 'image/gif',
      lastModified: new Date().getTime(),
    })
    setFile(file)
  }
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full  items-center justify-center bg-black/70">
      <div className="flex h-[490px] w-96 flex-col items-center justify-center rounded-md bg-white">
        <h2 className="mb-2 font-header text-2xl text-blue">Choose emotions for your gif</h2>
        <img className=" my-4 h-44 rounded-md" src={gifUrl} alt="" />
        <div className=" my-2 grid grid-cols-4 gap-2 md:my-2 xl:gap-3 ">
          {emotions.map((emotion) => (
            <button
              className="flex w-11 items-center justify-center"
              key={emotion.label}
              onClick={() => handleOnClickEmoji(emotion.label)}>
              <Emoji emotionArray={uploadedEmotions} source={emotion.label} />
            </button>
          ))}
        </div>
        <div className="my-4 flex gap-6">
          <motion.button
            onClick={handleCancel}
            className="mt-0 flex h-10 w-24 items-center justify-center rounded-md bg-sand font-header
             text-lg text-blue hover:bg-blue  hover:text-peach md:h-10 md:w-28 lg:w-32  xl:w-24  "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Cancel
          </motion.button>
          <motion.button
            onClick={handleSave}
            className="mt-0 flex h-10 w-24 items-center justify-center rounded-md bg-sand font-header
             text-lg text-blue hover:bg-blue  hover:text-peach md:h-10 md:w-28 lg:w-32  xl:w-24 "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Upload
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default GifUploader
