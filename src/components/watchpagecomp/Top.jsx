
import { useState } from "react"
import Emoji from "./Emoji"
import {motion} from "framer-motion"

const Top = ({ setOrder, setEmotion, setImgType}) => {

  const emotions = [
    { label: "happy", source: "happy" },
    { label: "silly", source: "silly" },
    { label: "relaxed", source: "relaxed" },
    { label: "excited", source: "excited" },
    { label: "confused", source: "confused" },
    { label: "mischievous", source: "mischievous" },
    { label: "stubborn", source: "stubborn" },
    { label: "sad", source: "sad" }
  ];

  const [selected, setSelected] = useState(null)
  const [sortbySelected, setSortbySelected] = useState(null)



  const handleOnClickEmotion = (label) => {
    setImgType("");
    setEmotion(label);
    setSelected(label)
  }

  const handleOnClickOrder = (order) => {
    setOrder(order)
    setSortbySelected(order)
  }

  const handleOnClickImageType = (type) => {
    setEmotion('')
    setImgType(type);
  }

  return (

    <div className="flex  w-full">

      <div className="flex w-full items-center gap-4">

        <div className="flex flex-col w-1/3 xl:w-2/3 gap-2 bg-cream rounded-md items-center">
          <h2 className="text-xl text-center xl:text-3xl text-peach font-header mt-2 ">Filter</h2>
          <div className="">
          <div className=" gap-4 xl:gap-5  grid grid-cols-4 mb-3 xl:flex">

            {emotions.map(emotion => (
        <div className="flex justify-center items-center w-10" key={emotion.label} onClick={() => handleOnClickEmotion(emotion.label)}>
          <Emoji selected={selected} source={emotion.source} />
          </div>
      ))}

           
          </div>
          <div className="flex gap-4">
              <p className="text-lg font-hbold  text-center text-slate-800 ">Image type</p>
              <button onClick={() => handleOnClickImageType("picture")} className="text-center font-hlight text-slate-800 text-lg rounded-md ">
                Picture
              </button>
              <button onClick={() => handleOnClickImageType("gif")} className="text-center font-hlight text-slate-800 text-lg rounded-md  ">
                Gif
              </button>
            </div>
            </div>
        </div>
              
        <div className="flex flex-col gap-3 bg-cream rounded-md">
          <p className="text-3xl mt-2 font-header mx-4  text-peach  text-center">Sort by</p>
          <div className="flex flex-col gap-2 mb-4">

              <button onClick={() => handleOnClickOrder("desc")}
              className={`${sortbySelected === "asc" ? "opacity-60" : "opacity-100"} text-center font-header text-blue text-xl rounded-md`}>
              Newest</button>
              <button onClick={() => handleOnClickOrder("asc")}
              className={`${sortbySelected === "asc" ? "opacity-100" : "opacity-60"} text-center font-header text-blue text-xl rounded-md`}>
              Oldest</button>
              

            
          </div>



        </div>
        <button onClick={() => handleOnClickEmotion("")} className="text-center font-hlight text-slate-800 text-md xl:text-lg rounded-md mr-6 ">Reset</button>


      </div>
    </div>


  )
}

export default Top

// NYÍL <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

/* <p className="text-xl font-hbold  text-slate-800  ml-4 ">Max images per page</p>
              <button  onClick={() =>handleOnClickLimit(25) }  className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">25</button>
              <button  onClick={() =>handleOnClickLimit(50) }  className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">50</button>
              <button  onClick={() =>handleOnClickLimit(100) } className="font-hlight text-slate-800 text-lg rounded-md  mx-4 ">100</button> */

/*  function handleOnClickHappy(){
setEmotion("happy")
}
function handleOnClickSad(){
setEmotion("sad")
}
function handleOnClickFunny(){
setEmotion("funny")
}
function handleOnClickReset(){
setEmotion("")
}

function handleOnClickNewest(){
setOrder("desc")
}

function handleOnClickOldest(){
setOrder("asc")
}
function handleOnClickLimitLow(){
setLimit(25)
}
function handleOnClickLimitMedium(){
setLimit(50)
}
function handleOnClickLimitHigh(){
setLimit(100)
} */


