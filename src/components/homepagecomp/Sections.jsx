import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import AddHusky from './AddHuskySection'
import Learn from './LearnSection'
import Watch from './WatchSection'

const Sections = () => {
  const ref = useRef()
  const inViewport = useIntersection(ref, '200px') // Trigger as soon as the element becomes visible

  return (
    <div>
      <div className="mt-6 flex-col items-center justify-center md:flex">
        <div className="absolute z-0 h-80 w-11/12 rounded bg-white"></div>
        <div ref={ref} className={` w-full ${inViewport ? 'sticky top-14' : 'z-10'}`}>
          <Watch />
        </div>
        <div className="z-30 w-full">
          <Learn />
        </div>
        <AddHusky />
      </div>
    </div>
  )
}

export default Sections

//{show && <LeftForm onAdd = {addTask}/>}
