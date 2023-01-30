import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import MyImages from './MyImages'
import Modal from '../watchpagecomp/Modal'
import UploadForm from '../watchpagecomp/UploadForm'
import GalleryTop from './GalleryTop'
import { useAuth } from '../../contexts/AuthContext'
import LikedImages from './LikedImages'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const WatchPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [likedGallery, setLikedGallery] = useState(false)
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  let { state } = useLocation()
  let userID = currentUser.uid
  let userName
  let imgData2
  if (state) {
    userID = state.userId
    userName = state.userName
    imgData2 = state.imgData
  }

  const [file, setFile] = useState(null)
  const [imgData, setImgData] = useState({
    user: '',
    emotion: '',
    emotion2: '',
    emotion3: '',
    createdAt: '',
  })
  const handleImageUpload = (value) => {
    setUploaded(value)
  }
  const gallery = true

  async function handleNavigate() {
    try {
      userName !== 'profile' ? navigate(`/${userName}`) : navigate('/profile')
    } catch {
      setError("Couldn't load page")
    }
  }
  console.log(userName)
  return (
    <div>
      <div className="mt-32 flex flex-col items-center justify-center">
        <h1 className=" font-header  text-5xl  text-blue xl:text-5xl">
          {`${
            userName === 'profile'
              ? `My Gallery`
              : userID === currentUser.uid
              ? 'My Gallery'
              : `${userName}'s Gallery`
          }`}
        </h1>
        <div className="mt-2 flex w-full items-center justify-center   md:gap-10 lg:w-4/5  xl:w-3/4 xl:gap-24 2xl:gap-28 ">
          <div
            className={`${
              userName === 'profile'
                ? 'visible'
                : userID === currentUser.uid
                ? 'visible'
                : 'invisible'
            } mt-1 md:w-60`}>
            <UploadForm
              gallery={gallery}
              onImageUpload={handleImageUpload}
              file={file}
              setFile={setFile}
            />
          </div>
          <GalleryTop likedGallery={likedGallery} setLikedGallery={setLikedGallery} />
          {userName === 'profile' ? (
            <Link
              to="/profile"
              /* to={`${userName !== 'profile' ? `/${imgData2.user}` : '/profile'}`} */
              /*  state={`${userName !== 'profile' ? { imgData: imgData2 } : null}`} */
            >
              <motion.button
                /* onClick={handleNavigate} */
                className="mt-6 hidden w-20 cursor-pointer rounded-md bg-cream p-2 font-header text-blue hover:bg-blue hover:text-peach md:block   lg:text-xl xl:w-1/6"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                Back
                <p className="hidden xl:inline">&nbsp;to profile</p>
              </motion.button>
            </Link>
          ) : userID === currentUser.uid ? (
            <Link
              to="/profile"
              /*  state={`${userName !== 'profile' ? { imgData: imgData2 } : null}`} */
            >
              <motion.button
                /* onClick={handleNavigate} */
                className="mt-6 hidden w-20 cursor-pointer rounded-md bg-cream p-2 font-header text-blue hover:bg-blue hover:text-peach md:block   lg:text-xl xl:w-1/6"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                Back
                <p className="hidden xl:inline">&nbsp;to profile</p>
              </motion.button>
            </Link>
          ) : (
            <Link
              to={`/${imgData2.user}`}
              /*  state={`${userName !== 'profile' ? { imgData: imgData2 } : null}`} */
              state={{ imgData: imgData2 }}>
              <motion.button
                /* onClick={handleNavigate} */
                className="mt-6 hidden w-20 cursor-pointer rounded-md bg-cream p-2 font-header text-blue hover:bg-blue hover:text-peach md:block   lg:text-xl xl:w-1/6"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                Back
                <p className="hidden xl:inline">&nbsp;to profile</p>
              </motion.button>
            </Link>
          )}
        </div>
      </div>
      {!likedGallery && (
        <MyImages
          userID={userID}
          imgData={imgData}
          setImgData={setImgData}
          setSelectedImg={setSelectedImg}
        />
      )}
      {likedGallery && (
        <LikedImages imgData={imgData} setImgData={setImgData} setSelectedImg={setSelectedImg} />
      )}
      {selectedImg && (
        <Modal
          imgData={imgData}
          setImgData={setImgData}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  )
}

export default WatchPage
