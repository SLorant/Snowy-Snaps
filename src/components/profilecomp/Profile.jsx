import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'


const Profile = () => {
  const { currentUser, logout } = useAuth()
  return (
    <div className="h-screen flex justify-center bg-zinc-200 items-center w-full">
     <div className="flex w-5/6 shadow-lg rounded-lg bg-white h-5/6 mt-12  border-slate-700">
      <div className="h-full w-60 rounded-l-lg bg-red-400">

      </div>
      <div className="flex flex-col  items-center h-full w-full ">
        <p className="text-3xl text-slate-800 mt-4 font-hbold">Hi, {currentUser.email}</p>
        <div className="flex  justify-between items-center mt-12 w-full h-full">
          <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold p-4
         border-2  w-40  border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>My uploaded pics</motion.button>
          <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-40  border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>My liked pics</motion.button>
          <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-40  border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Change my profile</motion.button>
          <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-40 h-20  border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Saved facts</motion.button>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Profile