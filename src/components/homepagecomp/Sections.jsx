import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import AddHusky from './FooterSection'
import ShareSection from './ShareSection'
import WatchSection from './WatchSection'
import LearnSection from './LearnSection'

const Sections = () => {
  const ref = useRef()
  const inViewport = useIntersection(ref, '100px') // Trigger as soon as the element becomes visible
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="absolute -top-52 z-20 flex h-[315px] w-full flex-col items-end bg-blue
         shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] dark:bg-sand sm:hidden">
          <h1 className="mt-4 mr-8 w-full text-right font-header text-3xl text-cream dark:text-blue">Welcome to</h1>
          <img className=" mr-8 w-2/3 dark:hidden sm:hidden" src="src/assets/icons/logocream.png" alt="logo" />
          <img className=" mr-8 hidden w-2/3 dark:block sm:hidden" src="src/assets/icons/logo.png" alt="logo" />
          <div className=" mx-10  mt-4 text-justify font-body  text-cream  dark:text-blue sm:block ">
            A community for husky lovers to share and discover pictures of these beautiful dogs. Whether you're a
            seasoned husky owner or just looking to learn more about these majestic animals, Snowy Snaps is the perfect
            place to start. So join the pack and share your love of huskies with us!
          </div>
        </div>
        <div ref={ref} className={` w-full ${inViewport ? 'sticky top-14 md:static xl:sticky' : 'z-10 '} mt-24`}>
          <WatchSection />
        </div>
        <div className="z-40 mt-0 block h-full w-full bg-white xl:hidden">
          <LearnSection />
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
