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
  const [filteropen, setFilterOpen] = useState(false)
  const handleOnClickFilter= () => {
    setFilterOpen(!filteropen)
  }

  return (
    <div className="flex flex-col items-end w-full md:w-3/4">
      <div className="flex flex-col md:flex-row justify-center  md:gap-10  xl:gap-20 2xl:gap-10  w-full items-center bg-cream rounded-md">
        <div className={`${filteropen ? "border-b-2" : ""} md:hidden border-peach w-full flex items-center justify-center`}>
          <button className="flex w-full justify-center  font-headersc my-1 text-blue "
           onClick={() => handleOnClickFilter()}>Filter and Sort
          <motion.img src="src\assets\downarrow.png" className="w-6 ml-4" alt="" animate={{ rotate: filteropen ? 180 : 0}} /></button>
        </div>
        <div className={`${filteropen ? "flex" : "hidden md:flex"}  flex-col md:w-1/3 lg:w-1/6`}>
          <h2 className="xl:text-3xl text-2xl font-header  mt-2 md:my-2  text-peach  text-center">Sort by</h2>
          <div className="flex md:flex-col justify-center items-center 2xl:mt-0 mt-2 gap-6 md:gap-2 md:mb-3 mb-2">
              <motion.p onClick={() => handleOnClickOrder("desc")}
              className={`${sortbySelected === "asc" ? "opacity-60" : "opacity-100"} cursor-pointer  font-header text-blue text-xl md:text-lg lg:text-xl`}
              whileHover={{ scale: 1.15 }}>Newest</motion.p>
              <motion.p onClick={() => handleOnClickOrder("asc")}
              className={`${sortbySelected === "asc" ? "opacity-100" : "opacity-60"} cursor-pointer font-header text-blue text-lg lg:text-xl`}
              whileHover={{ scale: 1.15 }}>Oldest</motion.p>
          </div>
        </div>

        <div className={`${filteropen ? "flex" : "hidden md:flex"} flex-col   items-center`}>
          <h2 className="text-2xl  text-center mt-1 md:mt-3  xl:text-3xl text-peach font-header  ">Filter emotion</h2>
          
          <div className="gap-4 md:gap-2 2xl:gap-4  2xl:mb-3 grid grid-cols-4 my-2 2xl:flex">
            {emotions.map(emotion => (
        <div className="flex justify-center items-center w-10" key={emotion.label} onClick={() => handleOnClickEmotion(emotion.label)}>
          <Emoji emotionArray={emotionArray} source={emotion.label} />
          </div>    
      ))} 
          </div>
        </div>

        <div className={`${filteropen ? "flex" : "hidden md:flex"} flex-col`}>
          <h2 className="xl:text-3xl text-2xl mt-2 font-header md:my-2 text-peach  text-center">Image type</h2>
          <div className="flex flex-row md:flex-col justify-center items-center mt-2 2xl:mt-0 md:gap-2 gap-6 md:mb-3 mb-2">
              <motion.p onClick={() => handleOnClickImageType("picture")} className={`${imgTypeSelected === "picture" ? "opacity-100" : "opacity-60"}
              text-center font-header text-blue text-xl md:text-lg lg:text-xl cursor-pointer`} whileHover={{ scale: 1.15 }}>Picture</motion.p>
              <motion.p onClick={() => handleOnClickImageType("gif")} className={`${imgTypeSelected === "gif" ? "opacity-100" : "opacity-60"}
               text-center font-header text-blue text-xl md:text-lg lg:text-xl cursor-pointer`} whileHover={{ scale: 1.15 }}>Gif</motion.p>
          </div>
        </div>
      </div>

      <motion.p onClick={() => handleOnClickShowAll()}
      className={`${(imgTypeSelected  === "") && (!emotionArray.length) ? "opacity-100" : "opacity-60"}
      ${filteropen ? "flex" : "hidden md:block"} 
      font-header text-blue text-lg lg:text-xl mt-1 cursor-pointer mr-1`} whileHover={{ scale: 1.1 }}>Show everything</motion.p>
    </div>

  )
}

export default FilterSort