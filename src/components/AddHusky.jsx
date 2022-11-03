import AddHuskyButton from "./AddHuskyButton"
import { useState } from "react"
import LeftForm from "./LeftForm"

const AddHusky = () => {
    const[show, setShow]=useState(false);
    

    const AddHusky = async (husky) => {
        const res = await fetch('http://localhost:5000/huskies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(husky)
        })}

  return (
    <div className="flex flex-col w-1/3 bg-gradient-to-b from-slate-700 to-cyan-100  h-80 rounded-2xl z-10  ">
        <AddHuskyButton onAdd= {() => setShow(!show)} showAdd={show} />
            {show && <LeftForm onAdd={AddHusky}/>}
            {show && <div className='huskypic'>
                <img src="./src/assets/husky.jpg" alt="husky" /></div>}
        <div className="flex flex-col justify-center items-center">
        <p className="font-hlight text-sm  xl:text-base text-white text-center my-6 mx-6">Upload your buddy so others can see who's the cutest! You can also save your favourite pics.
        </p>
        <a href="#" className="font-hlight font-bold text-white text-center">Doesn't have an account? <br /> Register below</a>
        <svg xmlns="http://www.w3.org/2000/svg" className=" xl:mb-8 2xl:mb-8 transition cursor-pointer ease-in-out delay-150 hover:translate-y-6 hover:scale-100  duration-500"
         width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg>
        </div>
    </div>
  )
}

export default AddHusky