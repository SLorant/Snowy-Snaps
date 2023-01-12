import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import {doc, getDoc} from "firebase/firestore"
import { useState } from 'react';
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from "../../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from 'react-router-dom';
import ShowcaseImg from './ShowcaseImg';
import LargeButton from '../homepagecomp/LargeButton';


const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [ username, setUserName ] = useState("")
  const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)

  
  const likedImages = [
    {id: "myimg6"}, {id: "myimg7"}, {id: "myimg8"}, {id: "myimg9"}, {id: "myimg10"}
  ]

  if(useAuth().currentUser){
    const docRef = doc(projectFirestore, "users", currentUser.uid);
    const docSnap = getDoc(docRef).then(docSnap => {
    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setUserName(data.username);
        //console.log(data.username)
    } else {
        // doc.data() will be undefined in this case
        //console.log("No such document!");
}
})

  }

  
  
  //console.log(storageRef.listAll())
  // Now we get the references of these images
  

  



  /* if( useAuth().currentUser){
    getDownloadURL(ref(projectStorage, `${currentUser.uid}/uploadedpics/image`))
   .then((url) => {
      // Or inserted into an <img> element
      const img = document.getElementById('myimg2');
      img.setAttribute('src', url);
      //console.log(url)
    })
    .catch((error) => {
     console.log("user has no profile pic")
    });
   }  */

   const navigate = useNavigate()

   async function handleNavigate() {
    setError('')

    try{
      
      navigate('/my-gallery')
    } catch {
      setError('Failed to go to my gallery')
    }}

    async function handleNavigate2() {
      setError('')
  
      try{
        
        navigate('/liked-gallery')
      } catch {
        setError('Failed to go to my gallery')
      }}

   async function handleLogout() {
     setError('')
 
     try{
       await logout()
       navigate('/login')
     } catch {
       setError('Failed to log out')
     }}


 // if (currentUser.email === docs.map(doc) )
  return (
    <div className="h-screen flex justify-center bg-cream  items-center w-full">
     <div className="flex w-5/6 flex-col    rounded-lg  h-5/6 mt-8">

      
      <div className="mt-4 w-full h-14 flex justify-center items-center ">
        <p className="text-4xl mb-4 text-blue font-header">Hi, {username}</p>
        </div>

        <motion.div className="mt-4  w-1/3 items-center   rounded-lg flex flex-col justify-center"
        
      
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1, transition: {duration: 0.5, delay: 0.2}}}>
          <p className="my-2 ml-4  font-headersc text-darkblue text-2xl ">Go to my gallery</p>
          <div className='flex ml-12  mt-6 mb-20 items-center justify-start w-full  '>
          {/*   {myImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))} */}
            <ShowcaseImg onClick={handleNavigate}/>
          </div>
      
          </motion.div>

          <motion.div className="cursor-pointer mt-4 bg-sand   rounded-lg flex flex-col justify-center   h-1/6 w-40"
           onClick={handleNavigate2}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 }}}
          initial = {{ opacity: 0}}
          animate = {{ opacity: 1, transition: {duration: 0.5, delay:0.2}}}
          >
          <p className="my-2 ml-4  font-headersc text-darkblue text-2xl ">Go to liked pics</p>
          <div className='flex mr-8 mb-4 gap-12 items-center justify-center w-full  '>
           {/*  {likedImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))} */}
          </div>
      
          </motion.div>

          <div className="mt-4  flex justify-between   w-5/6">
          
          <div className='ml-2 mt-2'>
          <LargeButton title={"Change my profile"}/>
          </div> 
          <div onClick={handleLogout} className='mr-2 mt-2'>
          <LargeButton  title={"Log out"}/>
          </div>
          </div>
         
     
        
        </div>
          
         
          
         
       
       
      
  
     
    </div>
  )
}

export default Profile