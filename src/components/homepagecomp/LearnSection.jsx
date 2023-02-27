import LargeButton from './LargeButton'
import Lottie from 'lottie-react'
import huskypedia from '../../assets/animations/huskypedia.json'
import { useRef } from 'react'

const LearnSection = () => {
  const lottieRef = useRef()
  return (
    <div className="z-40  flex w-full flex-col items-center bg-white  xl:mt-0 xl:w-full xl:bg-cream">
      <h1 className="mt-12 font-header text-3xl  text-blue sm:text-4xl 2xl:mt-14">Learn about huskies</h1>
      <div className="relative mt-6 h-[300px] w-[300px] sm:h-[620px] sm:w-[620px] md:mt-12 xl:h-[550px] xl:w-[550px] 2xl:h-[620px] 2xl:w-[620px]">
        <div className="relative   h-full  w-full rounded-md bg-sand ">
          <img
            className="absolute top-0 left-0 z-0   rounded-md  2xl:w-full"
            src="/src/assets/illustrations/huskylearn.png"
            alt=""
          />
          <div className="">
            <Lottie lottieRef={lottieRef} animationData={huskypedia} />
          </div>
        </div>
        <div className="imagecontainer absolute top-0 left-0 z-40 h-full w-full rounded-md bg-transparent"></div>
        <div className="z-40 hidden drop-shadow-lg xl:absolute xl:bottom-5 xl:left-32 xl:block 2xl:bottom-9 2xl:left-40">
          <LargeButton title={'Go to Huskypedia'} link="/learn" />
        </div>
      </div>
      <div className="z-40 mt-6 mb-12 drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:hidden">
        <LargeButton title={'Go to Huskypedia'} link="/learn" />
      </div>
    </div>
  )
}

export default LearnSection
