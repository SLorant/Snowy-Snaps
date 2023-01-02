import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import ImageEditor from '../profilecomp/ImageEditor';
import { FileUploader } from "react-drag-drop-files";


const UploadForm = ({ file, setFile, onImageUpload}) => {
    
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const isGallery = true;
    const uploadType = "gallery";
    var editor = "";
   
    const [emotion, setEmotion] = useState('')
    const [emotion2, setEmotion2] = useState('')
    const [emotion3, setEmotion3] = useState('')
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
    <div className=" w-1/4  rounded-r-md  mb-4 flex  justify-start  items-start">

    <div className="w-full w-3/4 ml-8 mt-3 flex flex-col justify-start items-center">

   <h2 className="text-xl text-center  xl:text-2xl text-blue font-header ">Post your own husky!</h2>
   <div className="flex justify-center items-center">
    <motion.button  className="uploadbutton flex justify-center items-center bg-cream  w-52  h-12  text-blue
    hover:bg-blue hover:text-peach font-headersc  rounded-md "
         whileHover={{ translateY: 10, transition: { duration: 0.2 },  scale: 1.1}}>
          <label htmlFor="files" className=" w-52 flex text-lg text-center justify-center items-center cursor-pointer">Upload image</label>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-4 icon-tabler icon-tabler-file-upload" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2D4550" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <polyline points="9 14 12 11 15 14" />
</svg>
          <input className="hidden" id="files" type="file"  onChange={handleFileChange} />
         </motion.button>
       

         </div>
         
         {error && <div className="text-md text-red-400 font-hlight"> {error}</div>}
         
         </div>
         
        
        <div>
            
            {file && <div className=""> {file.name}</div>}
            {file && <ProgressBar  onImageUpload={onImageUpload}
             file={file} emotion={emotion} emotion2={emotion2} emotion3={emotion3} setFile={setFile} uploadType={uploadType} gif={gif}/>}
            {picture.cropperOpen && <ImageEditor picture={picture} setPicture={setPicture} editor={editor} setFile={setFile}
             isGallery={isGallery} setEmotion={setEmotion} setEmotion2={setEmotion2} setEmotion3={setEmotion3}
               emotion={emotion} emotion2={emotion2} emotion3={emotion3} />}
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