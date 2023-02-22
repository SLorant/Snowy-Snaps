import LargeButton from './LargeButton'
import { motion } from 'framer-motion'
import ShowCaseImages from './ShowCaseImages'
import { useState, useRef } from 'react'
import Lottie from 'lottie-react'
import huskypedia from './huskypedia.json'
import useIntersection from '../hooks/useIntersection'

const WatchSection = () => {
  const lottieRef = useRef()
  const [move, setMove] = useState(false)
  const ref = useRef()
  const inViewport2 = useIntersection(ref, '200px')
  console.log(inViewport2)
  return (
    <div className=" relative z-30 flex grid w-full  flex-col justify-items-center bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  xl:grid-cols-2  ">
      <div className="flex hidden h-[1000px] w-full flex-col  items-center justify-center  md:block">
        <div className=" flex   items-center justify-center ">
          <h2 className="mt-12 font-header text-2xl text-blue   lg:text-2xl xl:text-4xl">Watch photos and gifs</h2>
        </div>
        <div className="flex w-full items-center justify-center">
          <ShowCaseImages move={move} setMove={setMove} />
        </div>
        {/*  <div className="col-span-2 mb-8 mt-7 flex items-center justify-center">
              <LargeButton title="Show me more" link="/watch" />
            </div> */}
      </div>

      <div ref={ref} className={` ${inViewport2 ? 'sticky top-14' : 'z-10 '} flex w-full flex-col items-center`}>
        <h1 className="mt-12 font-header text-xl text-blue lg:text-2xl xl:text-4xl">Learn about huskies</h1>
        <div className="relative mt-12  h-[550px] w-[550px] 2xl:h-[620px] 2xl:w-[620px]">
          <div className="relative   h-full w-40 rounded-md bg-sand md:w-full ">
            <img
              className="absolute top-0 left-0 z-0  rounded-md  2xl:w-full"
              src="/src/assets/illustrations/huskylearn.png"
              alt=""
            />
            <div className="">
              <Lottie lottieRef={lottieRef} animationData={huskypedia} />
            </div>
          </div>
          <div className="imagecontainer absolute top-0 left-0 z-40 h-full w-full rounded-md bg-transparent"></div>
          <div className="absolute bottom-9 left-40 z-40 drop-shadow-lg">
            <LargeButton title={'Go to Huskypedia'} link="/learn" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchSection
