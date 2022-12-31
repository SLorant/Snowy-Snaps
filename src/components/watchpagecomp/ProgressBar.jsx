import React from 'react'
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'


const ProgressBar = ({ file, setFile, uploadType, emotion, gif, onImageUpload }) => {
    const { url, progress } = useStorage(file, uploadType, emotion, gif);  
    useEffect(() => {
        if (url) {
            setFile(null);
            uploadType === "gallery" ? onImageUpload(true) : ""
        }
    }, [url, setFile])

  return (
    <motion.div className=" h-2 bg-darkblue mt-8 mx-20"
    initial={{ width: 0}}
    animate={{ width: progress/1.5 + '%'}} ></motion.div>
  )
}

export default ProgressBar