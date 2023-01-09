import { useState, useRef, React } from "react";
import ProgressBar from '../watchpagecomp/ProgressBar';
import {  ref, getDownloadURL } from "firebase/storage";
import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom';
import ImageEditor from './ImageEditor';
import LargeButton from "../homepagecomp/LargeButton";


const ImgCrop = ({type}) => {
    const { currentUser } = useAuth()
    const [file, setFile] = useState(null);
    const [selected, setSelected] = useState(null)

    const navigate =  useNavigate()
    
    const uploadType = "profile";
    var editor = "";
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg: "src/assets/avatars/normalavatar.png"     
    });
//https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png

if( useAuth().currentUser){
  async function SetProfile() {
    try {
      const url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
      const img = document.getElementById('bigimg')
      img.setAttribute('src', url)
    } catch(error) {
      console.log("user has no profile pic ", error)
    }
  }
  type === "update" ? SetProfile() : ""
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

const handleOnClick = (avatar) => {
  setSelected(avatar)
  avatar === "normal" ? 
  setPicture({
    ...picture,
    croppedImg: "src/assets/avatars/normalavatar.png"
  }) : 
  avatar === "sung" ? 
  setPicture({
    ...picture,
    croppedImg: "src/assets/avatars/sunglassesavatar.png"
  }) :
  avatar === "puppy" ?
  setPicture({
    ...picture,
    croppedImg: "src/assets/avatars/puppyavatar.png"
  })
  : setPicture({
    ...picture,
    croppedImg: "src/assets/avatars/sillyavatar.png"
  })
  
}


  return (
      <div className={`${ type ==="update" ? "mt-6 mb-6" : "mt-10"} flex w-full justify-center items-center   flex-col  z-0`}>
        <div className="flex w-[90%] h-full ">
          <div className="w-full flex flex-col items-center justify-start ">
          <img id="bigimg" src={picture.croppedImg}
          className={`${ type ==="update" ? "w-7/12" : "w-7/12  md:w-1/2 lg:w-5/12 2xl:w-4/5"} rounded-full  `}/>
          <p className="mt-2 font-header text-lg text-center text-blue">Your chosen profile</p>
          </div>

          <div className={`${ type ==="update" ? "mt-8" : ""}
           flex flex-col  items-center justify-center gap-2   w-full `}>
             <p className=" font-header  text-lg text-center text-blue mb-2">Choose from these avatars</p>
            <div className="grid  grid-cols-2 gap-4 mb-4">
              <img className={`${selected === "normal" ? "opacity-100  " : "opacity-50"} w-32 cursor-pointer rounded-full`}
               onClick={() => handleOnClick("normal")} src="src/assets/avatars/normalavatar.png" alt="" />

              <img className={`${selected === "silly" ? "opacity-100" : "opacity-50"} w-32 cursor-pointer rounded-full`}
               onClick={() => handleOnClick("silly")} src="src/assets/avatars/sillyavatar.png" alt="" />

              <img className={`${selected === "puppy" ? "opacity-100" : "opacity-50"} w-32 cursor-pointer rounded-full`}
               onClick={() => handleOnClick("puppy")} src="src/assets/avatars/puppyavatar.png" alt="" />

              <img className={`${selected === "sung" ? "opacity-100" : "opacity-50"} w-32 cursor-pointer rounded-full`}
               onClick={() => handleOnClick("sung")} src="src/assets/avatars/sunglassesavatar.png" alt="" />
            </div>

        <div className="flex flex-col justify-center items-center gap-0">
          <p className=" font-header text-lg text-center text-blue mb-2">Or upload your own image</p>
        {/*   <motion.button  className="text-lg flex justify-center  items-center bg-sand w-32 xl:w-40  h-10 text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <label htmlFor="files" className=" w-40 flex justify-center items-center cursor-pointer w-40 ">Upload</label>
          <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />
         </motion.button> */}

         <motion.button  className="uploadbutton flex justify-center items-center bg-cream  w-32  h-16 lg:h-12  text-blue
    hover:bg-blue hover:text-peach font-headersc  rounded-md "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 },  }}>
          <label htmlFor="files" className=" w-32 gap-1 flex text-lg text-center justify-center items-center cursor-pointer">Upload
          <svg xmlns="http://www.w3.org/2000/svg" className=" z-50  lg:w-auto icon  icon-tabler icon-tabler-file-upload" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2D4550" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <polyline points="9 14 12 11 15 14" />
</svg></label>
        <input className="hidden" id="files" type="file" accept="image/*" onChange={handleFileChange} />
        
         </motion.button>
       

        
          </div>
          </div>

          
      
    {file && <ProgressBar file={file} setFile={setFile} uploadType={uploadType} />}

        </div>
        {picture.cropperOpen && <ImageEditor picture={picture} setPicture={setPicture} editor={editor} setFile={setFile}  />}

        <Link  className={`${ type ==="update" ? "hidden" : "block"}`} to="/profile">
        <motion.button  className="text-lg flex justify-center items-center bg-sand mt-6 w-24 md:w-28 lg:w-32 xl:w-32 h-10   text-blue
                hover:bg-blue hover:text-peach font-header rounded-md "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>I'm done</motion.button></Link>
      </div>
  );
};

export default ImgCrop;