import React from 'react'
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'


const ProgressBar = ({ file, setFile, uploadType }) => {
    const { url, progress } = useStorage(file, uploadType);  
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

  return (
    <motion.div className=" h-2 bg-slate-700 mt-8 mx-20"
    initial={{ width: 0}}
    animate={{ width: progress/1.5 + '%'}} ></motion.div>
  )
}

export default ProgressBar