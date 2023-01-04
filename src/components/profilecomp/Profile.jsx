import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import {doc, getDoc} from "firebase/firestore"
import { useState } from 'react';
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from "../../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import ShowcaseImg from './ShowcaseImg';


const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [ username, setUserName ] = useState("")
  const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)

  const myImages = [
    {id: "myimg1"}, {id: "myimg2"}, {id: "myimg3"}, {id: "myimg4"}, {id: "myimg5"}
    ]
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
  var storageRef = projectStorage.ref(currentUser.uid + "/uploadedpics");
  
  
  //console.log(storageRef.listAll())
  // Now we get the references of these images
  storageRef.listAll().then(function(result) {
    let i=1;
    let img = "";
    result.items.forEach(function(imageRef) {
      
      img = document.getElementById('myimg' + i);
      displayImage(imageRef, img);
      i++;
      //console.log(img)
      // And finally display them
      
    });
  }).catch(function(error) {
    // Handle any errors
  });

  function displayImage(imageRef, img) {
    imageRef.getDownloadURL().then(function(url) {
      img.setAttribute('src', url);
    }).catch(function(error) {
      // Handle any errors
    });
  }



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
     <div className="flex w-5/6 flex-col items-center   rounded-lg  h-5/6 mt-8">

      
      <div className="mt-4 w-full h-14 flex justify-center items-center ">
        <p className="text-4xl mb-4 text-blue font-header">Hi, {username}</p>
        </div>

        <motion.div className="cursor-pointer mt-4 bg-sand   rounded-lg flex flex-col justify-center   h-1/2"
        onClick={handleNavigate}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 }}}
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1, transition: {duration: 0.5, delay: 0.2}}}>
          <p className="my-2 ml-4  font-headersc text-darkblue text-2xl ">Go to my gallery</p>
          <div className='flex mr-8 mb-4 gap-12 items-center justify-center w-full  '>
            {myImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))}
          </div>
      
          </motion.div>

          <motion.div className="cursor-pointer mt-4 bg-sand   rounded-lg flex flex-col justify-center   h-1/2"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 }}}
          initial = {{ opacity: 0}}
          animate = {{ opacity: 1, transition: {duration: 0.5, delay:0.2}}}
          >
          <p className="my-2 ml-4  font-headersc text-darkblue text-2xl ">Go to liked pics</p>
          <div className='flex mr-8 mb-4 gap-12 items-center justify-center w-full  '>
            {likedImages.map( image => ( <ShowcaseImg key={image.id} id={image.id}/>))}
          </div>
      
          </motion.div>

          <div className="mt-6  flex justify-between  w-full">
          <a className="h-6 my-4" href="upload-profile">
          <motion.button  className="text-blue text-xl  font-header "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Change my profile</motion.button></a>

         <motion.button className="text-blue text-xl  font-header"
         onClick={handleLogout}
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Log out</motion.button>
          </div>
         
     
        
        </div>
          
         
          
         
       
       
      
  
     
    </div>
  )
}

export default Profile