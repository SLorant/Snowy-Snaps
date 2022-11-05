
import AOS from 'aos';

const Watch = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  z-20  ">
      <div data-aos="fade-down" className="h-20   flex justify-center items-center">
        <div  className="shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105 my-4  duration-500">
          <h2  className='h-18  text-center  md:text-md lg:text-xl 2xl:text-2xl tracking-widest 
        font-cutefont font-bold  text-slate-800  py-2 px-4 '>Watch videos, gifs, and photos</h2>
        </div>
        </div>
        
        <div  className="w-11/12 grid grid-cols-3 grid-rows-[250px_250px_100px] gap-12 gap-y-12  justify-center items-center">
       <img src="src/assets/huskyp2.jpg" alt="huskypic" className='ml-4 shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-56  w-11/12 mt-8  rounded-2xl' />
       <img src="src/assets/huskygif.gif" alt="huskygif" className='ml-4 mt-8  mb-0 shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-56 w-11/12  rounded-2xl' />
       <video controls alt="huskyvid" className=' mt-8 ml-4 object-fill shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-56    w-11/12  rounded-2xl'>
       <source src='src/assets/huskyvideo.mp4'  type="video/mp4"/>
       </video>
       <img src="src/assets/huskyp3.jpg" alt="huskypic" className='ml-4 shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-60  w-11/12 mt-8  rounded-2xl' />
       <img src="src/assets/huskyboop.gif" alt="huskygif" className=' ml-4 mt-8  mb-0 shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-60 w-11/12  rounded-2xl' />
       
       <video controls alt="huskyvid" className='mt-8 ml-4 object-fill shadow-lg max-h-28 xl:max-h-32 2xl:max-h-80 h-60  w-11/12  rounded-2xl'>
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
export default Watch