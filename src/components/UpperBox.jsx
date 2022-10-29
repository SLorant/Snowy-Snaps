
import { useState } from "react"
import LeftForm from "./LeftForm"
import AddHuskyButton from "./AddHuskyButton"
import LearnButton from "./LearnButton"
import WatchButton from "./WatchButton"


//{show && <LeftForm onAdd = {addTask}/>}
const UpperBox = () => {
    const[show, setShow]=useState(false);
    

    const AddHusky = async (husky) => {
        const res = await fetch('http://localhost:5000/huskies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(husky)
        })}

    
  return (
    <div>
        <div className='container mx-auto px-2'>
            <div>
            <AddHuskyButton onAdd= {() => setShow(!show)} showAdd={show} />
            {show && <LeftForm onAdd={AddHusky}/>}
            {show && <div className='huskypic'>
                <img src="./src/assets/husky.jpg" alt="husky" /></div>}
            </div>
            <LearnButton/>
            <WatchButton/>
            
            
            </div>
        
    </div>
  )
}


export default UpperBox