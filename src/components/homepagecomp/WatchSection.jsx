import LargeButton from './LargeButton'
import { motion } from 'framer-motion'
import ShowCaseImages from './ShowCaseImages'
import { useState } from 'react'
const WatchSection = () => {
  const [move, setMove] = useState(false)
  return (
    <div className=" z-30 grid w-full grid-cols-2 justify-items-center  bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  ">
      <div className="flex hidden h-[1000px] w-full flex-col  items-center justify-center  md:block">
        <div className=" flex   items-center justify-center ">
          <h2 className="mt-12 font-header text-2xl text-blue   lg:text-2xl xl:text-4xl">
            Watch photos and gifs
          </h2>
        </div>
        <div className="flex w-full items-center justify-center">
          <ShowCaseImages move={move} setMove={setMove} />
        </div>
        {/*  <div className="col-span-2 mb-8 mt-7 flex items-center justify-center">
              <LargeButton title="Show me more" link="/watch" />
            </div> */}
      </div>

      <div className="flex w-1/2 flex-col items-center ">
        <h1 className="mt-12 font-header text-xl text-blue lg:text-2xl xl:text-4xl">
          Learn about huskies
        </h1>
        <div className="mt-12 h-[620px] w-40 rounded-md bg-blue md:w-[620px] ">
          <motion.img
            className="mt-52 rounded-md"
            src="/src/assets/illustrations/huskyreading.png"
            alt=""
            whileHover={{ rotate: 5 }}
          />
        </div>
      </div>
    </div>
  )
}

export default WatchSection
