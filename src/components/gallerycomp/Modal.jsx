import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from 'luxon'
import { useAuth } from '../../contexts/AuthContext'
import LikedButton from './LikedButton'
import IsLiked from './utilities/isLiked'
import { Link } from 'react-router-dom'
import DeleteSnap from './utilities/DeleteSnap'
import TrashIcon from '../../icons/TrashIcon'
import HeartIcon from '../../icons/HeartIcon'
import XIcon from '../../icons/XIcon'
import ShowLikes from './utilities/ShowLikes'

const Modal = ({ emotions, setIsUploaded, userID, myImages, selectedImg, setSelectedImg, imgData, setImgData }) => {
  const [likedByUser, setLikedByUser] = useState(false)
  const [likes, setLikes] = useState(0)
  const [error, setError] = useState(null)
  const { currentUser } = useAuth()
  const [canDelete, setCanDelete] = useState(false)
  const date = new Date(imgData.createdAt.seconds * 1000)
  const newdate = date.toLocaleString(DateTime.DATE_MED)
  const finaldate = newdate.substring(0, 12)
  let userid

  if (currentUser) {
    userid = currentUser.uid
    useEffect(() => {
      userID === currentUser.uid ? setCanDelete(true) : setCanDelete(false)
    }, [])
  }

  currentUser && IsLiked(imgData.createdAt, userid, setLikedByUser, setLikes)
  !currentUser && ShowLikes(imgData.createdAt, setLikes)

  const handleClickOutside = (e) => {
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

  const handleDelete = () => {
    DeleteSnap(imgData.createdAt)
    setSelectedImg(null)
    setImgData({
      user: '',
      emotion: '',
      createdAt: '',
    })
    setTimeout(function () {
      setIsUploaded(true)
    }, 600)
  }

  function getEmotionEmoji(emotion) {
    for (let i = 0; i < emotions.length; i++) {
      if (emotions[i][0].label === emotion) {
        return emotions[i][1].src
      }
    }
    return
  }
  const handleLike = () => {
    if (currentUser) {
      likedByUser ? '' : setLikedByUser(true)
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
      onClick={handleClickOutside}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.div
        className="md:max-w-5/6 mb-28 flex min-w-[15%] flex-col items-center justify-center rounded-md bg-white
        dark:bg-blue md:mb-4  md:mb-0 md:bg-transparent dark:md:bg-transparent  lg:mb-10 lg:h-1/2  lg:flex-row  xl:h-[60%]"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}>
        <motion.div
          className="absolute -top-16 right-4 cursor-pointer md:-top-2 md:-right-20 lg:-top-3 lg:-right-3"
          onClick={handleExit}
          whileHover={{ scale: 1.2 }}>
          <XIcon />
        </motion.div>
        <div className="flex h-full w-full flex-col  items-center justify-center">
          <motion.img
            src={selectedImg}
            className="mx-2 block rounded-lg border-4 border-white dark:border-blue md:h-full
            md:rounded-t-lg dark:md:border-white lg:rounded-lg xl:h-full xl:w-full "
            alt="modalpic"
          />
        </div>
        <motion.div
          className={`${
            myImages ? 'lg:h-64' : 'lg:h-64'
          } flex h-8 items-start justify-center gap-8 rounded-b-lg   md:mt-6
              md:h-24  md:w-96 md:items-center md:rounded-lg  md:bg-cream dark:md:bg-blue lg:mt-0 lg:ml-6 lg:w-40 lg:flex-col lg:gap-0`}
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}>
          <div
            className="mt-2 flex h-2 w-full items-center justify-center gap-8 md:ml-4 md:mt-0  md:h-10 md:w-1/3
               md:flex-col md:gap-0 lg:mb-4 lg:ml-0 lg:mt-4   lg:w-full">
            <div
              className={`${
                imgData.user.length > 15
                  ? 'text-lg md:text-sm'
                  : imgData.user.length > 9
                  ? 'text-lg md:text-base'
                  : 'text-2xl'
              } ml-2 flex text-center font-header text-blue dark:text-cream lg:mb-2`}>
              By&nbsp;
              <Link to={`/profile/${imgData.user}`}>
                <motion.p className=" underline" whileHover={{ scale: 1.1 }}>
                  {imgData.user}
                </motion.p>
              </Link>
            </div>
            <p className="mr-2 text-center font-header text-base text-blue dark:text-cream lg:mb-4  ">{finaldate}</p>
          </div>
          <div
            className="absolute top-12 mt-4 flex w-72 items-center justify-center  gap-6
             rounded-lg bg-cream dark:bg-blue md:static  md:mt-0 md:w-2/3 md:flex-row lg:w-40 lg:flex-col lg:gap-0">
            <div className=" flex  gap-2  lg:mb-2 ">
              {imgData.emotion && (
                <img className="h-11 w-10" src={getEmotionEmoji(imgData.emotion)} alt={imgData.emotion} />
              )}
              {imgData.emotion2 && (
                <img className="h-11 w-10" src={getEmotionEmoji(imgData.emotion2)} alt={imgData.emotion2} />
              )}
              {imgData.emotion3 && (
                <img className="h-11 w-10" src={getEmotionEmoji(imgData.emotion3)} alt={imgData.emotion3} />
              )}
            </div>
            {!likedByUser && (
              <div className="flex flex-col items-center justify-center">
                <motion.button
                  className="mb-2 flex  items-center justify-center rounded-b-lg md:bg-transparent"
                  onClick={handleLike}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}>
                  <p className="absolute font-header text-xl text-blue dark:text-peach ">{likes}</p>
                  <HeartIcon className="icon-heart" fill="none" />
                </motion.button>
                {error && (
                  <div className="static top-8 -right-32  font-header text-xl text-peach underline md:absolute lg:static">
                    <Link to="/login">{error}</Link>
                  </div>
                )}
              </div>
            )}
            {likedByUser && <LikedButton imgdata={imgData.createdAt} setLikedByUser={setLikedByUser} />}

            {myImages && canDelete && (
              <motion.button
                className=" absolute -bottom-20 flex  w-40 items-center justify-center rounded-md bg-cream p-2 dark:bg-blue"
                onClick={handleDelete}
                whileHover={{
                  transition: {
                    duration: 0.2,
                  },
                  scale: 1.1,
                }}>
                <p className="mr-2 font-header text-lg text-blue dark:text-cream">Delete snap</p>
                <TrashIcon />
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
