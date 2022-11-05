
import UpperBox from './UpperBox'
const IntroPage = () => {

  //const ref = useRef();
 // const inViewport = useIntersection(ref, '100px'); // Trigger as soon as the element becomes visible

  /*if (inViewport) {
    console.log('in viewport:', ref.current);
}*/
//${inViewport ? 'absolute top-0' : 'fixed top-0'}
  return (
    <div >
    <div className='  fixed top-4 flex flex-col justify-center items-center w-full   z-0'>
      
    <div className="flex flex-col justify-center items-center   my-14  z-10 w-full ">
        <div className='h-32 absolute bg-stone-700 top-36 opacity-20 w-full'></div>
        <h1 className="font-hbold lg:my-5 mt-20 lg:mt-12 xl:mt-32   text-3xl mx-10 xl:mx-0
        text-slate-800 text-3xl text-4xl  xl:text-5xl tracking-tight text-center ">Welcome to the one and only Husky page!</h1>
        <h2 className="font-cutefont my-6 xl:my-5 mx-16 xl:mx-0  text-slate-800 sm:text-lg lg:text-xl xl:text-2xl text-center">You can learn about Huskies, watch cute videos, and even upload your own pet-friend!</h2>
        
        
    
    </div>
    <img src="src/assets/huskieslove.gif" alt="huskylove" className='opacity-60 z-0 top-48 absolute w-full' />

    </div>
    <div   className= ' h-[1700px]  mt-[1000px] w-full z-20'>
        <div ></div>
        <UpperBox />
        
     </div>
     
  
    </div>)
    
}

export default IntroPage

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