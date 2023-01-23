import LargeButton from './LargeButton'

import ShowCaseImages from './ShowCaseImages'
import { useState } from 'react'
const WatchSection = () => {
  const [move, setMove] = useState(false)
  return (
    <div className=" z-30 flex w-full flex-col bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  ">
      <div className="mx-6 flex w-auto gap-6 ">
        <div className="ml-40 w-1/3  ">
          <div className=" grid w-full grid-cols-2  items-center justify-center">
            <div className="col-span-2 flex w-full  items-center justify-center ">
              <h1 className="mt-10 font-header text-xl text-blue   lg:text-2xl xl:text-3xl">
                Watch photos and gifs
              </h1>
            </div>
            <div
              onMouseOver={() => setMove(true)}
              onMouseOut={() => setMove(false)}
              className="imagecontainer group absolute top-[135px] left-[230px] z-50 h-[620px] w-[603px]  rounded-md bg-transparent">
              <div className="absolute bottom-10 left-36 z-50 cursor-pointer drop-shadow-lg">
                <LargeButton title="Show me more" link="/watch" />
              </div>
            </div>
            <ShowCaseImages move={move} setMove={setMove} />

            {/*  <div className="col-span-2 mb-8 mt-7 flex items-center justify-center">
              <LargeButton title="Show me more" link="/watch" />
            </div> */}
          </div>
        </div>

        <div className="flex w-1/2 flex-col items-center ">
          <h1 className="mt-10 font-header text-xl text-blue lg:text-2xl xl:text-3xl">
            Learn about huskies
          </h1>
          <div className="mt-4 w-full rounded-md  "></div>
        </div>
      </div>
    </div>
  )
}

export default WatchSection
