import React from 'react'

const ShowcaseImg = ({id}) => {
  return (
    <img className="w-40 h-40 rounded-md  object-center object-cover" src="src\assets\profile.png" alt="pic" id={id} />
  )
}

export default ShowcaseImg