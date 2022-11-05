
import { useState } from "react"

import AddHusky from "./AddHusky"
import Learn from "./Learn"
import Watch from "./Watch"



//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
  AOS.init();

    
  return (
    <div >
        <div  className=' md:flex flex-col mt-6 justify-center items-center'>
        <div  className="z-0  absolute h-80 bg-white w-11/12 rounded"></div>
           
            
            <Watch/>
            <div className="z-10">
            <Learn/>
            </div>
            <AddHusky/>
            </div>
        
    </div>
  )
}


export default UpperBox