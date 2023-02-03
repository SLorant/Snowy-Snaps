import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from 'luxon'
import { useAuth } from '../../contexts/AuthContext'
import LikedButton from './LikedButton'
import IsLiked from './isLiked'
import { Link } from 'react-router-dom'

const Modal = ({ myImages, selectedImg, setSelectedImg, imgData, setImgData }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [error, setError] = useState(null)
  const { currentUser } = useAuth()
  let userid
  if (currentUser) {
    userid = currentUser.uid
  }

  const date = new Date(imgData.createdAt.seconds * 1000)
  const newdate = date.toLocaleString(DateTime.DATE_MED)
  const finaldate = newdate.substring(0, 12)
  const emotions = [
    [{ label: 'happy' }, { src: 'src/assets/emojis/happy.png' }],
    [{ label: 'silly' }, { src: 'src/assets/emojis/silly.png' }],
    [{ label: 'relaxed' }, { src: 'src/assets/emojis/relaxed.png' }],
    [{ label: 'excited' }, { src: 'src/assets/emojis/excited.png' }],
    [{ label: 'confused' }, { src: 'src/assets/emojis/confused.png' }],
    [{ label: 'mischievous' }, { src: 'src/assets/emojis/mischievous.png' }],
    [{ label: 'stubborn' }, { src: 'src/assets/emojis/stubborn.png' }],
    [{ label: 'sad' }, { src: 'src/assets/emojis/sad.png' }],
  ]

  currentUser ? IsLiked(imgData.createdAt, userid, setIsLiked, setLikes) : ''

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
      setImgData({
        user: '',
        emotion: '',
        createdAt: '',
      })
    }
  }
  const handleExit = () => {
    setSelectedImg(null)
    setImgData({
      user: '',
      emotion: '',
      createdAt: '',
    })
  }
  function getEmotionImg(emotion) {
    for (let i = 0; i < emotions.length; i++) {
      if (emotions[i][0].label === emotion) {
        return emotions[i][1].src
      }
    }
    return
  }
  const handleLike = () => {
    if (currentUser) {
      isLiked ? '' : setIsLiked(true)
    } else {
      setError('Please log in')
    }
  }
  useEffect(() => {
    setTimeout(function () {
      setError(null)
    }, 10000)
  }, [error])

  return (
    <motion.div
      className="backdrop fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/80 lg:flex-row"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.div
        className="md:max-w-5/6 mb-28 flex min-w-[15%] flex-col items-center justify-center rounded-md bg-white
        md:mb-4   md:mb-0 md:bg-transparent  lg:mb-10 lg:h-1/2  lg:flex-row  xl:h-[60%]"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}>
        <motion.div
          className="absolute -top-16 right-4 cursor-pointer md:-top-2 md:-right-20 lg:-top-3 lg:-right-3"
          onClick={handleExit}
          whileHover={{ scale: 1.2 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.div>
        <div className="flex h-full w-full flex-col  items-center justify-center">
          <motion.img
            src={selectedImg}
            className="mx-2 block rounded-lg border-4
          border-white md:h-full md:rounded-t-lg lg:rounded-lg xl:h-full xl:w-full "
            alt="modalpic"
          />
        </div>
        <motion.div
          className={`${
            myImages ? 'lg:h-64' : 'lg:h-64'
          } flex h-8 items-start justify-center gap-8 rounded-b-lg   md:mt-6
          md:h-24  md:w-96 md:items-center md:rounded-lg  md:bg-cream   lg:mt-0  lg:ml-6  lg:w-40 lg:flex-col lg:gap-0 lg:bg-cream`}
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}>
          <div
            className="mt-2 flex h-2 w-full items-center justify-center gap-8 md:ml-4 md:mt-0  md:h-10 md:w-1/3
            md:flex-col md:gap-0 lg:mb-4 lg:ml-0 lg:mt-4   lg:w-full">
            <div className="flex text-center font-header text-2xl text-blue lg:mb-2">
              By&nbsp;
              <Link to={`/${imgData.user}`} state={{ imgData: imgData }}>
                <motion.p className=" underline" whileHover={{ scale: 1.1 }}>
                  {imgData.user}
                </motion.p>
              </Link>
            </div>

            <p className="text-center font-header text-base text-blue lg:mb-4  ">{finaldate}</p>
          </div>
          <div
            className="absolute top-12 mt-4 flex w-72 items-center justify-center  gap-6
             rounded-lg bg-cream md:static  md:mt-0 md:w-2/3 md:flex-row lg:w-40 lg:flex-col lg:gap-0">
            <div className=" flex  gap-2  lg:mb-2 ">
              {imgData.emotion && (
                <img
                  className="h-11 w-10"
                  src={getEmotionImg(imgData.emotion)}
                  alt={imgData.emotion}
                />
              )}
              {imgData.emotion2 && (
                <img
                  className="h-11 w-10"
                  src={getEmotionImg(imgData.emotion2)}
                  alt={imgData.emotion2}
                />
              )}
              {imgData.emotion3 && (
                <img
                  className="h-11 w-10"
                  src={getEmotionImg(imgData.emotion3)}
                  alt={imgData.emotion3}
                />
              )}
            </div>
            {!isLiked && (
              <div className="flex flex-col items-center justify-center">
                <motion.button
                  className="mb-2 flex  items-center justify-center rounded-b-lg md:bg-transparent"
                  onClick={handleLike}
                  whileHover={{ scale: 1.2 }}>
                  <p className="absolute font-header text-xl text-blue ">{likes}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#2D4550"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </motion.button>
                {error && (
                  <div className="static top-8 -right-32  font-header text-xl text-peach underline md:absolute lg:static">
                    <Link to="/login">{error}</Link>
                  </div>
                )}
              </div>
            )}
            {isLiked && <LikedButton imgdata={imgData.createdAt} setIsLiked={setIsLiked} />}
            {myImages && (
              <motion.button
                className=" absolute -bottom-20  flex w-40 items-center justify-center rounded-md bg-cream p-2
              "
                whileHover={{
                  transition: {
                    duration: 0.2,
                  },
                  scale: 1.1,
                }}>
                <p className="mr-2 font-header text-lg text-blue">Delete snap</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-file-trash"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
