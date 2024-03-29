import { motion } from 'framer-motion'

const MySnapsFilter = ({ setMyImages, likedImages, setLikedImages }) => {
  const handleOnClickShowUploaded = () => {
    setLikedImages(false)
    setMyImages(true)
  }
  const handleOnClick2 = () => {
    setLikedImages(true)
    setMyImages(false)
  }
  return (
    <div
      className=" mx-2 mt-5  flex w-full flex-col content-center items-center justify-center 
    gap-0 rounded-md bg-cream dark:bg-blue sm:mx-0 sm:w-[450px] md:ml-20 lg:ml-0  ">
      <h2 className="my-2 text-center font-header text-2xl text-peach dark:text-cream sm:text-3xl xl:text-4xl   ">
        Choose content
      </h2>
      <div className="mb-2 flex items-center justify-center gap-10">
        <motion.p
          onClick={handleOnClickShowUploaded}
          className={`${likedImages ? 'opacity-60 dark:opacity-40' : 'opacity-100'} 
            cursor-pointer text-center font-header text-xl text-blue dark:text-cream sm:text-2xl`}
          whileHover={{ scale: 1.1 }}>
          Uploaded snaps
        </motion.p>

        <motion.p
          onClick={handleOnClick2}
          className={`${likedImages ? 'opacity-100' : 'opacity-60 dark:opacity-40'} 
            cursor-pointer text-center font-header text-xl text-blue dark:text-cream sm:text-2xl`}
          whileHover={{ scale: 1.1 }}>
          Liked snaps
        </motion.p>
      </div>
    </div>
  )
}

export default MySnapsFilter
