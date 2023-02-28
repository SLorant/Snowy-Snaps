import AvatarChooser from './AvatarChooser'

const ChangeUserAvatar = () => {
  return (
    <div className="z-50 h-full w-full bg-cream ">
      <div className=" z-30 flex h-full w-full items-center justify-center bg-cream ">
        <div className="z-30 flex h-full w-full flex-col rounded-xl bg-white md:mt-20 md:mb-24 md:h-3/4  md:w-4/5 md:justify-around xl:w-2/3  2xl:h-4/5 ">
          <div className="flex flex-col  items-center  justify-center ">
            <div className="mt-8 flex   w-full items-center justify-center">
              <p className="font-header  text-4xl text-peach ">Profile picture</p>
            </div>
            <AvatarChooser />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-cream"></div>
    </div>
  )
}

export default ChangeUserAvatar
