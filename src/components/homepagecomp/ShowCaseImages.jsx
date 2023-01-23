import React from 'react'

const ShowCaseImages = ({ move, setMove }) => {
  return (
    <div className="clip-img group z-20  col-span-2 mb-40 mt-8  h-[620px]   w-[603px] rounded-md bg-sand  ">
      <div className="group relative top-0 left-0 z-20 flex h-full rounded-md    ">
        <img
          src="src/assets/showcaseimages/huskytop.jpg"
          alt="huskypic"
          className={`${
            move ? '-translate-x-10 translate-y-32 -rotate-3' : 'rotate-[18deg]'
          } xl:max-h-56 2xl:max-h-80 relative left-28 -top-40 z-20 
       w-48  rounded-md  object-cover
       drop-shadow-lg transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomright.jpg"
          alt="huskypic"
          className={`${
            move ? 'z-0 translate-y-10 translate-x-20 rotate-6' : 'z-0 -rotate-2'
          } xl:max-h-56 2xl:max-h-80 absolute
      top-72 -right-10   w-72   rounded-md  object-cover drop-shadow-lg transition
       duration-500 ease-in-out   md:h-40 md:h-48  lg:h-48  xl:h-48`}
        />

        <img
          src="src/assets/showcaseimages/huskymiddle.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-20 translate-x-20 rotate-1' : '-rotate-3'
          } xl:max-h-56 2xl:max-h-80 absolute top-44
      left-20 z-0 w-72    rounded-md object-cover  drop-shadow-lg 
      transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-48`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomleft.jpg"
          alt="huskygif"
          className={`${
            move ? 'z-50 translate-x-20 -translate-y-16 rotate-3' : 'z-40 -rotate-6'
          } xl:max-h-56 2xl:max-h-80 absolute top-72
      -left-8  w-48  rounded-md object-cover  drop-shadow-lg 
      transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72`}
        />
        <img
          src="src/assets/showcaseimages/huskytopright.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-20 -translate-x-10 rotate-6' : '-rotate-3'
          } xl:max-h-56 2xl:max-h-80 absolute -top-20
      -right-8 z-20 w-48    rounded-md object-cover  drop-shadow-lg 
      transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72`}
        />
        <img
          src="src/assets/showcaseimages/huskytopleft.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-10 -translate-x-32  -rotate-12' : 'rotate-6'
          } xl:max-h-56 2xl:max-h-80 absolute -top-6
      -left-6 z-20 w-48    rounded-md object-cover  drop-shadow-lg 
      transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72`}
        />
      </div>
    </div>
  )
}

export default ShowCaseImages
