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
import ImgCrop from './ImgCrop';

const UploadProfilePic = () => {
    const { currentUser, logout } = useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
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

/* if( useAuth().currentUser){
  getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
 .then((url) => {
    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
   console.log("user has no profile pic")
  });
 }  */

 /* const [ imgstate, setImgState] = useState({
  image: "src/assets/profile.png",
  allowZoomOut: false,
  position: { x: 0.5, y: 0.5 },
  scale: 1,
  rotate: 0,
  borderRadius: 50,
  preview: null,
  width: 200,
  height: 200
})

 const handleNewImage = (e) => {
  setImgState({ image: e.target.files[0] });
};

const handleScale = (e) => {
  const scale = parseFloat(e.target.value);
  setImgState({ scale });
};

const handlePositionChange = (position) => {
  setImgState({ position });
}; */



//<img className="rounded-full border-4 border-slate-700 object-cover" id="myimg" src="src\assets\profile.png" alt="" />
    
  return (
    <div >
        <div className="w-full h-screen bg-stone-100 flex justify-center items-center">
            <div className="w-1/2 h-3/4 mt-12  rounded-xl bg-white border-2 border-slate-600">
                <div className='flex flex-col justify-center items-center '>
                  <div className="w-full mt-6 h-14 bg-stone-200 flex justify-center items-center">
                    <p className="font-hbold  text-slate-800 text-3xl ">Upload your profile picture</p>
                    </div>
                    <ImgCrop />
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