import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'

const GalleryTop = ({ likedGallery, setLikedGallery }) => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  async function handleNavigate() {
    try {
      navigate('/profile')
    } catch {
      setError("Couldn't load page")
    }
  }
  return (
    <div className="mr-24 mt-5 flex w-1/2 flex-col  items-center justify-center gap-0 ">
      <div className="flex w-full ">
        <div className=" flex w-full flex-col content-center gap-2 rounded-md bg-cream">
          <h2 className="mt-2  text-center font-header text-2xl text-peach xl:text-3xl   ">
            Choose content
          </h2>
          <div className="mb-2 flex items-center justify-center gap-10">
            {/*  <button
              onClick={() => {
                setLikedGallery(false)
              }}
              className="  text-center font-header text-xl text-blue">
              Uploaded pics
            </button> */}
            <motion.p
              onClick={() => setLikedGallery(false)}
              className={`${
                likedGallery ? 'opacity-60' : 'opacity-100'
              } cursor-pointer text-center font-header text-xl text-blue`}
              whileHover={{ scale: 1.1 }}>
              Uploaded snaps
            </motion.p>

            <motion.p
              onClick={() => setLikedGallery(true)}
              className={`${
                likedGallery ? 'opacity-100' : 'opacity-60'
              }  cursor-pointer text-center font-header text-xl text-blue`}
              whileHover={{ scale: 1.1 }}>
              Liked snaps
            </motion.p>
          </div>
        </div>
      </div>
      {/* <h1 className="mx-4 my-4  font-header text-4xl text-blue">My Gallery</h1> */}
    </div>
  )
}

export default GalleryTop
