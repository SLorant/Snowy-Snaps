import { useState } from 'react'
import Emoji from './Emoji'
import { motion } from 'framer-motion'

const FilterSort = ({ setOrder, emotionArray, setEmotionArray, setImgType }) => {
  const [sortbySelected, setSortbySelected] = useState(null)
  const [imgTypeSelected, setImgTypeSelected] = useState('')
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

  const handleOnClickEmotion = (label) => {
    if (emotionArray.includes(label)) {
      setEmotionArray((arr) => arr.filter((item) => item !== label))
    } else {
      setEmotionArray((arr) => [...arr, label])
    }
  }

  const handleOnClickOrder = (order) => {
    setOrder(order)
    setSortbySelected(order)
  }

  const handleOnClickImageType = (type) => {
    setImgType(type)
    setImgTypeSelected(type)
  }

  const handleOnClickShowAll = () => {
    setEmotionArray([])
    setImgType('')
    setImgTypeSelected('')
  }
  const [filteropen, setFilterOpen] = useState(false)
  const handleOnClickFilter = () => {
    setFilterOpen(!filteropen)
  }

  return (
    <div className="flex w-full flex-col items-end md:w-3/4">
      <div className="flex w-full flex-col items-center  justify-center  rounded-md bg-cream  md:flex-row md:gap-10 xl:gap-20 2xl:gap-14">
        <div
          className={`${
            filteropen ? 'border-b-2' : ''
          } flex w-full items-center justify-center border-peach md:hidden`}>
          <button
            className="my-1 flex w-full  justify-center font-headersc text-blue "
            onClick={() => handleOnClickFilter()}>
            Filter and Sort
            <motion.img
              src="src\assets\downarrow.png"
              className="ml-4 w-6"
              alt=""
              animate={{ rotate: filteropen ? 180 : 0 }}
            />
          </button>
        </div>
        <div className={`${filteropen ? 'flex' : 'hidden md:flex'}  flex-col md:w-1/3 lg:w-1/6`}>
          <h2 className="mt-2 text-center font-header  text-2xl text-peach  md:my-2  xl:text-3xl">
            Sort by
          </h2>
          <div className="mt-2 mb-2 flex items-center justify-center gap-6 md:mb-3 md:flex-col md:gap-2 2xl:mt-0">
            <motion.p
              onClick={() => handleOnClickOrder('desc')}
              className={`${
                sortbySelected === 'asc' ? 'opacity-60' : 'opacity-100'
              } cursor-pointer  font-header text-xl text-blue md:text-lg lg:text-xl`}
              whileHover={{ scale: 1.15 }}>
              Newest
            </motion.p>
            <motion.p
              onClick={() => handleOnClickOrder('asc')}
              className={`${
                sortbySelected === 'asc' ? 'opacity-100' : 'opacity-60'
              } cursor-pointer font-header text-lg text-blue lg:text-xl`}
              whileHover={{ scale: 1.15 }}>
              Oldest
            </motion.p>
          </div>
        </div>

        <div
          className={`${filteropen ? 'flex' : 'hidden md:flex'} flex-col items-center    2xl:mb-1`}>
          <h2 className="mt-1  text-center font-header text-2xl text-peach    md:mt-3 xl:text-3xl 2xl:mt-0  ">
            Filter emotion
          </h2>

          <div className="my-2 grid grid-cols-4  gap-4 md:gap-2 2xl:mb-3 2xl:mt-4 2xl:flex 2xl:gap-4">
            {emotions.map((emotion) => (
              <div
                className="flex w-10 items-center justify-center"
                key={emotion.label}
                onClick={() => handleOnClickEmotion(emotion.label)}>
                <Emoji emotionArray={emotionArray} source={emotion.label} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${filteropen ? 'flex' : 'hidden md:flex'} flex-col`}>
          <h2 className="mt-2 text-center font-header text-2xl text-peach md:my-2  xl:text-3xl">
            Image type
          </h2>
          <div className="mt-2 mb-2 flex flex-row items-center justify-center gap-6 md:mb-3 md:flex-col md:gap-2 2xl:mt-0">
            <motion.p
              onClick={() => handleOnClickImageType('picture')}
              className={`${imgTypeSelected === 'picture' ? 'opacity-100' : 'opacity-60'}
              cursor-pointer text-center font-header text-xl text-blue md:text-lg lg:text-xl`}
              whileHover={{ scale: 1.15 }}>
              Picture
            </motion.p>
            <motion.p
              onClick={() => handleOnClickImageType('gif')}
              className={`${imgTypeSelected === 'gif' ? 'opacity-100' : 'opacity-60'}
               cursor-pointer text-center font-header text-xl text-blue md:text-lg lg:text-xl`}
              whileHover={{ scale: 1.15 }}>
              Gif
            </motion.p>
          </div>
        </div>
      </div>

      <motion.p
        onClick={() => handleOnClickShowAll()}
        className={`${imgTypeSelected === '' && !emotionArray.length ? 'opacity-100' : 'opacity-60'}
      ${filteropen ? 'flex' : 'hidden md:block'} 
      mt-1 mr-1 cursor-pointer font-header text-lg text-blue lg:text-xl`}
        whileHover={{ scale: 1.1 }}>
        Show everything
      </motion.p>
    </div>
  )
}

export default FilterSort
