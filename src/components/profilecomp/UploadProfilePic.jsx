import React from 'react'
import UploadForm from '../watchpagecomp/UploadForm'
import ProgressBar from '../watchpagecomp/ProgressBar'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import AvatarEditor from 'react-avatar-editor'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getFirestore, collection, onSnapshot, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'

import AvatarChooser from './AvatarChooser'

const UploadProfilePic = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const db = getFirestore()
  //const docRef = doc(db, "users", "LUdJmSsMLQSVErWaJwPyKUlQaIv2");

  // Set the "capital" field of the city 'DC'
  /* onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
}) */

  async function handleSubmit(e) {
    try {
      setError('')
      setLoading(true)
      let docRef = doc(db, 'users', currentUser.uid)

      /* await updateDoc(docRef, {
       profilePic: "profilephotsassa"
    }); */

      //navigate('/')
    } catch {
      setError('Failed to update')
    }
    setLoading(false)
  }

  return (
    <div className="z-50 h-full w-full bg-cream ">
      <div className=" flex h-full w-full items-center justify-center bg-cream ">
        <div className=" flex h-full w-full flex-col rounded-xl bg-white md:mt-20 md:mb-24 md:h-3/4  md:w-4/5 md:justify-around xl:w-2/3  2xl:h-4/5 ">
          <div className="flex flex-col  items-center  justify-center ">
            <div className="mt-8 flex   w-full items-center justify-center">
              <p className="font-header  text-4xl text-peach ">Profile picture</p>
            </div>
            <AvatarChooser />
          </div>

          <div className="flex w-full flex-col items-center  justify-center  ">
            {error && (
              <div
                className="font-hlight text-red-700 bg-red-100 flex h-16 w-80 items-center justify-center
                rounded-md text-center text-lg font-bold">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadProfilePic

/* <form onSubmit={handleSubmit}>
        <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-40  border-stone-600 mt-8 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer "  disabled={loading}  type="submit" value="Upload picture"/></motion.button>
        </form> */
