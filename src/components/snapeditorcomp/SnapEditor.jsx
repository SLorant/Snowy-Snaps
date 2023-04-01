import { useState, useRef, React } from 'react'
import { motion } from 'framer-motion'
import Emoji from '../gallerycomp/Emoji'
import AspectRatioChooser from './AspectRatioChooser'
import useWindowSize from '../hooks/useWindowSize'
import { useMediaQuery } from 'react-responsive'
import ZoomSlider from './ZoomSlider'
import SnapEditorCanvas from './SnapEditorCanvas'

const SnapEditor = ({ picture, setPicture, setFile, uploadedEmotions, setUploadedEmotions, editor, isGallery }) => {
  const windowSize = useWindowSize()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  let [width, setWidth] = useState(isMobile ? 400 * (windowSize.width / 1000) : 400 * (windowSize.width / 1500))
  let [height, setHeight] = useState(isMobile ? 400 * (windowSize.width / 1000) : 400 * (windowSize.width / 1500))
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

  const handleOnClickEmoji = (label) => {
    if (uploadedEmotions.includes(label)) {
      setUploadedEmotions((arr) => arr.filter((item) => item !== label))
    } else if (uploadedEmotions.length === 3) {
      setUploadedEmotions((arr) => [...arr])
    } else {
      setUploadedEmotions((arr) => [...arr, label])
    }
  }

  const handleCancel = () => {
    document.body.style.overflow = 'auto'
    setPicture({
      ...picture,
      cropperOpen: false,
    })
  }
  const setEditorRef = (ed) => {
    editor = ed
  }

  function dataURItoBlob(dataURI) {
    var mime = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var binary = atob(dataURI.split(',')[1])
    var array = []
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i))
    }
    return new Blob([new Uint8Array(array)], { type: mime })
  }

  async function handleSave() {
    document.body.style.overflow = 'auto'
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas()
      const croppedImg = canvasScaled.toDataURL()
      var objecturl = URL.createObjectURL(dataURItoBlob(croppedImg))
      let blob = await fetch(objecturl).then((r) => r.blob())
      var file = new File([blob], 'my_image.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      })
      setFile(file)
      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-white dark:bg-blue">
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-white
          dark:bg-blue lg:flex-row lg:items-center lg:justify-center lg:gap-40 2xl:gap-64">
        <SnapEditorCanvas
          setEditorRef={setEditorRef}
          picture={picture}
          isGallery={isGallery}
          width={width}
          height={height}
        />
        <div className="mt-4 flex  flex-col items-center   justify-center md:mr-8">
          <div className="mt-2 flex w-64 flex-col items-center justify-center md:w-56  lg:mb-4  lg:mt-2 xl:w-80 ">
            <p className="mt-2 text-center font-header text-2xl text-blue dark:text-cream lg:text-3xl">
              Zoom in or out
            </p>
            <ZoomSlider picture={picture} setPicture={setPicture} />
          </div>
          {isGallery && (
            <div className="flex h-full flex-col  items-center justify-center">
              <div className="flex  flex-col gap-1 ">
                <p className="mt-2 text-center font-header text-2xl text-blue dark:text-cream lg:text-3xl">
                  Pick an aspect ratio
                </p>
                <AspectRatioChooser setHeight={setHeight} setWidth={setWidth} />
              </div>
              <div
                className="flex flex-col  items-center justify-center
                lg:relative lg:bottom-auto lg:left-auto lg:mt-0">
                <p className="mb-2 mt-4 mt-6 text-center font-header text-2xl text-blue dark:text-cream lg:text-3xl xl:mb-4">
                  Choose up to 3 emotions
                </p>
                <div className=" my-1 mb-3 grid grid-cols-4 gap-4 md:my-2 xl:gap-6 ">
                  {emotions.map((emotion) => (
                    <div
                      className="flex w-11 items-center justify-center "
                      key={emotion.label}
                      onClick={() => handleOnClickEmoji(emotion.label)}>
                      <Emoji emotionArray={uploadedEmotions} source={emotion.label} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="my-2 mt-4  mb-4  flex  gap-8  lg:mr-0 lg:mt-10 lg:flex-row">
            <motion.button
              className="flex h-10 w-24 items-center justify-center  rounded-md bg-sand
               font-header text-xl text-blue hover:bg-blue hover:text-peach dark:bg-darkblue dark:text-peach
                md:h-12 md:w-28 lg:w-32  lg:text-2xl xl:w-40"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              onClick={() => handleCancel()}>
              Cancel
            </motion.button>
            <motion.button
              className="flex h-10 w-24 items-center justify-center rounded-md bg-sand font-header
               text-xl text-blue hover:bg-blue hover:text-peach dark:bg-darkblue dark:text-peach md:h-12
                md:w-28 lg:w-32 lg:text-2xl  xl:w-40 "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              onClick={() => handleSave()}>
              Upload
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnapEditor
