//import {  Slider } from "@material-ui";
import Slider from '@mui/material/Slider';
import { useState, useRef, React } from "react";
import AvatarEditor from "react-avatar-editor";
import ReactSlider from "react-slider";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import { projectFirestore, projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const ImgCrop = () => {
    const { currentUser } = useAuth()
    const [file, setFile] = useState(null);
    const [myblob, setMyblob] = useState(null);
    const [starturl, setStarturl] = useState(null);
    const navigate =  useNavigate()

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
 
  

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleFileChange = (e) => {
    console.log("first url:" + picture.img)
    
     let url = URL.createObjectURL(e.target.files[0]);
     
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
};

    
   
  
    //const handleSave = (e) => {
    async function handleSave(e) {
        if (setEditorRef) {
          const canvasScaled = editor.getImageScaledToCanvas();
          const croppedImg = canvasScaled.toDataURL();
          //const url = canvasScaled.createObjectURL();
          //let url = URL.createObjectURL(croppedImg);
          function dataURItoBlob(dataURI) {
            var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
               array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {type: mime});
          }
          var objecturl = URL.createObjectURL(dataURItoBlob(croppedImg));
        
          
          
          
          /* fetch(croppedImg)
            .then(res => res.blob())
            .then(
                (blob) => {
                  console.log(blob)
                    setMyblob(blob)}) */
        let blob = await fetch(objecturl).then(r => r.blob());
        
          var file = new File([blob], "my_image.png",{type:"image/png", lastModified:new Date().getTime()})
          let selected = file
          setFile(selected);
          setPicture({
            ...picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg
          });
          //setFile(canvasScaled.toDataURL());
        }
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
      
    {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>

        {picture.cropperOpen && (
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/70 z-30">
            <div className='w-1/3 h-3/4 rounded-xl bg-white flex justify-center items-center'>
              <div className="w-80 flex flex-col justify-center items-center">
            <AvatarEditor
              className="mt-8 mb-8 z-50 rounded-xl"
              ref={setEditorRef}
              image={picture.img}
              borderRadius= {100}
              width={200}
              height={200}
              border={100}
              color={[255, 255, 255, 0.6]} // RGBA
              rotate={0}
              scale={picture.zoom}
            />
            <Slider 
              className="w-40"
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            />
            
            <div className="flex gap-8 mb-8">
            <motion.button onClick={handleCancel} className="flex justify-center items-center text-white text-lg rounded-md bg-zinc-700 font-hlight font-bold
         border-2  w-40 h-12  border-slate-400 mt-12 cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Cancel</motion.button>
              <motion.button onClick={handleSave} className="flex justify-center items-center text-white text-lg rounded-md bg-green-700 font-hlight font-bold
         border-2  w-40 h-12  border-slate-400 mt-12 cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Save</motion.button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default ImgCrop;