import LearnButton from "./LearnButton"

const Learn = () => {
  //bg-gradient-to-b from-stone-700 r to-sky-900
  return (
    <div className="flex flex-col w-full  bg-[#738199]    z-0">
        
        <div className="relative">
        
        <div className=" absolute top-24 left-28 flex flex-col z-50 justify-center items-center border-2 border-dashed border-slate-400  h-1/3 w-5/12 bg-slate-600 rounded-xl">  
       <h2 className='mt-4 md:text-md lg:text-lg 2xl:text-lg tracking-wider 
        font-cutefont font-bold  text-white uppercase '>How to train and take care of huskies</h2>      
        <p className="font-hlight text-sm  xl:text-base text-white text-center my-6 mx-6">Siberian huskies are popular because of their friendly temperament and easy grooming.  Huskies are also notoriously stubborn and difficult to train. If you're considering bringing home a loving husky puppy, it is important to know what to expect.</p>
</div>
        <div className=" absolute top-96 left-28 z-50 flex flex-col items-center justify-center border-2 border-dashed border-stone-400  h-1/3 w-1/3 bg-stone-600 rounded-xl">
          <h2 className='md:text-md lg:text-lg 2xl:text-lg tracking-widest 
        font-cutefont font-bold  text-white uppercase'>Husky health</h2>
        <p className="font-hlight text-sm  xl:text-base text-white text-center my-6 mx-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia minus odit aperiam obcaecati voluptatibus cumque. Illum, ad placeat at facere assumenda sunt cupiditate optio? Quaerat possimus cum id iusto?</p>
        </div>

          <img className="relative w-full object-cover opacity-80 "  src="src/assets/husky2wide4.jpg" alt="huskywide" />
        </div>
    </div>
  )
}

/*<div  className="top-8 left-72 z-40 absolute">
        <div  className=" shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 my-4  duration-500">
          <h2  className='md:text-md lg:text-lg 2xl:text-xl tracking-widest 
        font-cutefont font-bold  text-slate-800  py-2 px-4'>Learn about Huskies</h2>
        </div>
        </div> */
export default Learn