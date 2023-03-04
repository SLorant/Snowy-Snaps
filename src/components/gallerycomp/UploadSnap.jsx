import { useState, useEffect, React } from 'react'
import ProgressBar from './ProgressBar'
import { motion } from 'framer-motion'
import SnapEditor from '../profilecomp/SnapEditor'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import GifUploader from './GifUploader'
import UploadIcon from '../../assets/icons/UploadIcon'

const UploadSnap = ({ isMySnaps, file, setFile, setIsUploaded }) => {
  const { currentUser } = useAuth()
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']
  const isGallery = true
  const uploadType = 'gallery'
  var editor = ''
  const [uploadedEmotions, setUploadedEmotions] = useState([])
  const [gif, setGif] = useState(false)
  const [showGifUploader, setShowGifUploader] = useState(false)
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg: '/src/assets/avatars/profile.png',
  })
  let selected
  const [loginError, setLoginError] = useState(false)
  const [pic, setPic] = useState(null)
  useEffect(() => {
    setTimeout(function () {
      setError(null)
    }, 10000)
  }, [error])

  const handleFileChange = (e) => {
    if (currentUser) {
      selected = e.target.files[0]
      let url = URL.createObjectURL(e.target.files[0])
      setPic(url)

      if (selected && types.includes(selected.type)) {
        document.body.style.overflow = 'hidden'
        setGif(false)
        setPicture({
          ...picture,
          img: url,
          cropperOpen: true,
        })
        setError('')
      } else if (selected.type === 'image/gif') {
        setGif(true)
        setShowGifUploader(true)
      } else {
        setError('Please select an image file (png, jpg, gif)')
      }
    } else {
      setLoginError(true)
      setError('Please log in first')
    }
  }
  return (
    <div
      className={`${isMySnaps ? '' : ' relative mb-4 w-0 items-start justify-start  md:w-1/4  lg:ml-4  xl:ml-0'}
         flex flex-col`}>
      {showGifUploader && (
        <GifUploader
          setShowGifUploader={setShowGifUploader}
          setFile={setFile}
          url={pic}
          uploadedEmotions={uploadedEmotions}
          setUploadedEmotions={setUploadedEmotions}
        />
      )}
      <div
        className={`${
          isMySnaps ? 'lg:flex' : ' ml-8 mt-4 md:flex'
        } hidden w-full flex-col items-center justify-start  lg:mt-8 xl:mt-4`}>
        <h2 className="  mb-2 text-center font-header text-xl text-blue md:w-32 lg:w-80 xl:text-3xl ">
          Post your own husky!
        </h2>
        <div className=" flex items-center justify-center">
          <motion.button
            className="uploadbutton flex h-16 w-40 items-center  justify-center rounded-md  bg-cream font-header  text-blue
               hover:bg-blue hover:text-peach lg:h-14  lg:w-52 "
            whileHover={{
              transition: {
                duration: 0.2,
              },
              scale: 1.1,
            }}>
            <label
              htmlFor="files"
              className=" flex h-16 w-40 cursor-pointer items-center justify-center gap-2  text-center text-xl lg:h-12 lg:w-52">
              Upload snap
              <UploadIcon width="52" height="52" className="icon-upload lg:w-auto" />
            </label>
            <input className="hidden" id="files" type="file" onChange={handleFileChange} />
          </motion.button>
        </div>
        <p className="mt-1 font-header text-base text-blue opacity-40">PNG, JPG, GIF</p>
        {error && (
          <div className="mt-2 font-body text-lg text-darkblue underline">
            {loginError && <Link to="/login"> {error}</Link>}
            {!loginError && <p> {error}</p>}
          </div>
        )}
      </div>
      <div className="mt-2 flex flex-col  items-center justify-center">
        {file && (
          <div className="">
            <ProgressBar
              setIsUploaded={setIsUploaded}
              file={file}
              uploadedEmotions={uploadedEmotions}
              setFile={setFile}
              uploadType={uploadType}
              gif={gif}
            />
          </div>
        )}
        {picture.cropperOpen && (
          <SnapEditor
            picture={picture}
            setPicture={setPicture}
            editor={editor}
            setFile={setFile}
            isGallery={isGallery}
            uploadedEmotions={uploadedEmotions}
            setUploadedEmotions={setUploadedEmotions}
          />
        )}
      </div>
      <button
        className={`${isMySnaps ? 'lg:hidden' : 'md:hidden'}
           fixed right-3 bottom-3 h-20 w-20 rounded-full bg-sand md:h-24 md:w-24`}>
        <div className="flex items-center justify-center">
          <label
            htmlFor="files"
            className="uploadbutton flex h-20 w-20 cursor-pointer items-center justify-center rounded-full
             text-center text-lg duration-200 hover:bg-blue md:h-24 md:w-24">
            <UploadIcon width="64" height="64" className="icon-upload z-10  w-14 md:w-20 lg:w-auto" />
          </label>
          <input className="hidden" id="files" type="file" onChange={handleFileChange} />
        </div>
      </button>
    </div>
  )
}

export default UploadSnap
