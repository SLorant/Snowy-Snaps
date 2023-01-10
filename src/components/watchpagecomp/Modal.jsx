import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from "luxon";
import useLike from '../hooks/useLike';
import { useAuth } from '../../contexts/AuthContext';
import LikeButton from './LikeButton';
import useIsLiked from './isLiked';
import Dislike from './Dislike';

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
    const emotions = [
      [{ label: "happy" }, {src: "src/assets/emojis/happy.png"}],
      [{ label: "silly" },  {src: "src/assets/emojis/silly.png"}],
      [{ label: "relaxed" },  {src: "src/assets/emojis/relaxed.png"}],
      [{ label: "excited" },  {src: "src/assets/emojis/excited.png"}],
      [{ label: "confused" },  {src: "src/assets/emojis/confused.png"}],
      [{ label: "mischievous" },  {src: "src/assets/emojis/mischievous.png"}],
      [{ label: "stubborn" },  {src: "src/assets/emojis/stubborn.png"}],
      [{ label: "sad" }, {src: "src/assets/emojis/sad.png"}],
    ];
    const {currentUser} = useAuth()
    const userid = currentUser.uid

    function getEmotionImg(emotion) {
      for (let i = 0; i < emotions.length; i++) {
        if (emotions[i][0].label === emotion) {
          return emotions[i][1].src;
        }
        //else return emotions[7][1].src;
      
      }
      return '';
    }
    
    //useLike(imgData.createdAt)
    
    /* const handleClick2 = () => {
      const {currentUser} = useAuth()
      console.log((new Date(imgData.createdAt.seconds*1000)).toString())
    }  */
    const date = (new Date(imgData.createdAt.seconds*1000))

    useIsLiked(imgData.createdAt, setIsLiked)

     const handleLike = () => {
      isLiked ? Dislike(imgData.createdAt, setIsLiked, userid) : setIsLiked(true)
    }; 

  

   
    const finaldate = date.toLocaleString(DateTime.DATE_MED); //=>  'Thursday, 4/20/2017'
    let finalfinaldate = finaldate.substring(0, 12);
    
 
  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black/70  z-50 flex items-center" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}>
      <motion.div className="mb-10  rounded-lg bg-white min-w-[25%] max-w-1/3 h-[50%]  mx-auto flex items-center"
      initial={{ y: "-100vh"}}
      animate={{ y: 0}}>

        <motion.img  src={selectedImg} className="block h-[92%]  mx-4  rounded-lg border-white border-4" alt="modalpic"/>
         <div className='mr-4 flex flex-col justify-center items-center gap-2 '>
          <p className='font-header text-2xl text-blue text-center'>By {imgData.user}</p>
          <div className=' flex gap-2 '>
          {/*   <p  className='font-header text-blue text-center'>Husky emotions:</p> */}
            <img className='w-9 h-10' src={getEmotionImg(imgData.emotion)} alt={imgData.emotion}/>
            <img className='w-9 h-10' src={getEmotionImg(imgData.emotion2)} alt={imgData.emotion2}/>
            <img className='w-9 h-10' src={getEmotionImg(imgData.emotion3)} alt={imgData.emotion3}/>
           </div>
           <p className='font-header text-center text-blue '>Uploaded at: <br />{finalfinaldate}</p>
          <button className='w-20 bg-blue text-lg text-cream font-header' onClick={handleLike}>LIKE</button>


          {!isLiked &&<motion.button className='flex items-center justify-center' whileHover={{ scale: 1.2 }} onClick={handleLike}>
          <p className='font-header absolute text-lg text-blue '>
       40</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2D4550" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg></motion.button>}
          {isLiked && <LikeButton imgdata = {imgData.createdAt}/>}
          
          
         </div>
        </motion.div>
    </motion.div>
  )
}

export default Modal