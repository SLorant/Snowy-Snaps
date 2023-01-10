import React from 'react'
import UploadForm from '../watchpagecomp/UploadForm'
import ProgressBar from '../watchpagecomp/ProgressBar'
import { projectFirestore, projectStorage } from "../../../firebase/config";
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import AvatarEditor from 'react-avatar-editor'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import {
    getFirestore, collection, onSnapshot, getDoc,
    addDoc, deleteDoc, doc, updateDoc
  } from 'firebase/firestore'
  import {  ref, getDownloadURL } from "firebase/storage";

import AvatarChooser from './AvatarChooser';

const UploadProfilePic = () => {
    const { currentUser, logout } = useAuth()
    const [ error, setError] = useState('')
    
    const navigate =  useNavigate()
    
   

const db = getFirestore()
//const docRef = doc(db, "users", "LUdJmSsMLQSVErWaJwPyKUlQaIv2");

// Set the "capital" field of the city 'DC'
/* onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
}) */

async function handleSubmit(e) {
  e.preventDefault()

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
    <div >
        <div className="w-full h-screen bg-cream flex justify-center items-center">
            <div className="xl:w-2/3 md:w-4/5 w-full h-full md:h-3/4 lg:h-4/5   rounded-xl bg-white ">
                <div className='flex flex-col  justify-center  items-center '>
                  <div className="w-full mt-8   flex justify-center items-center">
                    <p className="font-header  text-peach text-3xl ">Profile picture</p>
                    </div>
                    <AvatarChooser />
                </div>

                <div className="flex flex-col justify-center items-center  w-full  ">
                {error && <div className="w-80 h-16 font-hlight flex justify-center text-red-700 bg-red-100 font-bold
                items-center rounded-md text-lg text-center">
                {error}
                </div>}
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