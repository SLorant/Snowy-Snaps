import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import AddHusky from './AddHuskySection'
import ShareSection from './LearnSection'
import WatchSection from './WatchSection'

const Sections = () => {
  const ref2 = useRef()
  const inViewport = useIntersection(ref2, '200px') // Trigger as soon as the element becomes visible
  console.log(inViewport)
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute -top-52 z-20 flex h-[315px] w-full flex-col items-end bg-blue shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] sm:hidden">
          <h1 className="mt-4 mr-8 w-full text-right font-header text-3xl text-cream">
            Welcome to
          </h1>
          <img className=" mr-8 w-2/3 sm:hidden" src="src/assets/logocream.png" alt="logo" />
          <div className=" mx-10  mt-4 text-justify  font-body  text-cream sm:block ">
            A community for husky lovers to share and discover pictures of these beautiful dogs.
            Whether you're a seasoned husky owner or just looking to learn more about these majestic
            animals, Snowy Snaps is the perfect place to start. So join the pack and share your love
            of huskies with us!
          </div>
        </div>
        <div ref={ref2} className={` w-full ${inViewport ? 'sticky top-14' : 'z-10 '}`}>
          <WatchSection />
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
