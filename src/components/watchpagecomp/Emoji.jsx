import React from 'react'
import { motion } from 'framer-motion'

const Emoji = ({ source, emotionArray }) => {
  return (
    <div>
      <motion.img
        src={`src/assets/emojis/${source}.png`}
        className={`${emotionArray.includes(source) ? 'opacity-100' : 'opacity-60'}
        h-11 w-10 cursor-pointer  2xl:h-11 2xl:w-10`}
        alt="emotion"
        whileHover={{ scale: 1.2 }}
      />
    </div>
  )
}

export default Emoji
