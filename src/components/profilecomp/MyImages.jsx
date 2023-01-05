import React from 'react'
import { projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const  MyImages = ({ setSelectedImg }) => {
  

  // Get all the images from Storage
     const [files, setFiles] = useState();
     const { currentUser, logout } = useAuth()
     const navigate = useNavigate()
     const [error, setError] = useState(null);
 if (currentUser) {
  useEffect(() => {
    const fetchImages = async () => {
      let result = await projectStorage.ref().child(`${currentUser.uid}/uploadedpics`).listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
}, []);

 }

 
   //console.log(files);
   async function handleNavigate(){
    try{
      navigate("/profile")
    }
    catch{
      setError("Couldn't load page")
    }
   }


  return (
    <div className=" h-full ">
        <div className="mt-20 mx-20 flex flex-col justify-center items-center">
          <div className="flex justify-between w-full">
            <h1 className="ml-7 my-4 text-4xl text-slate-800 font-hbold">My gallery</h1>
            <motion.p onClick={handleNavigate} className="text-slate-800 text-lg font-hbold  mt-7 h-6 cursor-pointer"
             whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Back to profile</motion.p>
          </div>
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 mx-auto space-y-3 pb-28 mt-4 mx-4">

                { files && files.map(file => (
                 <motion.div className="break-inside-avoid" key={file}
                 layout
                 onClick={() => {setSelectedImg(file)}}>
                <motion.img  src={file} className="object-cover w-full h-full hover:opacity-100 opacity-80 rounded-lg" loading="lazy" alt="huskypic"
                    initial = {{ opacity: 0}}
                    animate = {{ opacity: 1}}
                    transition = {{ delay: 1}} />
                </motion.div>))}

            </div>
            </div>
        </div>
  )
}

export default MyImages