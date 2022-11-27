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

const ImgCrop = () => {
    const { currentUser } = useAuth()
    const [file, setFile] = useState(null);
    const [myblob, setMyblob] = useState(null);
    const [starturl, setStarturl] = useState(null);
   
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
    
    let url = URL.createObjectURL(e.target.files[0]);
    
    console.log(url);
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
          console.log(blob)
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
      


  return (
      <div className="flex w-full mt-8 flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-2/3">
          <img id="myimg" src={picture.croppedImg}
          className="rounded-full w-1/2"/>
          
          <motion.button  className="flex justify-center items-center text-white text-lg rounded-md bg-slate-700 font-hlight font-bold
         border-2  w-40 h-12  border-slate-400 mt-4 cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-40 flex justify-center items-center cursor-pointer w-40 h-16">Select Image</label>
          <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />
         </motion.button>
            
      
    {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>

        {picture.cropperOpen && (
          <div display="block">
            <AvatarEditor
              ref={setEditorRef}
              image={picture.img}
              borderRadius= {100}
              width={200}
              height={200}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              rotate={0}
              scale={picture.zoom}
            />
            <Slider
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            />
            <div>
              <button variant="contained" onClick={handleCancel}>
                Cancel
              </button>
              <button onClick={handleSave}>Save</button>
              
            </div>
          </div>
        )}
      </div>
  );
};

export default ImgCrop;