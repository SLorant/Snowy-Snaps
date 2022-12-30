import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import ImageEditor from './ImageEditor';

const ImgCrop = () => {
    const { currentUser } = useAuth()
    const [file, setFile] = useState(null);
    const navigate =  useNavigate()
    
    const uploadType = "profile";
    var editor = "";
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg: "src/assets/profile.png"     
    });
//https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png

if( useAuth().currentUser){
    getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
   .then((url) => {
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
     console.log("user has no profile pic")
    });
   } 

  const handleFileChange = (e) => {
    console.log("first url:" + picture.img)
    
     let url = URL.createObjectURL(e.target.files[0]);
     
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
};

      function handleNavigate(e) {
        navigate('/')
      }

  return (
      <div className="flex w-full mt-10 flex-col justify-center items-center z-0">
        <div className="flex flex-col justify-center items-center w-full">
          <img id="myimg" src={picture.croppedImg}
          className="rounded-full w-5/12 shadow-md border-slate-700"/>
          <div className="flex items-center justify-center gap-40  mt-12 w-full">
          <motion.button onClick={handleNavigate}   className="text-slate-800 text-xl rounded-md 
          font-hlight font-bold "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Later</motion.button>

          <motion.button  className="flex justify-center items-center text-white text-lg rounded-md bg-slate-700 font-hlight font-bold
         border-2  w-40 h-12 ml-4  border-slate-400  cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-40 flex justify-center items-center cursor-pointer w-40 h-16">Select image</label>
          <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />
         </motion.button>

         <motion.button onClick={handleNavigate}   className="text-slate-800 text-xl rounded-md 
          font-hlight font-bold"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>I'm done</motion.button>
          </div>
      
    {file && <ProgressBar file={file} setFile={setFile} uploadType={uploadType} />}
        </div>
        {picture.cropperOpen && <ImageEditor picture={picture} setPicture={setPicture} editor={editor} setFile={setFile}  />}
      </div>
  );
};

export default ImgCrop;