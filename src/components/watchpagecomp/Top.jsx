
import { useState } from "react"
import Emoji from "./Emoji"
import {motion} from "framer-motion"

const Top = ({ setOrder, emotionArray, setEmotionArray, setImgType}) => {

  const emotions = [
    { label: "happy" },
    { label: "silly" },
    { label: "relaxed" },
    { label: "excited" },
    { label: "confused" },
    { label: "mischievous" },
    { label: "stubborn" },
    { label: "sad" }
  ];

  const [selected, setSelected] = useState(null)
  const [sortbySelected, setSortbySelected] = useState(null)
  const [imgTypeSelected, setImgTypeSelected] = useState(null)
  


  const handleOnClickEmotion = (label) => {

    if (label === ""){
    setEmotionArray([])
    setImgType("")
    setImgTypeSelected("")
  }
    else {
    
    if (emotionArray.includes(label)) {
      setEmotionArray(arr => arr.filter(item => item !== label))
    } else {
      //setEmotion(label)
      setEmotionArray( arr => [...arr, label]);
      setSelected(label)
    }
    }
    
    
  }

  const handleOnClickOrder = (order) => {
    setOrder(order)
    setSortbySelected(order)
  }

  const handleOnClickImageType = (type) => {
    setImgType(type)
    setImgTypeSelected(type)
  }

  return (

    <div className="flex  w-3/4">

      <div className="flex w-full items-center bg-cream rounded-md gap-4">

        
              
        <div className="flex flex-col w-1/6 ml-6 gap-3 ">
          <p className="text-3xl mt-2 font-header mx-4  text-peach  text-center">Sort by</p>
          <div className="flex flex-col gap-2 mb-4">
              <button onClick={() => handleOnClickOrder("desc")}
              className={`${sortbySelected === "asc" ? "opacity-60" : "opacity-100"} text-center font-header text-blue text-xl `}>
              Newest</button>
              <button onClick={() => handleOnClickOrder("asc")}
              className={`${sortbySelected === "asc" ? "opacity-100" : "opacity-60"} text-center font-header text-blue text-xl `}>
              Oldest</button>
          </div>
        </div>
        <div className="flex flex-col w-1/3 xl:w-1/2 gap-2 ml-4  items-center">
          <h2 className="text-xl text-center xl:text-3xl text-peach font-header mt-2 ">Filter emotion</h2>
          <div className="flex flex-col justify-center items-center">
          <div className=" gap-4 xl:gap-5  grid grid-cols-4 my-2 xl:flex">

            {emotions.map(emotion => (
        <div className="flex justify-center items-center w-10" key={emotion.label} onClick={() => handleOnClickEmotion(emotion.label)}>
          <Emoji emotionArray={emotionArray} source={emotion.label} />
          </div>
          
      ))} 
          </div>
          

          
            </div>
        </div>
        <div className="flex flex-col gap-3 ml-6 ">
          <p className="text-3xl mt-2 font-header mx-4  text-peach  text-center">Image type</p>
          <div className="flex flex-col gap-2 mb-4">
              <button onClick={() => handleOnClickImageType("picture")}
              className={`${imgTypeSelected === "picture" ? "opacity-100" : "opacity-60"} text-center font-header text-blue text-xl `}>
              Picture</button>
              <button onClick={() => handleOnClickImageType("gif")}
              className={`${imgTypeSelected === "gif" ? "opacity-100" : "opacity-60"} text-center font-header text-blue text-xl `}>
              Gif</button>
          </div>
        </div>
        <button onClick={() => handleOnClickEmotion("")}
           className=" text-center font-header text-blue text-xl  mb-1">Show all</button>



      </div>
    </div>


  )
}

export default Top

// NYÍL <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

/* <p className="text-xl font-hbold  text-slate-800  ml-4 ">Max images per page</p>
              <button  onClick={() =>handleOnClickLimit(25) }  className="font-hlight text-slate-800 text-lg   ml-4 ">25</button>
              <button  onClick={() =>handleOnClickLimit(50) }  className="font-hlight text-slate-800 text-lg   ml-4 ">50</button>
              <button  onClick={() =>handleOnClickLimit(100) } className="font-hlight text-slate-800 text-lg   mx-4 ">100</button> */

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


