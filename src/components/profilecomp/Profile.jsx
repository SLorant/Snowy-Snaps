import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import {doc, getDoc} from "firebase/firestore"
import { useState } from 'react';
import useFirestore from '../hooks/useFirestore'
import { projectFirestore, projectStorage } from "../../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const { currentUser, logout } = useAuth()
  //const { users } = useFirestore('users');
  //db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  const [ username, setUserName ] = useState("")
  const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)


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
  let i=1;
  let img = "";
  //console.log(storageRef.listAll())
  // Now we get the references of these images
  storageRef.listAll().then(function(result) {
    
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
    <div className="h-screen flex justify-center  items-center w-full">
     <div className="flex w-5/6   rounded-lg  h-5/6 mt-8  border-slate-700">

      <div className="flex flex-col  w-full h-full items-center">
      <div className="mt-6 w-full h-14 flex justify-center items-center ">
        <p className="text-4xl text-slate-800 font-hbold">Hi, {username}</p>
        </div>

        <motion.div className="cursor-pointer mt-4 shadow-lg rounded-lg flex flex-col justify-center   h-1/2"
        onClick={handleNavigate}
        whileHover={{ translateX: 30, transition: { duration: 0.2 }}}
          initial = {{ opacity: 0}}
          animate = {{ opacity: 1, transition: {duration: 0.5, delay: 0.2}}}>
          <p className="my-2 ml-4  font-hbold text-2xl text-stone-800">Go to my gallery</p>
          <div className='flex mr-8  gap-12 items-center justify-center w-full  '>
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg1" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg2" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg3" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg4" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg5" />
          </div>
      
          </motion.div>

          <motion.div className="cursor-pointer mt-4 shadow-lg rounded-lg flex flex-col justify-center   h-1/2"
          whileHover={{ translateX: 30, transition: { duration: 0.2 }}}
          initial = {{ opacity: 0}}
          animate = {{ opacity: 1, transition: {duration: 0.5, delay:0.2}}}
          >
          <p className="my-2 ml-4 font-hbold text-2xl text-stone-800">Go to liked pics</p>
          <div className='flex mr-8 gap-12 w-full items-center justify-center'>
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg6" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg7" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg8" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg9" />
            <img className="w-40 h-40 rounded-md gradient-mask-b-60 object-center object-cover" src="src\assets\profile.png" alt="pic" id="myimg10" />
          </div>
      
          </motion.div>

          <div className="mt-8 flex justify-between  w-full">
          <a className="h-6 my-4" href="upload-profile"><motion.button  className="text-stone-800 text-xl rounded-lg  font-hbold font-bold "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Change my profile</motion.button></a>

         <motion.button className="text-stone-800 text-xl rounded-lg  font-hbold font-bold my-4"
         onClick={handleLogout}
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Log out</motion.button>
          </div>
         
     
        
        </div>
          
         
          
         
       
       
      
     </div>
     
    </div>
  )
}

export default Profile