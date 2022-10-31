
import { useState } from "react"

import AddHusky from "./AddHusky"
import Learn from "./Learn"
import Watch from "./Watch"


//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
    

    
  return (
    <div>
        <div className=' md:flex mt-10 justify-center items-center gap-x-20 mx-5'>
        <div className="z-0 absolute h-32 bg-white w-11/12 mt-6 rounded"></div>
            <Learn/>
            
            <Watch/>
            <AddHusky/>
            </div>
        
    </div>
  )
}


export default UpperBox