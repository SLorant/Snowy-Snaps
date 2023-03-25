import { useState } from 'react'
import Emoji from './Emoji'
import { motion } from 'framer-motion'

const GalleryFilter = ({ emotions, setOrder, emotionArray, setEmotionArray, setImgType }) => {
  const [selectedSortType, setSelectedSortType] = useState(null)
  const [selectedImgType, setSelectedImgType] = useState('')
  const [mobileFilterOpened, setMobileFilterOpened] = useState(false)
  const handleOnClickEmotion = (label) => {
    if (emotionArray.includes(label)) {
      setEmotionArray((arr) => arr.filter((item) => item !== label))
    } else {
      setEmotionArray((arr) => [...arr, label])
    }
  }
  const handleOnClickOrder = (order) => {
    setOrder(order)
    setSelectedSortType(order)
  }

  const handleOnClickImageType = (type) => {
    setImgType(type)
    setSelectedImgType(type)
  }
  const handleOnClickShowAll = () => {
    setEmotionArray([])
    setImgType('')
    setSelectedImgType('')
  }
  const handleOnClickFilter = () => {
    setMobileFilterOpened(!mobileFilterOpened)
  }

  return (
    <div className="flex w-full flex-col items-end md:w-3/4">
      <div
        className="flex w-full flex-col items-center  justify-center rounded-md bg-cream dark:bg-blue
            md:flex-row md:gap-12 lg:gap-14 xl:gap-20 2xl:gap-20">
        <div
          className={`${mobileFilterOpened ? 'border-b-2' : ''}
            flex w-full items-center justify-center border-peach md:hidden`}>
          <button
            className="my-1 flex w-full justify-center  font-header text-xl text-blue dark:text-cream"
            onClick={() => handleOnClickFilter()}>
            Filter and Sort
            <motion.img
              src="src\assets\icons\downarrow.png"
              className="ml-4 w-7 dark:hidden"
              alt=""
              animate={{ rotate: mobileFilterOpened ? 180 : 0 }}
            />
            <motion.img
              src="src\assets\icons\downarrowdark.png"
              className="ml-4 hidden w-7 dark:block"
              alt=""
              animate={{ rotate: mobileFilterOpened ? 180 : 0 }}
            />
          </button>
        </div>
        <div className={`${mobileFilterOpened ? 'flex' : 'hidden md:flex'}  flex-col  lg:w-1/6`}>
          <h2 className="mt-2 text-center font-header  text-3xl text-peach dark:text-cream  md:my-2  xl:text-4xl">
            Sort by
          </h2>
          <div className="mt-2 mb-2 flex items-center justify-center gap-6 md:mb-3 md:flex-col md:gap-2 2xl:mt-0">
            <motion.p
              onClick={() => handleOnClickOrder('desc')}
              className={`${selectedSortType === 'asc' ? 'opacity-60 dark:opacity-40' : 'opacity-100'}
                 cursor-pointer  font-header text-xl text-blue dark:text-cream md:text-xl lg:text-2xl`}
              whileHover={{ scale: 1.1 }}>
              Newest
            </motion.p>
            <motion.p
              onClick={() => handleOnClickOrder('asc')}
              className={`${selectedSortType === 'asc' ? 'opacity-100' : 'opacity-60 dark:opacity-40'}
                  cursor-pointer font-header text-xl text-blue dark:text-cream lg:text-2xl`}
              whileHover={{ scale: 1.1 }}>
              Oldest
            </motion.p>
          </div>
        </div>
        <div className={`${mobileFilterOpened ? 'flex' : 'hidden md:flex'} flex-col items-center    2xl:mb-1`}>
          <h2 className="mt-1 text-center font-header text-3xl text-peach dark:text-cream md:mt-6 lg:mt-5 xl:mt-5 xl:text-4xl 2xl:mt-0">
            Filter emotion
          </h2>
          <div className="my-2 grid grid-cols-4 gap-4    md:gap-2 md:gap-x-4 2xl:mb-3 2xl:mt-4 2xl:flex 2xl:gap-4">
            {emotions.map(([emotion, source]) => (
              <div
                className="flex w-10 items-center justify-center 2xl:w-11"
                key={source.src}
                onClick={() => handleOnClickEmotion(emotion.label)}>
                <Emoji emotionArray={emotionArray} source={emotion.label} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${mobileFilterOpened ? 'flex' : 'hidden md:flex'} flex-col`}>
          <h2 className="mt-4 text-center font-header text-3xl text-peach dark:text-cream md:my-2  xl:text-4xl">
            Image type
          </h2>
          <div className="mt-2 mb-2 flex flex-row items-center justify-center gap-6 md:mb-3 md:flex-col md:gap-2 2xl:mt-0">
            <motion.p
              onClick={() => handleOnClickImageType('picture')}
              className={`${selectedImgType === 'picture' ? 'opacity-100' : 'opacity-60  dark:opacity-40'}
                cursor-pointer text-center font-header text-xl text-blue dark:text-cream md:text-xl lg:text-2xl`}
              whileHover={{ scale: 1.1 }}>
              Picture
            </motion.p>
            <motion.p
              onClick={() => handleOnClickImageType('gif')}
              className={`${selectedImgType === 'gif' ? 'opacity-100' : 'opacity-60 dark:opacity-40'}
                cursor-pointer text-center font-header text-xl text-blue dark:text-cream md:text-xl lg:text-2xl`}
              whileHover={{ scale: 1.1 }}>
              Gif
            </motion.p>
          </div>
        </div>
      </div>
      <motion.p
        onClick={() => handleOnClickShowAll()}
        className={`${selectedImgType === '' && !emotionArray.length ? 'opacity-100' : 'opacity-60 dark:opacity-40'}
      ${mobileFilterOpened ? 'flex' : 'hidden md:block'} 
      mt-1 mr-1 cursor-pointer font-header text-xl text-blue dark:text-cream lg:text-2xl`}
        whileHover={{ scale: 1.1 }}>
        Show everything
      </motion.p>
    </div>
  )
}

export default GalleryFilter
