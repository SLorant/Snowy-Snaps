import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import Sections from './Sections'

const LandingPage = () => {
   const ref = useRef(); 
   const inViewport = useIntersection(ref, "100px"); // Trigger as soon as the element becomes visible

  return (
    <div >
    <div className={`${inViewport ? "opacity-100" : "sticky top-0"}  flex flex-col justify-center items-center w-full z-0`}>
      
    {/* <div className="flex flex-col justify-center items-center my-14 z-10 w-full ">
        <div className="h-32 absolute bg-indigo-600 md:bg-green-600 lg:bg-blue-600 xl:bg-red-600 2xl:bg-stone-700 top-36 opacity-20 w-full"></div>
        <h1 className="font-hbold my-1 md:my-5 mt-[150px] md:mt-[170px] lg:mt-32   text-3xl mx-8 xl:mx-0
        text-slate-800 text-3xl lg:text-4xl xl:text-5xl tracking-tight text-center">Welcome to the one and only Husky page!</h1>
        <h2 className="font-cutefont my-6 xl:my-5 mx-16 xl:mx-0 text-slate-800 sm:text-lg lg:text-xl xl:text-2xl text-center">
        You can learn about Huskies, watch cute videos, and even upload your own pet-friend!</h2>
    </div> */}
    <div className="flex flex-col justify-end items-end absolute top-16 z-50 w-full ">
    <div className="mt-12 w-1/2 flex justify-start items-center">
      <h1 className='text-blue mr-4   font-header text-3xl'>Welcome To Snowy Snaps!</h1>
    </div>
    <div className='w-1/2 mt-4'>
      <div className='w-1/2 ml-2'>
        <p className='text-blue font-body text-base'>
         A community for husky lovers to share and discover pictures of these beautiful dogs. But it's not just about the images – Snowy Snaps also provides resources and information on how to care for and train your husky. Whether you're a seasoned husky owner or just looking to learn more about these majestic animals, Snowy Snaps is the perfect place to start. So join the pack and share your love of huskies with us!
        </p>
        </div>
      </div>
    </div>

    <img src="src/assets/landinghusky.png" alt="huskylove" className="opacity-100 z-30 object-cover -top-6 absolute w-full h-[1000px]" />
    </div>

    <div className="mt-[770px] md:mt-[540px] lg:mt-[560px] xl:mt-[970px] h-[1000px]  w-full z-20">
        <div></div>
        <Sections/>
     </div>
      <div ref={ref}></div> 
    
    </div>)
    
}

export default LandingPage

 /*  if (inViewport) {
    console.log('in viewport:', ref.current);
}*/
//${inViewport ? 'absolute top-0' : 'fixed top-0'}



/* colors: {
  'lightblue' : '#cddcf2',
  'darkblue': '#405780',
  'vanilla': '#ffefcc',
  'white':
}*/

/*
    <a href="#watch-media"><svg xmlns="http://www.w3.org/2000/svg" className=" transition cursor-pointer ease-in-out delay-150 hover:translate-y-6 hover:scale-100  duration-500"
         width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7a7c8c" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg></a>  */