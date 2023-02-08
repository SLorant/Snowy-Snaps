import { useState, useEffect, React } from 'react'
import ProgressBar from '../watchpagecomp/ProgressBar'
import { ref, getDownloadURL } from 'firebase/storage'
import { projectStorage } from '../../../firebase/config'
import { motion } from 'framer-motion'
import ImageEditor from '../profilecomp/ImageEditor'
import { FileUploader } from 'react-drag-drop-files'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import GifUploader from './GifUploader'

const UploadForm = ({ gallery, file, setFile, setUploaded }) => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']
  const isGallery = true
  const uploadType = 'gallery'
  var editor = ''

  const [emotion, setEmotion] = useState('')
  const [emotion2, setEmotion2] = useState('')
  const [emotion3, setEmotion3] = useState('')
  const [gif, setGif] = useState(false)
  const [showGifUp, setShowGifUp] = useState(false)
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg: 'src/assets/profile.png',
  })
  let selected
  const [showError, setShowError] = useState(true)
  const [loginError, setLoginError] = useState(false)
  const [pic, setPic] = useState(null)
  useEffect(() => {
    setTimeout(function () {
      setError(null)
    }, 10000)
  }, [error])

  const handleFileChange = (e) => {
    //console.log("first url:" + picture.img)
    if (currentUser) {
      selected = e.target.files[0]
      /* if (selected && selected.type === 'image/gif') {
        
      } */
      let url = URL.createObjectURL(e.target.files[0])
      console.log(url)
      setPic(url)
      console.log(selected)

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
        setShowGifUp(true)
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
      className={`${
        gallery ? '' : ' relative mb-4 w-0 items-start justify-start  md:w-1/4  lg:ml-4  xl:ml-0'
      } flex `}>
      {showGifUp && (
        <GifUploader
          setShowGifUp={setShowGifUp}
          setFile={setFile}
          url={pic}
          setEmotion={setEmotion}
          setEmotion2={setEmotion2}
          setEmotion3={setEmotion3}
          emotion={emotion}
          emotion2={emotion2}
          emotion3={emotion3}
        />
      )}
      <div
        className={`${
          gallery ? '' : ' ml-8 mt-4'
        } hidden w-full flex-col items-center justify-start md:flex lg:mt-8 xl:mt-4`}>
        <h2 className="  mb-2 text-center font-header text-xl text-blue md:w-32 lg:w-80 xl:text-3xl ">
          Post your own husky!
        </h2>
        <div className=" flex items-center justify-center">
          <motion.button
            className="uploadbutton flex h-16 w-40 items-center  justify-center rounded-md  bg-cream font-headersc  text-blue
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file-upload   lg:w-auto"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2D4550"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <polyline points="9 14 12 11 15 14" />
              </svg>
            </label>
            <input className="hidden" id="files" type="file" onChange={handleFileChange} />
          </motion.button>
        </div>
        <p className="mt-1 font-headersc text-base text-blue opacity-40">PNG, JPG, GIF</p>
        {error && (
          <div className="mt-2 font-body text-lg text-darkblue underline">
            {loginError && <Link to="/login"> {error}</Link>}
            {!loginError && <p> {error}</p>}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-16 flex flex-col  items-center justify-center">
        {file && (
          <div className="">
            <div className="ml-20 mb-1 font-header text-blue"> {file.name}</div>
            <ProgressBar
              setUploaded={setUploaded}
              file={file}
              emotion={emotion}
              emotion2={emotion2}
              emotion3={emotion3}
              setFile={setFile}
              uploadType={uploadType}
              gif={gif}
            />
          </div>
        )}

        {picture.cropperOpen && (
          <ImageEditor
            picture={picture}
            setPicture={setPicture}
            editor={editor}
            setFile={setFile}
            isGallery={isGallery}
            setEmotion={setEmotion}
            setEmotion2={setEmotion2}
            setEmotion3={setEmotion3}
            emotion={emotion}
            emotion2={emotion2}
            emotion3={emotion3}
          />
        )}
      </div>

      <button className="fixed right-3 bottom-3 h-20 w-20 rounded-full bg-sand md:hidden">
        <div className="flex items-center justify-center">
          <label
            htmlFor="files"
            className="uploadbutton flex h-20 w-20 cursor-pointer items-center justify-center rounded-full text-center text-lg duration-200 hover:bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon  icon-tabler icon-tabler-file-upload z-10  w-14 md:w-11 lg:w-auto"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2D4550"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <line x1="12" y1="11" x2="12" y2="17" />
              <polyline points="9 14 12 11 15 14" />
            </svg>
          </label>
          <input className="hidden" id="files" type="file" onChange={handleFileChange} />
        </div>
      </button>
    </div>
  )
}

export default UploadForm
