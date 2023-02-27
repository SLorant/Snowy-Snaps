import { useState } from 'react'

const Avatars = ({ setFile, setSelected, selected }) => {
  const avatars = [
    { normal: '/src/assets/avatars/normalavatar.png' },
    { silly: '/src/assets/avatars/sillyavatar.png' },
    { puppy: '/src/assets/avatars/puppyavatar.png' },
    { sung: '/src/assets/avatars/sunglassesavatar.png' },
  ]
  const [{ normal: normalPath }] = avatars
  const [{ silly: sillyPath }] = avatars
  const [{ puppy: puppyPath }] = avatars
  const [{ sung: sungPath }] = avatars

  const handleOnClick = async (avatar) => {
    setSelected(avatar)
    const response = await fetch(avatar)
    const file = await response.arrayBuffer()
    var newFile = new File([file], 'my_image.png', {
      type: 'image/png',
      lastModified: new Date().getTime(),
    })
    setFile(newFile)
  }
  return (
    <div className="mb-4  grid grid-cols-2 gap-4">
      {avatars.map((avatar, index) => {
        const avatarPath = Object.values(avatar)[0]
        return (
          <img
            key={index}
            className={`${
              selected === avatarPath ? 'opacity-100' : 'opacity-50'
            } w-28 w-40 cursor-pointer rounded-full md:w-28 xl:w-[145px] 2xl:w-48`}
            onClick={() => handleOnClick(avatarPath)}
            src={avatarPath}
            alt="avatar"
          />
        )
      })}
    </div>
  )
}

export default Avatars
