import React from 'react'
import { motion } from 'framer-motion'
import { DateTime } from "luxon";

const Modal = ({ selectedImg, setSelectedImg, imgData, setImgData }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
             setImgData({
              user: "",
              emotion: "",
              createdAt: ""   
            }) 
        }
        
    }

    /* const handleClick2 = () => {
      console.log((new Date(imgData.createdAt.seconds*1000)).toString())
    }  */
    const date = (new Date(imgData.createdAt.seconds*1000))

   
    const finaldate = date.toLocaleString(DateTime.DATE_SHORT); //=>  'Thursday, 4/20/2017'
 
  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black/70  z-50 flex items-center" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}>
      <motion.div className="mb-10 bg-white min-w-[25%] max-w-1/3 h-[50%]  mx-auto flex items-center"
      initial={{ y: "-100vh"}}
      animate={{ y: 0}}>

        <motion.img  src={selectedImg} className="block h-full mx-4  shadow-xl border-white border-4" alt="modalpic"
         />
         <div className='mr-4'>
          <p>By {imgData.user}</p>
          <p>Husky emotion: {imgData.emotion}</p>
          <p>Uploaded at: <br />{finaldate}</p>
          
          
         </div>
        </motion.div>
    </motion.div>
  )
}

export default Modal