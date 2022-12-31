import LargeButton from "./LargeButton"


const WatchSection = () => {
  return (
    <div className="flex flex-col w-full bg-cream shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  z-20  ">
      <div className='ml-12'>
      <div className="mt-7">
          <LargeButton title="Watch photos and gifs!"/>
      </div>
        <div  className="w-1/2 grid grid-cols-2 gap-0  justify-center items-center">
       <img loading="lazy" src="src/assets/huskyp2.jpg" alt="huskypic" className=' object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskyp3.jpg" alt="huskypic" className= 'object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskygif.gif" alt="huskygif" className=' object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskywater.gif" alt="huskygif" className=' object-cover xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-80  mt-8  rounded-2xl' />
     
        <div className="col-span-2 mb-8 flex justify-center items-center">
        <LargeButton title="Show me more"/>
        </div>

        </div>
        </div>
        </div>
  )
}

export default WatchSection