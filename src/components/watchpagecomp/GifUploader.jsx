import React from 'react'
import { motion } from 'framer-motion'
import Emoji from './Emoji'
import { useState } from 'react'

const GifUploader = ({
  setShowGifUp,
  setFile,
  url,
  emotion,
  emotion2,
  emotion3,
  setEmotion,
  setEmotion2,
  setEmotion3,
}) => {
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
    setShowGifUp(false)
  }
  const [chooseEmotionArray, setChooseEmotionArray] = useState([])

  const handleOnClickEmoji = (label) => {
    if (chooseEmotionArray.includes(label)) {
      setChooseEmotionArray((arr) => arr.filter((item) => item !== label))
      emotion === label ? setEmotion('') : emotion2 === label ? setEmotion2('') : setEmotion3('')
    } else if (chooseEmotionArray.length === 3) {
      setChooseEmotionArray((arr) => [...arr])
    } else {
      setChooseEmotionArray((arr) => [...arr, label])
      emotion === ''
        ? setEmotion(label)
        : emotion2 === ''
        ? setEmotion2(label)
        : emotion3 === ''
        ? setEmotion3(label)
        : ''
    }
  }
  let blob
  //console.log(blob)
  const [blobUrl, setBlobUrl] = useState(null)

  const handleFetch = async () => {
    // fetch the image and convert it to a blob
    blob = await fetch(url).then((r) => r.blob())

    setBlobUrl(url)
  }
  handleFetch()

  const handleSave = async () => {
    setShowGifUp(false)

    var file = new File([blob], 'my_image.gif', {
      type: 'image/gif',
      lastModified: new Date().getTime(),
    })
    setFile(file)
  }
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full  items-center justify-center bg-black/70">
      <div className="flex h-[490px] w-80 flex-col items-center justify-center rounded-md bg-white">
        <h2 className="mb-2 font-header text-lg text-blue">Choose emotions for your gif</h2>
        {/*  <button onClick={handleFetch}>show</button> */}
        <img className="my-2  h-36 rounded-md" src={blobUrl} alt="" />
        <div className=" my-2 grid grid-cols-4 gap-2 md:my-2 xl:gap-2 ">
          {emotions.map((emotion) => (
            <div
              className="flex w-10 items-center justify-center"
              key={emotion.label}
              onClick={() => handleOnClickEmoji(emotion.label)}>
              <Emoji emotionArray={chooseEmotionArray} source={emotion.label} />
            </div>
          ))}
        </div>
        <div className="my-4 flex gap-6">
          <motion.button
            onClick={handleCancel}
            className="text-md mt-0 flex h-8
        w-24  items-center justify-center rounded-md bg-sand font-headersc text-blue hover:bg-blue  hover:text-peach
               md:h-8 md:w-28 lg:w-32  xl:w-20  "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Cancel
          </motion.button>
          <motion.button
            onClick={handleSave}
            className="text-md mt-0 flex h-8
        w-24  items-center justify-center rounded-md bg-sand font-headersc text-blue hover:bg-blue  hover:text-peach
               md:h-8 md:w-28 lg:w-32  xl:w-20  "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            Upload
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default GifUploader
