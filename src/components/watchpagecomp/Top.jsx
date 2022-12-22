import { useState } from "react"

const Top = ({setOrder, setEmotion, setLimit}) => {
  return (
    <div className="flex w-1/2">
            <div className=" flex flex-col w-full my-8 justify-between h-16 ml-24">
              
              <div className="flex border-b-2 border-slate-800 border-dashed">
             <p className="text-2xl mr-12  text-slate-800 font-hbold  ">Filter</p>
             <button  onClick={() => {setEmotion("happy")} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">Happy</button>
             <button  onClick={() => {setEmotion("funny")} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">Funny</button>
             <button  onClick={() => {setEmotion("sad")} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">Sad</button>
             <button  onClick={() => {setEmotion("")} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">Reset</button>
             </div>

             <div className="flex items-center   mt-1">
              <p className="text-xl font-hbold  text-slate-800 ">Upload date</p>
               <button  onClick={() => {setOrder("desc")} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">
              Newest
             </button>
             <button  onClick={() => {setEmotion("asc")} } className="font-hlight text-slate-800 text-lg rounded-md   mx-4 ">
              Oldest
             </button> 
             <p className="text-xl font-hbold  text-slate-800  ml-4 ">Max images per page</p>
              <button onClick={() => {setLimit(25)} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">25</button>
              <button onClick={() => {setLimit(50)} } className="font-hlight text-slate-800 text-lg rounded-md  ml-4 ">50</button>
              <button onClick={() => {setLimit(100)} } className="font-hlight text-slate-800 text-lg rounded-md  mx-4 ">100</button>
            </div>
   
    </div>
    </div>
  )
}

export default Top

// NYÍL <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
 

/*<div className="  h-[1000px] ">
           
            <div className="mx-20 flex justify-center items-center">
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-3 mx-auto space-y-3 pb-28 mt-4 mx-4">
                    <div className=" "><img loading="lazy" src="src/assets/huskyp2.jpg" className="rounded-lg"  alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/husky.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskyp3.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/husky2wide.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskyp2.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskywide.png" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskyeye.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskyp4.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/huskywater.gif" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/husky.jpg" className="rounded-lg" alt="huskypic" /></div>
                    <div className=" "><img loading="lazy" src="src/assets/husky.jpg" className="rounded-lg" alt="huskypic" /></div>
                
                    </div>
                </div>
            </div> */