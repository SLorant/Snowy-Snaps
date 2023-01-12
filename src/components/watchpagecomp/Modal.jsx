import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from "luxon";
import { useAuth } from '../../contexts/AuthContext';
import LikedButton from './LikedButton';
import IsLiked from './isLiked';

const Modal = ({ selectedImg, setSelectedImg, imgData, setImgData }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0);
    const {currentUser} = useAuth()
    const userid = currentUser.uid
    const date = (new Date(imgData.createdAt.seconds*1000))
    const newdate = date.toLocaleString(DateTime.DATE_MED);
    const finaldate = newdate.substring(0, 12);
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

    IsLiked(imgData.createdAt, userid, setIsLiked, setLikes)

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
    function getEmotionImg(emotion) {
      for (let i = 0; i < emotions.length; i++) {
        if (emotions[i][0].label === emotion) {
          return emotions[i][1].src;
        }
      }
      return ;
    }
     const handleLike = () => {
      isLiked ? "" : setIsLiked(true)
    }; 

  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-black/70 justify-center lg:flex-row flex-col z-50 flex items-center"
      onClick={handleClick}
      initial={{opacity:0}}
      animate={{opacity:1}}>
      <motion.div className="lg:mb-10 bg-white md:bg-transparent md:mb-4 mb-28 md:mb-0 justify-center lg:flex-row flex-col
        min-w-[15%]   md:max-w-5/6  lg:h-1/2 xl:h-[60%]  flex  items-center"
        initial={{ y: "-100vh"}}
        animate={{ y: 0}}>
        <div className='flex flex-col w-full h-full  justify-center items-center'>
          <motion.img  src={selectedImg} className="block xl:w-full xl:h-full md:h-full
          mx-2 rounded-lg md:rounded-t-lg lg:rounded-lg border-4 border-white " alt="modalpic"/>
          </div>
        <motion.div className='flex lg:flex-col md:bg-cream md:mt-6 lg:mt-0 lg:bg-cream   justify-center
          md:w-96  lg:gap-0 gap-8 h-8  md:h-24   lg:w-40  lg:ml-6 lg:h-56 md:rounded-lg rounded-b-lg md:items-center items-start' 
          initial={{ y: "-100vh"}}
          animate={{ y: 0}}>
          <div className='flex w-full md:w-1/3 lg:w-full md:flex-col lg:mb-4 justify-center md:ml-4 lg:ml-0  md:gap-0 gap-8
            mt-2 md:mt-0 lg:mt-4 h-2 md:h-10   items-center'>
            <p className='font-header lg:mb-2 text-xl text-blue text-center'>By {imgData.user}</p>
            <p className='font-header lg:mb-4 text-sm text-center text-blue  '>{finaldate}</p>
          </div>
          <div className='flex md:static absolute bg-cream w-60 lg:w-40 md:w-2/3  gap-6
             rounded-lg top-12 md:flex-row  lg:flex-col items-center justify-center lg:gap-0 md:mt-0 mt-4'>
            <div className=' flex  lg:mb-2  gap-2 '>
              {imgData.emotion && <img className='w-9 h-10' src={getEmotionImg(imgData.emotion)} alt={imgData.emotion}/>}
              {imgData.emotion2 && <img className='w-9 h-10' src={getEmotionImg(imgData.emotion2)} alt={imgData.emotion2}/>}
              {imgData.emotion3 && <img className='w-9 h-10' src={getEmotionImg(imgData.emotion3)} alt={imgData.emotion3}/>}
            </div>
            {!isLiked && <motion.button className='rounded-b-lg mb-2  md:bg-transparent flex items-center justify-center'  onClick={handleLike}
              whileHover={{ scale: 1.2 }}>
              <p className='font-header absolute text-lg text-blue '>{likes}</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2D4550" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </motion.button>}
            {isLiked && <LikedButton imgdata = {imgData.createdAt} setIsLiked={setIsLiked}/>}
          </div>
        </motion.div>  
      </motion.div>
    </motion.div>
  )
}

export default Modal