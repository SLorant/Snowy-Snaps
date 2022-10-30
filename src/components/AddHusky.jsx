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
    <div className="flex flex-col w-1/3 bg-indigo-400 h-80 rounded ">
        <AddHuskyButton onAdd= {() => setShow(!show)} showAdd={show} />
            {show && <LeftForm onAdd={AddHusky}/>}
            {show && <div className='huskypic'>
                <img src="./src/assets/husky.jpg" alt="husky" /></div>}
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem natus adipisci rerum praesentium minus porro. Sequi ad, mollitia nisi minima voluptas autem reprehenderit eius culpa earum sint nostrum est. Nesciunt.</p>
    </div>
  )
}

export default AddHusky