import LargeButton from './LargeButton'

const WatchSection = () => {
  return (
    <div className="z-20 flex w-full flex-col bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  ">
      <div className="mx-6 flex w-auto">
        <div className="w-1/2  ">
          <div className=" grid w-full grid-cols-2  items-center justify-center">
            <div className="col-span-2   flex items-center justify-center">
              <h1 className="mt-10 font-header text-xl text-blue lg:text-2xl xl:text-3xl">
                Watch photos and gifs!
              </h1>
            </div>
            <div className=" col-span-2 h-[700px]   ">
              <div className="group relative top-0 left-0 mt-6 ml-8 flex">
                <img
                  src="src/assets/huskyp2.jpg"
                  alt="huskypic"
                  className="xl:max-h-56 2xl:max-h-80 relative z-0  
                 w-80 rounded-2xl object-cover  drop-shadow-lg  md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/huskyp3.jpg"
                  alt="huskypic"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                top-0 right-80 z-20  w-80 rounded-2xl  object-cover drop-shadow-lg transition
                 duration-500 ease-in-out group-hover:translate-y-64 group-hover:-translate-x-14  md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/landinghusky.png"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                top-0 right-60 z-30 w-80  rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:translate-x-56 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/huskyp4.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                right-40 z-40   w-80 rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:translate-y-64 group-hover:translate-x-36 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/huskywide4.png"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                right-20 z-50   w-80 rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:opacity-0 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/husky2wide.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                right-0 z-50   w-80 rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:opacity-0 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />

                <img
                  src="src/assets/huskywater.gif"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                top-64 right-4 z-50   w-80 rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:opacity-0 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
                <img
                  src="src/assets/huskygif.gif"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                top-64 z-50   w-80 rounded-2xl object-cover drop-shadow-lg 
                transition duration-500 ease-in-out group-hover:opacity-0 md:h-40 lg:h-48  xl:h-52  2xl:h-56"
                />
              </div>
            </div>

            <div className="col-span-2 mb-8 mt-7 flex items-center justify-center">
              <LargeButton title="Show me more" link="/watch" />
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col items-center ">
          <h1 className="mt-10 font-header text-xl text-blue lg:text-2xl xl:text-3xl">
            Share your own husky!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WatchSection
