import React from 'react'
import { motion } from 'framer-motion'

const Emoji = ({ source, emotionArray }) => {
  return (
    <motion.div>
      <motion.img
        src={`/assets/emojis/${source}.png`}
        className={`${emotionArray.includes(source) ? 'opacity-100' : 'opacity-60'}
        h-11 w-10 cursor-pointer transition duration-200 ease-in-out hover:scale-125  2xl:h-12 2xl:w-11`}
        alt="emotion"
      />
    </motion.div>
  )
}

export default Emoji
