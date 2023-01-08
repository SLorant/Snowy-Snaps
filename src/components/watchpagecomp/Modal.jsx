import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from "luxon";
import useLike from '../hooks/useLike';
import { useAuth } from '../../contexts/AuthContext';
import LikeButton from './LikeButton';
import useIsLiked from './isLiked';

const Modal = ({ selectedImg, setSelectedImg, imgData, setImgData }) => {
    //const useLikeHook  = useLike();
    const [isLiked, setIsLiked] = useState(false)
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
    const {currentUser} = useAuth()
    //console.log(imgData.createdAt)
    //useLike(imgData.createdAt)
    
    /* const handleClick2 = () => {
      console.log((new Date(imgData.createdAt.seconds*1000)).toString())
    }  */
    const date = (new Date(imgData.createdAt.seconds*1000))

    useIsLiked(imgData.createdAt, setIsLiked)

     const handleLike = () => {
      isLiked ? "" : setIsLiked(true)
    }; 

  

   
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
          <button className='w-20 bg-blue text-lg text-cream font-header' onClick={handleLike}>LIKE</button>
          {isLiked && <LikeButton imgdata = {imgData.createdAt}/>}
          
          
         </div>
        </motion.div>
    </motion.div>
  )
}

export default Modal