import AddHuskyButton from './AddHuskyButton'
import { useState } from 'react'
import LeftForm from './LeftForm'

const AddHuskySection = () => {
  const [show, setShow] = useState(false)

  /*const AddHusky = async (husky) => {
        const res = await fetch('http://localhost:5000/huskies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(husky)
        })}*/

  return (
    <div className="z-10 flex h-[400px] w-full  flex-col bg-blue   shadow-[0px_3px_10px_10px_rgba(0,0,0,0.3)] ">
      <AddHuskyButton onAdd={() => setShow(!show)} showAdd={show} />
      {show && <LeftForm />}
      {show && (
        <div className="h-20 w-20">
          <img src="./src/assets/husky.jpg" alt="husky" />
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <p className="font-hlight my-6  mx-6 text-center text-sm text-white xl:text-base">
          Upload your buddy so others can see who's the cutest! You can also save your favourites to
          watch them later.
        </p>
        <a href="#" className="font-hlight text-center font-bold text-white">
          Don't have an account? <br /> Register now!
        </a>
      </div>
    </div>
  )
}

export default AddHuskySection
