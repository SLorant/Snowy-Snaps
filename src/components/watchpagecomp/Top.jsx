import { useState } from "react"

const Top = ({setOrder, setEmotion,  setImgType}) => {

  const [selected, setSelected] = useState("")

 

  const handleOnClickEmotion = (emotion) => {
    setImgType("");
    setEmotion(emotion);
    setSelected(emotion)
  }

  const handleOnClickOrder = (order) => {
    setOrder(order)
  }

  const handleOnClickImageType = (type) => {
    setEmotion('')
    setImgType(type);
  }

 


  return (
    
    <div className="flex w-2/3 ">
            
              
             <div className="grid grid-cols-6 w-full justify-center items-center">
              

              
             <p className="text-xl text-center mr-28 xl:text-2xl text-slate-800 font-hbold col-span-3 ">Filter</p>
             <p className="text-2xl font-hbold mr-28 text-slate-800 col-span-3 text-center">Sort</p>
            
             <img onClick={() =>handleOnClickEmotion("happy")}
              className={`${selected==="happy" ? "opacity-100" : "opacity-60"} h-8 w-8 place-self-center cursor-pointer `} src="src\assets\grinning.png" alt="emoji" /> 
            <img onClick={() =>handleOnClickEmotion("funny")}
              className={`${selected==="funny" ? "opacity-100" : "opacity-60"} h-8 w-8 place-self-center cursor-pointer `} src="src\assets\grinning.png" alt="emoji" /> 
             <p className="text-lg font-hbold text-center text-slate-800 col-span-2">Upload date</p>
             <p className="text-lg font-hbold  text-center text-slate-800 col-span-2">Image type</p>
             <button   onClick={() =>handleOnClickEmotion("sad")}  className="text-center font-hlight text-slate-800 text-md xl:text-lg rounded-md   ">Sad</button>
             <button   onClick={() =>handleOnClickEmotion("")}  className="text-center font-hlight text-slate-800 text-md xl:text-lg rounded-md mr-6 ">Reset</button>
             

            
             
             
              
              
               <button  onClick={() => handleOnClickOrder("desc")} className="text-center font-hlight text-slate-800 text-lg rounded-md   ">
              Newest
             </button>
             <button  onClick={() => handleOnClickOrder("asc")} className="text-center font-hlight text-slate-800 text-lg rounded-md    ">
              Oldest
             </button> 
            
             
                          
             
             
               <button  onClick={() => handleOnClickImageType("picture")} className="text-center font-hlight text-slate-800 text-lg rounded-md ">
              Picture
             </button>
             <button  onClick={() => handleOnClickImageType("gif")} className="text-center font-hlight text-slate-800 text-lg rounded-md  ">
              Gif
             </button>
             
 
             
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


