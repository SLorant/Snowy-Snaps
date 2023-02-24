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

  return (
    <div
      className=" relative z-30 flex w-full flex-col items-center justify-center justify-items-center bg-cream shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]
     xl:grid xl:grid-cols-2  xl:items-start  xl:justify-start  ">
      <div className="flex h-[1100px] w-full flex-col items-center justify-center  sm:h-auto sm:h-auto  xl:h-[1000px]">
        <div className=" flex items-center  justify-center 2xl:mt-2 ">
          <h2 className=" mt-6  font-header text-3xl text-blue  sm:mt-8 sm:text-4xl  xl:text-4xl 2xl:mt-24">
            Watch photos & gifs
          </h2>
        </div>

        <div className=" flex w-full items-center justify-center">
          <ShowCaseImages move={move} setMove={setMove} />
        </div>
        <div className="mt-4 mb-96 flex items-center justify-center drop-shadow-lg  sm:mt-4 sm:mb-28 md:mt-8  md:mb-4 ">
          <LargeButton title="Show me more" link="/watch" />
        </div>

        {/*  <div className="col-span-2 mb-8 mt-7 flex items-center justify-center">
              <LargeButton title="Show me more" link="/watch" />
            </div> */}
      </div>

      <div className="z-40 mt-6 flex hidden w-full flex-col items-center bg-white md:flex xl:mt-0 xl:w-full xl:bg-cream">
        <h1 className="mt-12 font-header  text-4xl text-blue xl:text-4xl">Learn about huskies</h1>
        <div className="relative mt-12 h-[550px] w-[550px] md:h-[620px] md:w-[620px] xl:h-[550px] xl:w-[550px] 2xl:h-[620px] 2xl:w-[620px]">
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
          <div className="z-40 hidden drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:block">
            <LargeButton title={'Go to Huskypedia'} link="/learn" />
          </div>
        </div>
        <div className="z-40 mt-8 mb-12  drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:hidden">
          <LargeButton title={'Go to Huskypedia'} link="/learn" />
        </div>
      </div>
    </div>
  )
}

export default WatchSection
