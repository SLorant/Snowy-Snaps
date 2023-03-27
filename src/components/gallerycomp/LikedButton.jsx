import React from 'react'
import Like from './utilities/Like'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Dislike from './utilities/Dislike'
import { useAuth } from '../../contexts/AuthContext'
import HeartIcon from '../../icons/HeartIcon'

const LikedButton = ({ imgdata, setLikedByUser }) => {
  const [likes, setLikes] = useState('')
  const { currentUser } = useAuth()
  const userid = currentUser.uid

  Like(imgdata, setLikes)

  const handleDisLike = () => {
    Dislike(imgdata, setLikedByUser, userid)
  }

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.button
        className="mb-2 flex items-center justify-center"
        onClick={handleDisLike}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.2 }}>
        <p className="absolute font-header text-xl text-white dark:text-blue ">{likes}</p>
        <HeartIcon className="icon-heart-clicked" fill="#2D4550" />
      </motion.button>
    </div>
  )
}

export default LikedButton
