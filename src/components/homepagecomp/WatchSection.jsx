import ShowCaseButton from './ShowCaseButton'
import ShowCaseImages from './ShowCaseImages'
import { useState } from 'react'
import LearnSection from './LearnSection'

const WatchSection = () => {
  const [move, setMove] = useState(false)

  return (
    <div
      className=" relative z-30 flex w-full flex-col items-center justify-center justify-items-center bg-cream
       shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)] dark:bg-blue  xl:grid xl:grid-cols-2  xl:items-start  xl:justify-start  ">
      <div className="flex h-[1100px] w-full flex-col items-center sm:h-auto  sm:h-auto xl:h-[850px] 2xl:h-[900px]  2xl:justify-center">
        <div className=" flex items-center  justify-center 2xl:mt-2 ">
          <h2 className=" mt-6  font-header text-3xl text-blue dark:text-peach  sm:mt-8 sm:text-4xl xl:mt-12 xl:text-4xl  2xl:mt-0 ">
            Watch photos & gifs
          </h2>
        </div>

        <div className=" flex w-full items-center justify-center">
          <ShowCaseImages move={move} setMove={setMove} />
        </div>
        <div className="mt-4 mb-96 flex items-center justify-center drop-shadow-lg sm:mt-4  sm:mb-28 md:mt-8 md:mb-12  xl:hidden ">
          <ShowCaseButton title="Show me more" link="/watch" />
        </div>
      </div>
      <div className="hidden xl:block">
        <LearnSection />
      </div>
    </div>
  )
}

export default WatchSection
