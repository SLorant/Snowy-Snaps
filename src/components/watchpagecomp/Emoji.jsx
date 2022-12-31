import React from 'react'

const Emoji = ({source}) => {
  return (
    <div>
        <img src={`src/assets/emojis/${source}.png`}  alt="" />
    </div>
  )
}

export default Emoji