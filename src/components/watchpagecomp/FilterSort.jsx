import { useState } from "react"
import Emoji from "./Emoji"
import {motion} from "framer-motion"

const FilterSort= ({ setOrder, emotionArray, setEmotionArray, setImgType}) => {

  const [sortbySelected, setSortbySelected] = useState(null)
  const [imgTypeSelected, setImgTypeSelected] = useState("")
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

  const handleOnClickEmotion = (label) => {
    if (emotionArray.includes(label)) {
      setEmotionArray(arr => arr.filter(item => item !== label))
    } else {
      setEmotionArray( arr => [...arr, label]);
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

  const handleOnClickShowAll = () => {
    setEmotionArray([])
    setImgType("")
    setImgTypeSelected("")
  }

  return (
    <div className="flex flex-col items-end w-3/4">
      <div className="flex w-full items-center bg-cream rounded-md">
      
        <div className="flex flex-col w-1/6">
          <h2 className="text-3xl font-header  my-2  text-peach  text-center">Sort by</h2>
          <div className="flex flex-col justify-center items-center gap-2 mb-3">
              <motion.p onClick={() => handleOnClickOrder("desc")}
              className={`${sortbySelected === "asc" ? "opacity-60" : "opacity-100"} cursor-pointer  font-header text-blue text-xl `}
              whileHover={{ scale: 1.15 }}>Newest</motion.p>
              <motion.p onClick={() => handleOnClickOrder("asc")}
              className={`${sortbySelected === "asc" ? "opacity-100" : "opacity-60"} cursor-pointer font-header text-blue text-xl`}
              whileHover={{ scale: 1.15 }}>Oldest</motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mx-16  items-center">
          <h2 className="text-xl text-center mb-1 xl:text-3xl text-peach font-header  ">Filter emotion</h2>
          
          <div className=" gap-4 xl:gap-6 mb-3 grid grid-cols-4 my-2 xl:flex">
            {emotions.map(emotion => (
        <div className="flex justify-center items-center w-10" key={emotion.label} onClick={() => handleOnClickEmotion(emotion.label)}>
          <Emoji emotionArray={emotionArray} source={emotion.label} />
          </div>    
      ))} 
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl mt-2 font-header my-2 text-peach  text-center">Image type</h2>
          <div className="flex flex-col justify-center items-center gap-2 mb-3">
              <motion.p onClick={() => handleOnClickImageType("picture")} className={`${imgTypeSelected === "picture" ? "opacity-100" : "opacity-60"}
              text-center font-header text-blue text-xl cursor-pointer`} whileHover={{ scale: 1.15 }}>Picture</motion.p>
              <motion.p onClick={() => handleOnClickImageType("gif")} className={`${imgTypeSelected === "gif" ? "opacity-100" : "opacity-60"}
               text-center font-header text-blue text-xl cursor-pointer`} whileHover={{ scale: 1.15 }}>Gif</motion.p>
          </div>
        </div>
      </div>

      <motion.p onClick={() => handleOnClickShowAll()}
      className={`${(imgTypeSelected  === "") && (!emotionArray.length) ? "opacity-100" : "opacity-60"}
      font-header text-blue text-xl mt-1 cursor-pointer mr-1`} whileHover={{ scale: 1.1 }}>Show everything</motion.p>
    </div>

  )
}

export default FilterSort