const LearnSection = () => {
  //bg-gradient-to-b from-stone-700 r to-sky-900
  return (
    <div className="z-50 flex h-screen w-full flex-col items-center   bg-sand shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]">
      <h1 className="mt-10 font-header text-xl text-blue lg:text-2xl xl:text-4xl">
        Share your own husky!
      </h1>
    </div>
  )
}

/*<div  className="top-8 left-72 z-40 absolute">
        <div  className=" shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 my-4  duration-500">
          <h2  className='md:text-md lg:text-lg 2xl:text-xl tracking-widest 
        font-cutefont font-bold  text-slate-800  py-2 px-4'>Learn about Huskies</h2>
        </div>
        </div> */
export default LearnSection
