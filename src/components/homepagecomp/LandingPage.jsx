import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import Sections from './Sections'

const LandingPage = () => {
  /*  const ref = useRef()
  const inViewport = useIntersection(ref, '-1000px') // Trigger as soon as the element becomes visible
  console.log(inViewport) */
  return (
    <div className="">
      <div className=" sticky top-0 right-0 z-0 flex w-full flex-col items-center justify-center ">
        <div className="absolute bottom-6 right-2 z-40 flex w-full flex-col items-end justify-end   sm:top-10 sm:bottom-auto sm:right-auto ">
          <div className="mt-20 flex w-2/3 flex-col items-end  md:w-1/2 md:items-start md:justify-start">
            <h1 className=" mr-4 w-full text-right font-header text-3xl text-blue md:w-auto md:text-center md:text-4xl xl:text-4xl 2xl:text-5xl">
              Welcome to<p className="hidden sm:inline">&nbsp;Snowy Snaps!</p>
            </h1>

            <img className=" mr-4 w-5/6 sm:hidden" src="src/assets/logo.png" alt="logo" />
          </div>
          <div className="mt-4 w-1/2">
            <div className="ml-2 w-1/2">
              <div className=" hidden font-body  text-blue sm:block md:text-xl">
                A community for husky lovers to share and discover pictures of these beautiful dogs.
                Whether you're a seasoned husky owner or just looking to learn more about these
                majestic animals, Snowy Snaps is the perfect place to start. So join the pack and
                share your love of huskies with us!
              </div>
            </div>
          </div>
        </div>

        <img
          src="src/assets/landinghusky.png"
          alt="huskylove"
          className="absolute -top-10 z-30 hidden h-[1000px] w-full object-cover opacity-100 sm:block"
        />
        <img
          src="src/assets/landinghuskymobile.png"
          alt="huskylove"
          className="relative  top-10 z-10 block  w-full object-cover  sm:hidden"
        />
      </div>

      <div className="z-50  mt-20 h-[1000px]   w-full sm:mt-[970px]">
        <Sections />
      </div>
    </div>
  )
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
