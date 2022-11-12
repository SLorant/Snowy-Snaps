import AddHuskyButton from "./AddHuskyButton"
import { useState } from "react"
import LeftForm from "./LeftForm"

const AddHuskySection = () => {
    const[show, setShow]=useState(false);
    

    const AddHusky = async (husky) => {
        const res = await fetch('http://localhost:5000/huskies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(husky)
        })}

  return (
    <div className="flex shadow-[0px_3px_10px_10px_rgba(0,0,0,0.3)] flex-col w-full  bg-stone-400 h-[1000px]   z-10 ">
        <AddHuskyButton onAdd= {() => setShow(!show)} showAdd={show} />
            {show && <LeftForm onAdd={AddHusky}/>}
            {show && <div className='h-20 w-20'>
                <img src="./src/assets/husky.jpg" alt="husky" /></div>}
        <div className="flex flex-col justify-center items-center">
        <p className="font-hlight text-sm  xl:text-base text-white text-center my-6 mx-6">Upload your buddy so others can see who's the cutest! You can also save your favourites to watch them later.
        </p>
        <a href="#" className="font-hlight font-bold text-white text-center">Don't have an account? <br /> Register now!</a>
       
        </div>
        
    </div>
  )
}

export default AddHuskySection