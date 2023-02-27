import React from 'react'
import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ProgressBar = ({
  file,
  setFile,
  uploadType,
  isFirst,

  uploadedEmotions,

  gif,
  setUploaded,
}) => {
  const navigate = useNavigate()
  const { url, progress } = useStorage(file, uploadType, uploadedEmotions, gif)
  useEffect(() => {
    if (url) {
      setFile(null)
      console.log(isFirst)
      uploadType === 'gallery' &&
        setTimeout(function () {
          setUploaded(true)
        }, 600)

      isFirst && navigate('/upload-profile')
      //setLoading(false)
    }
  }, [url, setFile])

  return (
    <motion.div
      className=" mx-20 h-2 rounded-full bg-blue"
      initial={{ width: 0 }}
      animate={{ width: progress / 1.5 + '%' }}></motion.div>
  )
}

export default ProgressBar
