import { useState, useRef, React } from 'react'
import ProgressBar from '../ProgressBar'
import { ref, getDownloadURL } from 'firebase/storage'
import { projectStorage } from '../../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SnapEditor from './SnapEditor'
import Avatars from './Avatars'
import UploadIcon from '../../assets/icons/UploadIcon'

const AvatarChooser = ({ type }) => {
  const { currentUser } = useAuth()
  const [file, setFile] = useState(null)
  const [selected, setSelected] = useState('src/assets/avatars/normalavatar.png')
  const uploadType = 'profile'
  var editor = ''
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg: 'src/assets/avatars/normalavatar.png',
  })
  if (currentUser) {
    async function SetProfile() {
      try {
        const url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
        const img = document.getElementById('bigimg')
        img.setAttribute('src', url)
      } catch (error) {
        console.log('user has no profile pic ', error)
      }
    }
    SetProfile()
  }

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0])
    setSelected('')
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true,
    })
  }

  return (
    <div className=" z-0 mt-6 flex w-full flex-col   items-center  justify-center">
      <div className="flex h-full flex-col md:w-[95%] md:flex-row  xl:w-[90%] ">
        <div
          className={`${type === 'update' ? 'mt-8' : ''}
           mt-2 flex  w-full flex-col items-center  justify-center gap-2 `}>
          <p className=" mb-2 text-center  font-header text-2xl text-blue dark:text-peach">Choose from these avatars</p>
          <Avatars setFile={setFile} selected={selected} setSelected={setSelected} />

          <div className="mt-2 flex flex-col items-center justify-center gap-0">
            <p className=" mb-2 text-center font-header text-2xl text-blue">Or upload your own image</p>
            <motion.button
              className="uploadbutton flex h-14 w-40 items-center  justify-center  rounded-md bg-cream  font-header
                  text-blue hover:bg-blue hover:text-peach  md:h-14 "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <label
                htmlFor="files"
                className=" flex w-32 cursor-pointer items-center justify-center gap-1  text-center text-xl">
                Upload
                <UploadIcon width="48" height="48" className="icon-upload z-50 lg:w-auto" />
              </label>
              <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />
            </motion.button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center  justify-start ">
          <img
            id="bigimg"
            src={picture.croppedImg}
            className="mt-10  w-72 rounded-full  md:mt-6 md:w-72 xl:mt-0 xl:w-80 2xl:w-[425px]  "
          />
          <p className="mt-2 text-center font-header text-2xl text-blue md:text-2xl">Your chosen profile</p>
          <motion.button
            className="my-4 flex h-12 w-32 items-center  justify-center rounded-md bg-sand
             font-header text-xl text-blue hover:bg-blue hover:text-peach md:mt-4 md:mb-0  lg:w-32 xl:w-32 "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <Link className="flex h-full w-full items-center justify-center" to="/profile">
              I'm done
            </Link>
          </motion.button>
        </div>
      </div>
      {picture.cropperOpen && (
        <SnapEditor setFile={setFile} picture={picture} setPicture={setPicture} editor={editor} />
      )}
      <div className="items-around flex  w-full justify-between">
        <div className="ml-8 mt-2 h-4  w-1/2 ">
          {file && <ProgressBar file={file} setFile={setFile} uploadType={uploadType} />}
        </div>
      </div>
    </div>
  )
}

export default AvatarChooser
