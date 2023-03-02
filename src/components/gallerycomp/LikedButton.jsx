import React from 'react'
import Like from './utilities/Like'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Dislike from './utilities/Dislike'
import { useAuth } from '../../contexts/AuthContext'

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
        <p className="absolute font-header text-lg text-white ">{likes}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-heart"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2D4550"
          fill="#2D4550"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </motion.button>
    </div>
  )
}

export default LikedButton
