import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

const AspectRatioChooser = ({ setHeight, setWidth }) => {
  const ratioButtons = [
    {
      width: 225,
      height: 400,
      buttonwidth: 'w-9',
      buttonheight: 'h-16',
      ratio: '9:16',
    },
    {
      width: 300,
      height: 400,
      buttonwidth: 'w-11',
      buttonheight: 'h-14',
      ratio: '3:4',
    },
    {
      width: 400,
      height: 225,
      buttonwidth: 'w-16',
      buttonheight: 'h-9',
      ratio: '16:9',
    },
    {
      width: 400,
      height: 300,
      buttonwidth: 'w-14',
      buttonheight: 'h-11',
      ratio: '4:3',
    },
    {
      width: 400,
      height: 400,
      buttonwidth: 'w-12',
      buttonheight: 'h-12',
      ratio: '1:1',
    },
  ]
  const [selected, setSelected] = useState('1:1')

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const windowSize = useWindowSize()

  const handleOnClickRatio = (width, height, ratio) => {
    setWidth(isMobile ? width * (windowSize.width / 700) : width * (windowSize.width / 1500))
    setHeight(isMobile ? height * (windowSize.width / 700) : height * (windowSize.width / 1500))
    setSelected(ratio)
  }

  return (
    <div
      className="flex place-items-center   items-center justify-center gap-2 
                 md:mt-4 md:gap-4 lg:mt-4 lg:flex lg:flex-row">
      {ratioButtons.map(({ width, height, ratio, buttonheight, buttonwidth }) => (
        <motion.button
          key={ratio}
          className={`${selected === ratio ? 'bg-blue text-peach' : 'bg-sand text-blue'}
           ${buttonheight} ${buttonwidth} rounded-md font-header `}
          onClick={() => handleOnClickRatio(width, height, ratio)}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
          {ratio}
        </motion.button>
      ))}
    </div>
  )
}

export default AspectRatioChooser
