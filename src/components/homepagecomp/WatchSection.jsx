import LargeButton from "./LargeButton"


const WatchSection = () => {
  return (
    <div className="flex flex-col w-full bg-cream shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  z-20  ">
      <div className='mx-6 flex w-auto'>
        <div className="w-1/2  ">
      
        <div  className="w-full grid grid-cols-2   justify-center items-center">
        <div className="col-span-2   flex justify-center items-center">
          <h1 className="mt-10 text-xl text-blue lg:text-2xl xl:text-3xl font-header">Watch photos and gifs!</h1>
      </div>
       <img loading="lazy" src="src/assets/huskyp2.jpg" alt="huskypic" className='ml-5 object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskyp3.jpg" alt="huskypic" className= 'ml-5 object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskygif.gif" alt="huskygif" className='ml-5 object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskywater.gif" alt="huskygif" className='ml-5 object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
     
        <div className="col-span-2 mb-8 mt-7 flex justify-center items-center">
        <LargeButton title="Show me more" link="/watch"/>
        </div>

        </div>
        </div>

        <div className="w-1/2 flex flex-col items-center ">
        <h1 className="mt-10 text-xl text-blue lg:text-2xl xl:text-3xl font-header">Share your own husky!</h1>
        </div>
        

        
        </div>
        </div>
  )
}

export default WatchSection