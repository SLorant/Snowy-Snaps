

const Learn = () => {
  //bg-gradient-to-b from-stone-700 r to-sky-900
  return (
    <div className="flex flex-col w-full  bg-[#738199] z-0">
        
        <div className="relative">
        
        <div className=" absolute top-12 lg:top-24 left-16 lg:left-28 flex flex-col z-50 justify-center items-center border-2 border-dashed border-slate-400  h-5/12 w-5/12 bg-slate-600 rounded-xl">  
       <h2 className='mt-4 md:mx-4 md:text-[18px] lg:text-md 2xl:text-lg tracking-wider 
        font-cutefont font-bold  text-white uppercase text-center '>How to train and take care of huskies</h2>      
        <p className="font-hlight md:text-[16px] lg:text-sm  xl:text-[18px] text-white text-center my-4 md:mx-4 xl:mx-12 2xl:mx-20">Siberian huskies are popular because of their friendly temperament and easy grooming.  Huskies are also notoriously stubborn and difficult to train. If you're considering bringing home a loving husky puppy, it is important to know what to expect.</p>
        <button className="mb-4 py-1 px-2 shadow-lg rounded-md bg-slate-500 hover:bg-slate-400 border-2 border-slate-500
        transition ease-in-out hover:border-2 hover:border-slate-200  border-dashed hover:scale-105  duration-500">
          <a className="mb-4 font-hlight font-bold text-sm  xl:text-base text-white text-center ">
            Take me there!</a>
            </button>
</div>

        <div className=" absolute top-[400px]  md:top-[450px] 2xl:top-96 left-16 lg:left-28 z-50
         flex flex-col items-center justify-center border-2 border-dashed border-stone-400  h-5/12 w-1/3 bg-stone-600 rounded-xl">
          <h2 className='mt-4 md:mx-4 text-center md:text-[18px] 2xl:text-lg tracking-wider font-bold 
        font-cutefont font-bold  text-white uppercase'>Description and interesting facts</h2>
        <p className="font-hlight md:text-[16px] lg:text-sm  xl:text-[18px] text-white text-center my-4 mb-2 md:mx-4 xl:mx-12">Siberian Huskies are known for being clean dogs. But what’s really unique is that these dogs actually lick and groom themselves much like a cat does. </p>
        <button className="mb-4 mt-2 py-1 px-2 shadow-lg rounded-md bg-stone-500 hover:bg-stone-400 border-2 border-stone-500
        transition ease-in-out hover:border-2 hover:border-stone-200 border-dashed hover:scale-105  duration-500 ">
          <a className="mb-4 font-hlight font-bold text-sm  xl:text-base text-white text-center ">
            Let me see!</a>
            </button>
        </div>

          <img className="relative w-full object-cover opacity-80 h-[800px] 2xl:h-auto"  src="src/assets/husky2wide4.jpg" alt="huskywide" />
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