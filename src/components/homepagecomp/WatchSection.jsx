import LargeButton from './LargeButton'
import { motion } from 'framer-motion'
import ShowCaseImages from './ShowCaseImages'
import { useState, useRef } from 'react'
import Lottie from 'lottie-react'
import huskypedia from './huskypedia.json'

const WatchSection = () => {
  const lottieRef = useRef()
  const [move, setMove] = useState(false)
  return (
    <div className=" z-30 grid w-full grid-cols-2 justify-items-center  bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  ">
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

      <div className="flex w-full flex-col items-center ">
        <h1 className="mt-12 font-header text-xl text-blue lg:text-2xl xl:text-4xl">Learn about huskies</h1>
        <div className="relative mt-12  h-[620px] w-[620px]">
          <div className="relative   h-full w-40 rounded-md bg-sand md:w-full ">
            <img
              className="absolute top-0 left-0 z-0  rounded-md"
              src="/src/assets/illustrations/huskylearn.png"
              alt=""
            />
            <Lottie lottieRef={lottieRef} animationData={huskypedia} />
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
