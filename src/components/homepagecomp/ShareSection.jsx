const ShareSection = () => {
  return (
    <div className="z-50 flex h-[900px] w-full flex-col items-center bg-sand  dark:bg-darkblue md:h-[800px] ">
      <h2 className="mt-10 font-header text-3xl text-blue dark:text-peach sm:text-4xl xl:text-5xl">
        Share your own husky!
      </h2>
      <div className="grid h-full w-full grid-cols-2 font-body text-cream md:w-auto md:grid-cols-3 md:text-lg lg:mr-96 xl:mr-40 2xl:mr-0 2xl:text-xl">
        <section className="relative z-30 w-80 sm:ml-36 md:my-20 md:ml-0 md:w-80  lg:w-auto">
          <img
            className="absolute top-6 -right-8 z-20 h-28 w-24 rotate-6 p-3 transition duration-300 ease-in-out
             hover:rotate-6 md:right-0 md:top-7 md:z-0 md:-rotate-6 lg:-right-28"
            src="/assets/emojis/relaxed.png"
            alt=""
          />
          <img
            className="absolute left-16 top-[300px] z-40 h-20 w-[68px] -rotate-12 transition duration-300
             ease-in-out hover:rotate-12 md:left-auto md:right-28 md:top-[190px] md:h-24 md:w-20 lg:right-0"
            src="/assets/emojis/mischievous.png"
            alt=""
          />
          <div
            className="absolute left-6 top-6 ml-0 w-64 rounded-xl bg-blue p-3  md:left-auto md:right-8
           md:top-28 md:p-5 lg:-right-16 lg:-right-16 ">
            Choose all kinds of emotions for your snap
          </div>
          <img
            className="absolute -right-0 bottom-96 h-20 w-[68px] rotate-12 transition duration-300 ease-in-out
             hover:-rotate-12 md:bottom-32 lg:bottom-60 lg:-right-40 lg:-right-40"
            src="/assets/emojis/excited.png"
            alt=""
          />
          <div
            className="absolute top-28 -right-6 ml-0 w-72 rounded-xl bg-blue p-3 md:top-auto md:left-20
           md:-bottom-10 md:p-5 lg:left-auto lg:-right-28 lg:bottom-10 ">
            Customize your profile and create your own gallery
          </div>
        </section>
        <section className=" z-0 w-auto md:static lg:relative lg:w-[700px]">
          <img
            className="h-15 absolute bottom-96 right-28 z-40 w-14 -rotate-12 transition duration-300
             ease-in-out hover:rotate-12 sm:hidden md:bottom-32 md:left-96
             md:block  lg:bottom-64 lg:left-44"
            src="/assets/emojis/stubborn.png"
            alt=""
          />
          <img
            className="absolute bottom-[120px] right-0 w-[350px] dark:hidden sm:right-40  md:right-0
              md:bottom-20 md:ml-28 md:mt-5  md:w-auto lg:static xl:mt-3"
            src="/assets/illustrations/landingshare.webp"
            alt="sharehusky"
          />
          <img
            className="absolute bottom-[120px] right-0 hidden w-[350px] dark:block sm:right-40  md:right-0
               md:bottom-20 md:ml-28 md:mt-5 md:w-auto lg:static xl:mt-3"
            src="/assets/illustrations/landingsharedark.webp"
            alt="sharehusky"
          />
          <div
            className="absolute bottom-[670px] left-6 w-72 rounded-xl bg-blue p-3 text-left sm:left-28 
          md:left-4 md:bottom-80 md:p-5 lg:bottom-auto lg:left-auto lg:top-20 lg:-right-12 xl:-right-20  ">
            Check other users' profiles by clicking on their name
          </div>
          <div
            className="absolute bottom-[605px] left-44 ml-0 w-40 rounded-xl bg-blue p-3 sm:left-72
           md:left-24 md:bottom-[700px] md:w-52 md:p-5 lg:left-auto lg:bottom-48 lg:-right-24 xl:-right-28 ">
            Like other doggos
          </div>
        </section>
        <section className="relative hidden font-body text-xl text-cream md:block "></section>
      </div>
    </div>
  )
}

export default ShareSection
