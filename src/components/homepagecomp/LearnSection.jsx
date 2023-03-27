import ShowCaseButton from './ShowCaseButton'
import Lottie from 'lottie-react'
import huskypedia from '../../animations/huskypedia.json'
import { useRef } from 'react'

const LearnSection = () => {
  const lottieRef = useRef()
  return (
    <div
      className="z-40 flex w-full flex-col items-center bg-white shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]
       dark:bg-sand md:shadow-none  xl:mt-0 xl:w-full xl:bg-cream dark:xl:bg-blue">
      <h2 className="mt-12 font-header text-3xl text-blue dark:text-blue sm:text-4xl dark:xl:text-peach 2xl:mt-14 2xl:text-5xl">
        Learn about huskies
      </h2>
      <div
        className="relative mt-6 h-[300px] w-[300px]  sm:mt-8 sm:h-[550px] sm:w-[550px] 
      md:mt-12 md:h-[620px] md:w-[620px] xl:h-[550px] xl:w-[550px] 2xl:h-[620px] 2xl:w-[620px]">
        <div className="relative   h-full  w-full rounded-md bg-blue ">
          <img
            className="absolute top-0 left-0 z-0 rounded-md  dark:hidden  2xl:w-full"
            src="/assets/illustrations/huskylearn.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 z-0  hidden rounded-md dark:block  2xl:w-full"
            src="/assets/illustrations/huskylearndark.png"
            alt=""
          />
          <div className="">
            <Lottie lottieRef={lottieRef} animationData={huskypedia} />
          </div>
        </div>
        <div className="imagecontainer absolute top-0 left-0 z-40 h-full w-full rounded-md bg-transparent"></div>
        <div className="z-40 hidden  xl:absolute xl:bottom-7 xl:left-32 xl:block 2xl:bottom-9 2xl:left-44">
          <ShowCaseButton title={'Go to Huskypedia'} link="/learn" />
        </div>
      </div>
      <div className="z-40 mt-8 mb-12 drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:hidden">
        <ShowCaseButton title={'Go to Huskypedia'} link="/learn" />
      </div>
    </div>
  )
}

export default LearnSection
