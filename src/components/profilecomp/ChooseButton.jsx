import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { motion } from 'framer-motion'

const ChooseButton = ({
  width,
  height,
  ratio,
  setHeight,
  setWidth,
  selected,
  setSelected,
  buttonwidth,
  buttonheight,
}) => {
  const buttonStyles = {
    selected: {
      className: 'bg-blue text-peach',
    },
    unselected: {
      className: 'bg-sand text-blue',
    },
    common: `${buttonheight} ${buttonwidth}  rounded-md font-headersc`,
  }

  const windowSize = useWindowSize()

  const handleOnClickRatio = (width, height, ratio) => {
    setWidth(width * (windowSize.width / 1500))
    setHeight(height * (windowSize.width / 1500))
    setSelected(ratio)
  }

  return (
    <motion.button
      key={ratio}
      className={`${
        selected === ratio ? buttonStyles.selected.className : buttonStyles.unselected.className
      } ${buttonStyles.common}`}
      onClick={() => handleOnClickRatio(width, height, ratio)}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
      {ratio}
    </motion.button>
  )
}

export default ChooseButton
