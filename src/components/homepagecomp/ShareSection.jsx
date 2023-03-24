import Emoji from '../gallerycomp/Emoji'

const ShareSection = () => {
  return (
    <div className="z-50 flex h-[800px] w-full flex-col items-center  bg-sand dark:bg-darkblue ">
      <h2 className="mt-10 font-header text-4xl text-blue dark:text-peach 2xl:text-5xl">Share your own husky!</h2>
      <div className=" ml-0 grid h-full grid-cols-3 ">
        <section className="relative z-30 my-20 font-body text-xl text-cream ">
          <img
            className="absolute top-5 -right-28 z-0 h-28 w-24 -rotate-6 transition duration-300 ease-in-out hover:rotate-6"
            src="src/assets/emojis/relaxed.png"
            alt=""
          />
          <img
            className="absolute top-[190px] right-0 z-40 h-24 w-20 -rotate-12 transition duration-300 ease-in-out hover:rotate-12"
            src="src/assets/emojis/mischievous.png"
            alt=""
          />
          <div className="absolute -right-16 top-28 ml-0 w-64 rounded-xl bg-blue p-5 ">
            Choose all kinds of emotions for your snap
          </div>
          <img
            className="absolute bottom-60 -right-40 h-20 w-[68px] rotate-12 transition duration-300 ease-in-out hover:-rotate-12"
            src="src/assets/emojis/excited.png"
            alt=""
          />
          <div className="absolute -right-28 bottom-10 ml-0 w-72 rounded-xl bg-blue p-5 ">
            Customize your profile and create your own gallery
          </div>
        </section>
        <section className="relative z-0  w-[1000px]">
          <img
            className="h-15 absolute bottom-64 left-44 w-14 -rotate-12 transition duration-300 ease-in-out hover:rotate-12"
            src="src/assets/emojis/stubborn.png"
            alt=""
          />
          <img className="ml-16 mt-3  dark:hidden" src="src/assets/illustrations/landingshare.png" alt="sharehusky" />
          <img
            className="ml-16 mt-3 hidden dark:block"
            src="src/assets/illustrations/landingsharedark.png"
            alt="sharehusky"
          />
        </section>
        <section className="relative font-body text-xl text-cream ">
          <div className="absolute top-20 -left-40 w-72 rounded-xl bg-blue p-5 text-left  ">
            Check other users' profiles by clicking on their name
          </div>
          <div className="absolute -left-10 bottom-48 ml-0 w-52 rounded-xl bg-blue p-5 ">Like other doggos</div>
        </section>
      </div>
    </div>
  )
}

export default ShareSection
