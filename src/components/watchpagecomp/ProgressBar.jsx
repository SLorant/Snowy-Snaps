import React from 'react'
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'


const ProgressBar = ({ file, setFile, setLoading, uploadType, emotion, emotion2, emotion3, gif, onImageUpload }) => {
    const { url, progress } = useStorage(file, uploadType, emotion, emotion2, emotion3, gif);  
    useEffect(() => {
        if (url) {
            setFile(null);
            uploadType === "gallery" ? onImageUpload(true) : ""
            //setLoading(false)
        }
    }, [url, setFile])

  return (
    <motion.div className=" h-2 bg-blue mt-8 mx-20 rounded-full"
    initial={{ width: 0}}
    animate={{ width: progress/1.5 + '%'}} ></motion.div>
  )
}

export default ProgressBar