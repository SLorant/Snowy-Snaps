import LargeButton from './LargeButton'

const WatchSection = () => {
  return (
    <div className=" z-30 flex w-full flex-col bg-cream  shadow-[0px_3px_10px_2px_rgba(0,0,0,0.3)]  ">
      <div className="mx-6 flex w-auto gap-6 ">
        <div className="ml-40 w-1/3  ">
          <div className=" grid w-full grid-cols-2  items-center justify-center">
            <div className="col-span-2 flex w-full  items-center justify-center ">
              <h1 className="mt-10 font-header text-xl text-blue   lg:text-2xl xl:text-3xl">
                Watch photos and gifs!
              </h1>
            </div>

            <div className=" clip-img group z-20 col-span-2   h-[620px] rounded-md bg-sand  ">
              <div className=" relative top-0 left-0 z-20 flex h-full rounded-md   ">
                <img
                  src="src/assets/showcaseimages/husky1.jpg"
                  alt="huskypic"
                  className="xl:max-h-56 2xl:max-h-80 relative left-28 -top-40 z-20 
                 w-48 rotate-[18deg] rounded-md object-cover  drop-shadow-lg  md:h-40 lg:h-48  xl:h-48  2xl:h-72"
                />
                <img
                  src="src/assets/showcaseimages/husky2.jpg"
                  alt="huskypic"
                  className="xl:max-h-56 2xl:max-h-80 absolute
                top-72 -right-10 z-0  w-72  -rotate-2 rounded-md  object-cover drop-shadow-lg transition
                 duration-500 ease-in-out   md:h-40 md:h-48  lg:h-48  xl:h-48"
                />
                <img
                  src="src/assets/showcaseimages/husky4.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute -bottom-40
                right-8 z-40 w-72 rotate-12   rounded-md object-cover  drop-shadow-lg 
                transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-48"
                />
                <img
                  src="src/assets/showcaseimages/husky5.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute top-44
                left-20 z-0 w-72 -rotate-3   rounded-md object-cover  drop-shadow-lg 
                transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-48"
                />
                <img
                  src="src/assets/showcaseimages/husky6.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute top-72
                -left-12 z-20 w-48 -rotate-6  rounded-md object-cover  drop-shadow-lg 
                transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72"
                />
                <img
                  src="src/assets/showcaseimages/husky7.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute -top-20
                -right-8 z-20 w-48 -rotate-3   rounded-md object-cover  drop-shadow-lg 
                transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72"
                />
                <img
                  src="src/assets/showcaseimages/husky8.jpg"
                  alt="huskygif"
                  className="xl:max-h-56 2xl:max-h-80 absolute -top-6
                -left-6 z-20 w-48 rotate-6   rounded-md object-cover  drop-shadow-lg 
                transition duration-500 ease-in-out  md:h-40 lg:h-48  xl:h-48  2xl:h-72"
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
          <div className="mt-4 w-full rounded-md  "></div>
        </div>
      </div>
    </div>
  )
}

export default WatchSection
