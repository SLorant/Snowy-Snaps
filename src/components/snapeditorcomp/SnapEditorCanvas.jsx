import React from 'react'
import AvatarEditor from 'react-avatar-editor'

const SnapEditorCanvas = ({ setEditorRef, picture, isGallery, width, height }) => {
  return (
    <div className="mt-20  flex w-80  items-center justify-center md:mt-20 lg:my-8  lg:ml-10 lg:mt-0  lg:mr-0 lg:mt-24">
      <div className="hidden dark:block lg:ml-8">
        <AvatarEditor
          className="avatareditorr z-50  rounded-lg "
          ref={setEditorRef}
          image={picture.img}
          borderRadius={isGallery ? 0 : 100}
          width={isGallery ? width : 200}
          height={isGallery ? height : 200}
          border={100}
          backgroundColor="navajowhite"
          color={[20, 35, 44, 0.8]}
          rotate={0}
          scale={picture.zoom}
        />
      </div>
      <div className="dark:hidden lg:ml-8">
        <AvatarEditor
          className=" z-50  rounded-lg "
          ref={setEditorRef}
          image={picture.img}
          borderRadius={isGallery ? 0 : 100}
          width={isGallery ? width : 200}
          height={isGallery ? height : 200}
          color={[255, 255, 255, 0.6]}
          border={100}
          backgroundColor="navajowhite"
          rotate={0}
          scale={picture.zoom}
        />
      </div>
    </div>
  )
}

export default SnapEditorCanvas
