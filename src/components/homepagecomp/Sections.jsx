import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import AddHusky from './AddHuskySection'
import ShareSection from './ShareSection'
import WatchSection from './WatchSection'
import LargeButton from './LargeButton'
import Lottie from 'lottie-react'
import huskypedia from './huskypedia.json'

const Sections = () => {
  const ref = useRef()
  const lottieRef = useRef()
  const inViewport = useIntersection(ref, '100px') // Trigger as soon as the element becomes visible
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute -top-52 z-20 flex h-[315px] w-full flex-col items-end bg-blue shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] sm:hidden">
          <h1 className="mt-4 mr-8 w-full text-right font-header text-3xl text-cream">Welcome to</h1>
          <img className=" mr-8 w-2/3 sm:hidden" src="src/assets/logocream.png" alt="logo" />
          <div className=" mx-10  mt-4 text-justify  font-body  text-cream sm:block ">
            A community for husky lovers to share and discover pictures of these beautiful dogs. Whether you're a
            seasoned husky owner or just looking to learn more about these majestic animals, Snowy Snaps is the perfect
            place to start. So join the pack and share your love of huskies with us!
          </div>
        </div>
        <div ref={ref} className={` w-full ${inViewport ? 'sticky top-14 md:static xl:sticky' : 'z-10 '} mt-24`}>
          <WatchSection />
        </div>

        <div className="z-40 mt-6 flex w-full flex-col items-center bg-white md:hidden  xl:mt-0 xl:w-full xl:bg-cream">
          <h1 className="mt-12 font-header  text-3xl text-blue sm:text-4xl xl:text-4xl">Learn about huskies</h1>
          <div className="relative mt-6 h-[300px] w-[300px] sm:h-[620px] sm:w-[620px] xl:h-[550px] xl:w-[550px] 2xl:h-[620px] 2xl:w-[620px]">
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
            <div className="z-40 hidden drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:block">
              <LargeButton title={'Go to Huskypedia'} link="/learn" />
            </div>
          </div>
          <div className="z-40 mt-6 mb-12 drop-shadow-lg xl:absolute xl:bottom-9 xl:left-40 xl:hidden">
            <LargeButton title={'Go to Huskypedia'} link="/learn" />
          </div>
        </div>

        <div className="z-30 w-full">
          <ShareSection />
        </div>
        <AddHusky />
      </div>
    </div>
  )
}

export default Sections

//{show && <LeftForm onAdd = {addTask}/>}
