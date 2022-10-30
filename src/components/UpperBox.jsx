
import { useState } from "react"

import AddHusky from "./AddHusky"
import Learn from "./Learn"
import Watch from "./Watch"


//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
    

    
  return (
    <div>
        <div className=' md:flex mt-10 justify-center items-center gap-x-20'>
            <Learn/>
            <Watch/>
            <AddHusky/>
            </div>
        
    </div>
  )
}


export default UpperBox