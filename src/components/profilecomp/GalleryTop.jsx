import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'

const GalleryTop = () => {
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
    <div className="mr-24 flex w-1/2 flex-col  items-center justify-center gap-0 ">
      <div className="flex w-full ">
        <div className=" flex w-full flex-col content-center gap-2 rounded-md bg-cream">
          <h2 className="mt-2  text-center font-header text-2xl text-peach xl:text-3xl   ">
            Filter emotion
          </h2>
          <div className="mb-2 flex items-center justify-center gap-10">
            <h2 className="  text-center font-header text-xl text-blue">Uploaded pics</h2>
            <Link to="/liked-gallery">
              <h2 className="   text-center font-header text-xl text-blue opacity-60">
                Liked pics
              </h2>
            </Link>
          </div>
        </div>
      </div>
      {/* <h1 className="mx-4 my-4  font-header text-4xl text-blue">My Gallery</h1> */}
    </div>
  )
}

export default GalleryTop
