import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import ImageEditor from '../profilecomp/ImageEditor';
import { FileUploader } from "react-drag-drop-files";


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const isGallery = true;
    const uploadType = "gallery";
    var editor = "";
    const [emotion, setEmotion] = useState('')
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg: "src/assets/profile.png"     
    });

    
  const handleFileChange = (e) => {
    console.log("first url:" + picture.img)
    let selected = e.target.files[0];
    let url = URL.createObjectURL(e.target.files[0]);
    if(selected && types.includes(selected.type)) {
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
          });
        setError("");
    } else {
        setError('Please select an image file (png or jpeg)')
    }

     
    
};
  return (
    <div className=" w-5/12 ">
    <div className="w-full flex flex-col justify-around items-center">
   <p className="text-xl font-hlight text-slate-800">You can post your own Husky here</p>
    <motion.button  className="w-32 h-14 bg-slate-700 text-white font-hbold text-center flex justify-center items-center rounded-lg mt-4"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-32 flex text-center justify-center items-center cursor-pointer h-20">Upload image</label>
          <input className="hidden" id="files" type="file"  onChange={handleFileChange} />
         </motion.button>
         
         </div>
        
        <div>
            {error && <div className=""> {error}</div>}
            {file && <div className=""> {file.name}</div>}
            {file && <ProgressBar file={file} emotion={emotion} setFile={setFile} uploadType={uploadType}/>}
            {picture.cropperOpen && <ImageEditor picture={picture} setPicture={setPicture} editor={editor} setFile={setFile}
             isGallery={isGallery} setEmotion={setEmotion}  />}
        </div>
   

    <button className=" right-10 bottom-10 w-24 h-24 rounded-full bg-slate-700 fixed shadow-[2px_5px_1px_1px_rgba(0,0,0,0.7)]">
        <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="68" height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
        </div>

    </button>
    </div>
  )
}

export default UploadForm