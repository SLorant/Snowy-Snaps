import Sections from './Sections'

const HomePage = () => {
  return (
    <div className="h-full w-full bg-sand dark:bg-blue">
      <div className=" sticky top-0 right-0 z-0 flex w-full flex-col items-center justify-center ">
        <div className="absolute bottom-6 right-2 z-40 flex w-full flex-col items-end justify-end   sm:top-10 sm:bottom-auto sm:right-auto ">
          <div className="mt-20   flex w-7/12 flex-col items-end  sm:items-start sm:justify-start lg:w-1/2">
            <h1 className=" w-full text-right  font-header text-3xl text-blue dark:text-cream sm:w-auto sm:text-center md:ml-4 md:text-4xl lg:ml-0 xl:text-5xl 2xl:text-6xl">
              Welcome to<p className="hidden sm:inline">&nbsp;Snowy Snaps!</p>
            </h1>

            <img className=" mr-4 w-5/6 sm:hidden" src="src/assets/icons/logo.png" alt="logo" />
          </div>
          <div className="mt-4 w-7/12 lg:w-1/2">
            <div className="ml-6 w-4/5 md:ml-10 lg:ml-2 lg:w-3/4 xl:w-2/3 2xl:ml-4 2xl:w-1/2">
              <div className=" hidden font-body text-blue  dark:text-cream sm:block md:text-lg xl:text-xl">
                A community for husky lovers to share and discover pictures of these beautiful dogs. Whether you're a
                seasoned husky owner or just looking to learn more about these majestic animals, Snowy Snaps is the
                perfect place to start. So join the pack and share your love of huskies with us!
              </div>
            </div>
          </div>
        </div>

        <img
          src="src/assets/illustrations/landinghusky.png"
          alt="huskylove"
          className="absolute -top-10 z-30 hidden h-[1000px] w-full object-cover opacity-100 dark:hidden sm:block"
        />
        <img
          src="src/assets/illustrations/landinghuskydark.png"
          alt="huskylove"
          className="absolute -top-10 z-30 hidden h-[1000px] w-full object-cover opacity-100 dark:block sm:hidden"
        />
        <img
          src="src/assets/illustrations/landinghuskymobile.png"
          alt="huskylove"
          className="relative  top-10 z-10 block  w-full object-cover  sm:hidden"
        />
      </div>

      <div className="z-50  mt-20 h-[1000px]   w-full sm:mt-[970px] ">
        <Sections />
      </div>
    </div>
  )
}

export default HomePage
