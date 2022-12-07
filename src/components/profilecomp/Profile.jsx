import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import useFirestore from '../hooks/useFirestore'
//import { doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "../../../firebase/config";
import { useState } from 'react';

import {
  getFirestore, collection, onSnapshot, getDoc,
  addDoc, deleteDoc, doc, updateDoc
} from 'firebase/firestore'


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
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setUserName(data.username);
        console.log(data.username)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
})
  }
  /*const docRef = doc(users, "Mpf3SzpaOsMvkhWeUagv", "username");
const docSnap = getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}*/
console.log(username)
const db = getFirestore()

const docRef = doc(db, "users", "LUdJmSsMLQSVErWaJwPyKUlQaIv2");

// Set the "capital" field of the city 'DC'
onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})
async function handleSubmit(e) {
  e.preventDefault()

  try {
    setError('')
    setLoading(true)
    let docRef = doc(db, 'users', currentUser.uid)

    await updateDoc(docRef, {
       profilePic: "profilephoto"
    });
  

} catch {
   
    setError('Failed to update')
    
}
setLoading(false)

  

}

if (currentUser !== null) 
        console.log("user id: " + currentUser.uid);

 // if (currentUser.email === docs.map(doc) )
  return (
    <div className="h-screen flex justify-center bg-zinc-200 items-center w-full">
     <div className="flex w-5/6  shadow-lg rounded-lg bg-white h-5/6 mt-12  border-slate-700">

      <div className="flex flex-col w-full h-full items-center">
      <div className="mt-8 w-full h-14 flex justify-center items-center ">
        <p className="text-3xl text-slate-800 font-hbold">Hi, {username}</p>
        </div>

        <div className="my-12 flex flex-col justify-center items-center  bg-sky-100 w-full h-1/4">
          <p className="font-hbold text-xl text-stone-800">My Gallery</p>
          <div>
            <img className="w-40 h-40" src="src\assets\husky.jpg" alt="" />
          </div>
      
          </div>


          <motion.button className="text-stone-700 text-lg rounded-lg  font-hbold font-bold p-4
           w-48 h-16  border-stone-600 mt-4  shadow-[0px_3px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>My liked pics</motion.button>
          <motion.button className="text-stone-700 text-lg rounded-md  font-hbold font-bold p-4
           w-48 h-16  border-stone-600 mt-4  shadow-[0px_3px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Change my profile</motion.button>
          
         
     
        
        </div>
          
         
          
         
       
       
      
     </div>
     
    </div>
  )
}

export default Profile