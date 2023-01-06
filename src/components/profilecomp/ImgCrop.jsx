import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom';
import ImageEditor from './ImageEditor';
import LargeButton from "../homepagecomp/LargeButton";


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
  async function SetProfile() {
    try {
      url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
      const img = document.getElementById('myimg')
      img.setAttribute('src', url)
    } catch {
      console.log("user has no profile pic")
    }
  }
  //SetProfile()
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
/* getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
   .then((url) => {
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
     console.log("user has no profile pic")
    });
  }*/ 
      function handleNavigate(e) {
        navigate('/')
      }

  return (
      <div className="flex w-full mt-10 flex-col  justify-center items-center z-0">
        <div className="flex flex-col justify-center items-center w-full">
          <img id="myimg" src={picture.croppedImg}
          className="rounded-full w-5/12 shadow-md border-slate-700"/>
          <div className="flex items-center justify-center gap-40  mt-12 w-full">
         <Link  className="" to="/profile"><motion.p  className="  cursor-pointer  text-blue font-header text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Later</motion.p></Link>

          <motion.button  className="text-lg flex justify-center items-center bg-sand w-24 md:w-28 lg:w-32 xl:w-40  h-10 md:h-12  text-blue
                hover:bg-blue hover:text-sand font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-40 flex justify-center items-center cursor-pointer w-40 ">Select image</label>
          <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />

     {/*      <motion.button className="text-lg flex justify-center items-center mt-4  bg-sand w-24 md:w-28 lg:w-32 xl:w-32  h-10 md:h-12  text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer  " disabled={loading}  type="submit" value="Sign in"/></motion.button> */}

         </motion.button>

         <Link  className="" to="/profile"><motion.p  className="  cursor-pointer  text-peach font-header text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>I'm done</motion.p></Link>
          </div>
      
    {file && <ProgressBar file={file} setFile={setFile} uploadType={uploadType} />}
        </div>
        {picture.cropperOpen && <ImageEditor picture={picture} setPicture={setPicture} editor={editor} setFile={setFile}  />}
      </div>
  );
};

export default ImgCrop;