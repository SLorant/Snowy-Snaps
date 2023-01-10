import React from 'react'
import useLike from '../hooks/useLike'
import { useState } from 'react'

const LikeButton = ({imgdata}) => {
  const [likes, setLikes] = useState("")
    useLike(imgdata, setLikes)
    
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <p className='font-header absolute text-lg text-white '>
       {likes}</p>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2D4550" fill="#2D4550" stroke-linecap="round" stroke-linejoin="round"
       >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg></div>
  )
}

export default LikeButton