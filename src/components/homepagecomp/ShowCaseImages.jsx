import React from 'react'
import { useRef, useEffect } from 'react'
import useIntersection from '../hooks/useIntersection'
import { motion } from 'framer-motion'
import ShowCaseButton from './ShowCaseButton'

const ShowCaseImages = ({ move, setMove }) => {
  const ref = useRef()
  const inViewport = useIntersection(ref, '-100px')
  useEffect(() => {
    if (window.innerWidth < 768) {
      setTimeout(function () {
        inViewport && setMove(true)
      }, 700)
      !inViewport && setMove(false)
    }
  }, [inViewport])

  const handleImageClick = () => {
    setMove(!move)
  }

  return (
    <motion.div
      className="clip-img group z-20 mt-6 h-[550px] w-[300px] rounded-md bg-sand  sm:mt-8 sm:h-[550px] sm:w-[550px] 
      md:h-[620px]  md:w-[620px]  xl:mb-48 xl:h-[550px] xl:w-[550px] 2xl:h-[620px] 2xl:w-[620px]  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}>
      <div className="group relative top-0 left-0 z-20 flex h-full w-full rounded-md    ">
        <div
          onMouseOver={() => setMove(true)}
          onMouseOut={() => setMove(false)}
          ref={ref}
          onClick={handleImageClick}
          className="imagecontainer absolute top-0 left-0 z-50 h-full w-full   rounded-md bg-transparent">
          <div className="absolute bottom-5 left-36 z-50 hidden cursor-pointer drop-shadow-lg xl:bottom-7 xl:block 2xl:bottom-9 2xl:left-44">
            <ShowCaseButton title="Show me more" link="/watch" />
          </div>
        </div>

        <img
          src="src/assets/showcaseimages/huskytop.jpg"
          alt="huskypic"
          className={`${
            move ? '-translate-x-10 translate-y-36 -rotate-3' : 'rotate-[18deg]'
          } xl:max-h-80 2xl:max-h-80 relative left-40 -top-52 z-20 hidden w-56
       rounded-md object-cover drop-shadow-lg transition  duration-700 ease-in-out  sm:block
       sm:h-[22rem]    sm:w-60  sm:duration-500 xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomright.jpg"
          alt="huskypic"
          className={`${
            move ? 'z-0 translate-y-10 translate-x-20 rotate-6' : 'z-0 -rotate-12 sm:-rotate-2'
          } xl:max-h-80 2xl:max-h-80 absolute top-10 -left-20
      h-52 w-80   rounded-md object-cover  drop-shadow-lg   transition  duration-700 ease-in-out sm:top-auto sm:left-auto sm:-right-10 sm:bottom-10
       sm:block sm:h-60 sm:w-[21rem]  sm:duration-500  xl:h-56  2xl:h-60 2xl:w-[22rem]`}
        />

        <img
          src="src/assets/showcaseimages/huskymiddle.jpg"
          alt="huskygif"
          className={`${
            move
              ? '-translate-y-56 translate-x-2 -rotate-12 sm:translate-y-20 sm:translate-x-20  sm:rotate-2'
              : 'rotate-12 sm:-rotate-3'
          } xl:max-h-80 2xl:max-h-80 absolute -bottom-40 left-0 z-40 h-52
      w-80 rounded-md object-cover drop-shadow-lg    transition duration-700 ease-in-out  sm:left-32 
      sm:top-52 sm:z-0 sm:h-60 sm:w-[21rem]  sm:duration-500  xl:h-56  2xl:h-60  2xl:w-[22rem]`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomleft.jpg"
          alt="huskygif"
          className={`${
            move
              ? 'translate-y-40 -translate-x-28 rotate-6 sm:z-40 sm:translate-x-20 sm:-translate-y-16'
              : 'z-20 -rotate-6 sm:z-40 sm:-rotate-12'
          } xl:max-h-80 2xl:max-h-80 absolute left-10 -bottom-10 h-80
      w-52 rounded-md object-cover drop-shadow-lg transition duration-700 ease-in-out sm:-bottom-20  sm:-left-14 
      sm:h-[22rem] sm:w-60   sm:duration-500   xl:h-[21rem]  2xl:h-[22rem]`}
        />
        <img
          src="src/assets/showcaseimages/huskytopright.jpg"
          alt="huskygif"
          className={`${
            move
              ? '-translate-y-40 rotate-6 sm:translate-y-20 sm:-translate-x-10 xl:translate-x-0 2xl:-translate-x-10'
              : 'rotate-2 sm:-rotate-3'
          } xl:max-h-80 2xl:max-h-80 absolute -right-3 -top-8 z-20
      h-80 w-52 rounded-md object-cover drop-shadow-lg transition duration-700 ease-in-out sm:-top-20   sm:right-0 sm:-right-8  sm:h-[22rem] 
      sm:w-60  sm:duration-500   xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
        <img
          src="src/assets/showcaseimages/huskytopleft.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-10 -translate-x-32  -rotate-12' : 'rotate-[9deg]'
          } xl:max-h-80 2xl:max-h-80 absolute -top-12 -left-8 z-20
      hidden h-80 w-52 rounded-md object-cover   drop-shadow-lg transition duration-700 ease-in-out sm:block  sm:h-[22rem] 
      sm:w-60  sm:duration-500  xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
      </div>
    </motion.div>
  )
}

export default ShowCaseImages
