
const WatchSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  z-20  ">
      <div data-aos="fade-down" data-aos-offset="10" data-aos-once= "true" className="h-20   flex justify-center items-center">
        <div  className="shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 my-4  duration-500">
          <h2  className='h-18  text-center  md:text-md lg:text-xl 2xl:text-2xl tracking-widest 
        font-cutefont font-bold  text-slate-800  py-2 px-4 '>Watch videos, gifs, and photos</h2>
        </div>
        </div>
        
        <div  className="w-11/12 grid grid-cols-3 md:grid-rows-[200px_250px_80px] xl:grid-rows-[250px_250px_90px]
         md:gap-6 md:gap-y-0 lg:gap-8 xl:gap-x-12 xl:gap-y-6 2xl:gap-y-14   justify-center items-center">
       <img loading="lazy" src="src/assets/huskyp2.jpg" alt="huskypic" className='ml-4 object-cover shadow-lg  xl:max-h-56 2xl:max-h-80 md:h-40 lg:h-48 xl:h-52 2xl:h-56 w-11/12 mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskygif.gif" alt="huskygif" className='ml-4 object-cover mt-8  mb-0 shadow-lg  2xl:max-h-80 md:h-40 lg:h-48 2xl:h-56 w-11/12  rounded-2xl' />
       <video loading="lazy" controls alt="huskyvid" className=' mt-8 ml-4 object-cover shadow-lg h-52  2xl:max-h-80 h-56 md:h-40  lg:h-48 2xl:h-56  w-11/12  rounded-2xl'>
       <source src='src/assets/huskyvideo.mp4'  type="video/mp4"/>
       </video>

       <img loading="lazy" src="src/assets/huskyp3.jpg" alt="huskypic" className='ml-4 object-cover shadow-lg h-52 2xl:max-h-80 h-60 md:h-40 lg:h-48 2xl:h-56 w-11/12 mt-8  rounded-2xl' />
       <img loading="lazy" src="src/assets/huskywater.gif" alt="huskygif" className=' ml-4 object-cover mt-8 h-52 mb-0 shadow-lg md:h-40 lg:h-48 2xl:max-h-80 2xl:h-56 w-11/12  rounded-2xl' />
       <video loading="lazy" controls alt="huskyvid" className='mt-8 ml-4 object-cover shadow-lg h-52 2xl:max-h-80 h-60 md:h-40 2xl:h-56 lg:h-48 w-11/12  rounded-2xl'>
       <source src='src/assets/huskyvideo2.mp4'  type="video/mp4"/>
       </video>
       
       <div  className=" w-10/12  ml-8 shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 duration-500">
          <h2  className='text-center  md:text-md lg:text-xl 2xl:text-2xl 
        font-hlight font-bold  text-slate-800  py-2 px-4'>More photos...</h2>
        </div>
        <div  className=" w-10/12 ml-8  shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 duration-500">
          <h2  className='text-center  md:text-md lg:text-xl 2xl:text-2xl 
        font-hlight font-bold  text-slate-800  py-2 px-4 '>More gifs...</h2>
        </div>
        <div  className=" w-10/12 ml-8 shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 duration-500">
          <h2  className='text-center  md:text-md lg:text-xl 2xl:text-2xl 
        font-hlight font-bold  text-slate-800  py-2 px-4 '>More videos...</h2>
        </div>
        
       
        </div>
        <div className='h-8'></div>
        
        </div>
  )
}
/* <img src="src/assets/arrow6.png" alt="arrow"  className="
        transition cursor-pointer ease-in-out delay-150 hover:translate-y-10 hover:scale-100  duration-500 max-h-32"/>
*/
export default WatchSection