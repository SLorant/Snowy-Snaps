import React from 'react'
import useLike from '../hooks/useLike'

const LikeButton = ({imgdata}) => {
    useLike(imgdata)
  return (
    <div>It is liked.</div>
  )
}

export default LikeButton