import { useRef } from 'react'
import useIntersection from '../hooks/useIntersection'
import Sections from './Sections'

const LandingPage = () => {
  const ref = useRef()
  const inViewport = useIntersection(ref, '100px') // Trigger as soon as the element becomes visible

  return (
    <div>
      <div
        className={`${
          inViewport ? 'opacity-100' : 'sticky top-0'
        }  z-0 flex w-full flex-col items-center justify-center`}>
        <div className="absolute top-16 z-50 flex w-full flex-col items-end justify-end ">
          <div className="mt-20 flex w-1/2 items-center justify-start">
            <h1 className="mr-4 font-header  text-3xl text-blue xl:text-4xl 2xl:text-4xl">
              Welcome To Snowy Snaps!
            </h1>
          </div>
          <div className="mt-4 w-1/2">
            <div className="ml-2 w-1/2">
              <div className="font-body text-xl text-blue">
                A community for husky lovers to share and discover pictures of these beautiful dogs.
                <p className="hidden xl:inline">
                  &nbsp;But it's not just about the images – Snowy Snaps also provides resources and
                  information on how to care for and train your husky.
                </p>
                &nbsp;Whether you're a seasoned husky owner or just looking to learn more about
                these majestic animals, Snowy Snaps is the perfect place to start. So join the pack
                and share your love of huskies with us!
              </div>
            </div>
          </div>
        </div>

        <img
          src="src/assets/landinghusky.png"
          alt="huskylove"
          className="absolute -top-10 z-30 h-[1000px] w-full object-cover opacity-100"
        />
      </div>

      <div className="z-20 mt-[770px] h-[1000px] w-full md:mt-[540px]  lg:mt-[560px] xl:mt-[970px]">
        <div></div>
        <Sections />
      </div>
      <div ref={ref}></div>
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
