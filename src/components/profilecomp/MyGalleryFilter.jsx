import { motion } from 'framer-motion'

const MyGalleryFilter = ({ setMyImages, likedGallery, setLikedGallery }) => {
  const HandleOnClick = () => {
    setLikedGallery(false)
    setMyImages(true)
  }
  const HandleOnClick2 = () => {
    setLikedGallery(true)
    setMyImages(false)
  }
  return (
    <div className=" mx-2 mt-5  flex w-full flex-col content-center items-center justify-center  gap-0 rounded-md bg-cream sm:mx-0 sm:w-[450px] md:ml-20 lg:ml-0  ">
      <h2 className="my-2  text-center font-header text-2xl text-peach sm:text-3xl xl:text-4xl   ">Choose content</h2>
      <div className="mb-2 flex items-center justify-center gap-10">
        <motion.p
          onClick={HandleOnClick}
          className={`${
            likedGallery ? 'opacity-60' : 'opacity-100'
          } cursor-pointer text-center font-header text-xl text-blue sm:text-2xl`}
          whileHover={{ scale: 1.1 }}>
          Uploaded snaps
        </motion.p>

        <motion.p
          onClick={HandleOnClick2}
          className={`${
            likedGallery ? 'opacity-100' : 'opacity-60'
          }  cursor-pointer text-center font-header text-xl text-blue sm:text-2xl`}
          whileHover={{ scale: 1.1 }}>
          Liked snaps
        </motion.p>
      </div>
    </div>
  )
}

export default MyGalleryFilter
