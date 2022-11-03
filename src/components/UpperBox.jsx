
import { useState } from "react"

import AddHusky from "./AddHusky"
import Learn from "./Learn"
import Watch from "./Watch"
import AOS from 'aos';


//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
  AOS.init();

    
  return (
    <div>
        <div data-aos="fade-right" className=' md:flex mt-10 justify-center items-center md:gap-x-5 lg:gap-x-10 xl:gap-x-20 mx-5'>
        <div data-aos="fade-right" className="z-0  absolute h-80 bg-white w-11/12 rounded"></div>
            <Learn data-aos="fade-right"/>
            
            <Watch/>
            <AddHusky/>
            </div>
        
    </div>
  )
}


export default UpperBox