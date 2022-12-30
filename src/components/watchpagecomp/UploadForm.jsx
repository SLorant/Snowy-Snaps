import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import ImageEditor from '../profilecomp/ImageEditor';
import { FileUploader } from "react-drag-drop-files";


const UploadForm = ({setUploaded, file, setFile, onImageUpload}) => {
    
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const isGallery = true;
    const uploadType = "gallery";
    var editor = "";
   
    const [emotion, setEmotion] = useState('')
    const [gif, setGif] = useState(false)
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg: "src/assets/profile.png"     
    });

    
  const handleFileChange = (e) => {
    
    console.log("first url:" + picture.img)
    let selected = e.target.files[0];
    if(selected && selected.type==="image/gif") {
      setFile(selected)
      setGif(true)}
    let url = URL.createObjectURL(e.target.files[0]);
    if(selected && types.includes(selected.type)) {
      setGif(false)
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
          });
        setError("");
    } else if(selected.type==="image/gif") {
        setError('Uploaded gif successfully')
    }
    else {
      setError("Please select an image file (png, jpg, gif)")
    }

     
    
};
  return (
    <div className=" w-1/3 mb-4 flex justify-center items-center border-dashed border-slate-800">
    <div className="w-full ml-0 2xl:ml-8 flex flex-col justify-center items-center">
   <p className="text-xl font-hlight text-slate-800">Post your own husky!</p>
    <motion.button  className="flex justify-center items-center mt-2 w-40 h-10 bg-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white font-hbold  rounded-lg "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-40 flex font-hbold text-base text-center justify-center items-center cursor-pointer h-10">Upload image</label>
          <input className="hidden" id="files" type="file"  onChange={handleFileChange} />
         </motion.button>
         {error && <div className="text-md text-red-400 font-hlight"> {error}</div>}
         
         </div>
        
        <div>
            
            {file && <div className=""> {file.name}</div>}
            {file && <ProgressBar  onImageUpload={onImageUpload} file={file} emotion={emotion} setFile={setFile} uploadType={uploadType} gif={gif}/>}
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