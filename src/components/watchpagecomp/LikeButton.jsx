import React from 'react'
import useLike from '../hooks/useLike'
import { useState } from 'react'

const LikeButton = ({imgdata}) => {
  const [likes, setLikes] = useState("")
    useLike(imgdata, setLikes)
  return (
    <div><p>
      You liked this. It has {likes} likes.</p></div>
  )
}

export default LikeButton