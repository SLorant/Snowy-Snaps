import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
        
    }

  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black/70  z-50" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}>
        <motion.img src={selectedImg} className="block max-w-6/10 max-h-8/10 mx-auto my-12 shadow-xl border-white border-4" alt="modalpic"
        initial={{ y: "-100vh"}}
        animate={{ y: 0}} />
    </motion.div>
  )
}

export default Modal