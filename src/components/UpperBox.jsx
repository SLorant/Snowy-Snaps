
import { useState } from "react"

import AddHusky from "./AddHusky"
import Learn from "./Learn"
import Watch from "./Watch"


//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
    

    
  return (
    <div>
        <div className=' md:flex mt-10 justify-center items-center md:gap-x-5 lg:gap-x-10 xl:gap-x-20 mx-5'>
        <div className="z-0 absolute h-80 bg-white w-11/12 rounded"></div>
            <Learn/>
            
            <Watch/>
            <AddHusky/>
            </div>
        
    </div>
  )
}


export default UpperBox