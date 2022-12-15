import React from 'react'
import { projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const  MyImages = () => {
  

  // Get all the images from Storage
     const [files, setFiles] = useState();
     const { currentUser, logout } = useAuth()
 
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
 
   console.log(files);


  return (
    <div className=" h-[1000px] ">
        <div className="mx-20 flex justify-center items-center">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-3 mx-auto space-y-3 pb-28 mt-4 mx-4">

                { files && files.map(file => (
                 <motion.div className="break-inside-avoid" key={file.id}>
                <motion.img  src={file} className="hover:opacity-100 opacity-80 rounded-lg" loading="lazy" alt="huskypic"
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