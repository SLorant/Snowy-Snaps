import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import AddHusky from "./AddHuskySection"
import Learn from "./LearnSection"
import Watch from "./WatchSection"


const Sections = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-200px'); // Trigger as soon as the element becomes visible

  return (
    <div>
        <div  className='md:flex flex-col mt-6 justify-center items-center'>
          <div  className="z-0 absolute h-80 bg-white w-11/12 rounded"></div>
          <Watch/>
          <div ref={ref} className={`z-10 ${inViewport ? 'sticky top-0' : 'z-10'}`}>
            <Learn/>
          </div>
          <AddHusky/>
        </div>
        
    </div>
  )
}


export default Sections

//{show && <LeftForm onAdd = {addTask}/>}