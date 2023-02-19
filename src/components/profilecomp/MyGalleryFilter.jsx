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
    <div className=" mt-5 flex w-[450px] flex-col content-center items-center justify-center gap-2 gap-0 rounded-md bg-cream  ">
      <h2 className="my-2  text-center font-header text-3xl text-peach xl:text-4xl   ">Choose content</h2>
      <div className="mb-2 flex items-center justify-center gap-10">
        <motion.p
          onClick={HandleOnClick}
          className={`${
            likedGallery ? 'opacity-60' : 'opacity-100'
          } cursor-pointer text-center font-header text-2xl text-blue`}
          whileHover={{ scale: 1.1 }}>
          Uploaded snaps
        </motion.p>

        <motion.p
          onClick={HandleOnClick2}
          className={`${
            likedGallery ? 'opacity-100' : 'opacity-60'
          }  cursor-pointer text-center font-header text-2xl text-blue`}
          whileHover={{ scale: 1.1 }}>
          Liked snaps
        </motion.p>
      </div>
    </div>
  )
}

export default MyGalleryFilter
