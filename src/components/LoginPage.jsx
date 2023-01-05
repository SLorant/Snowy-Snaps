import React from 'react'
import { useLocation } from 'react-router-dom';
import Login from './signincomponents/Login'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-cream h-screen ">
      <div className="flex flex-col justify-center bg-white z-30 mt-8  items-center bg-white  rounded-xl w-1/3">
         <div className="z-0"><motion.div className="mt-8 mb-12 rounded-md text-peach font-header 
    px-4 py-2 px-32  text-4xl"
    initial={{ translateY: -25, opacity:0}}
    animate={{ translateY: 0, opacity:1, transition: { duration: 1 }}}>Log in</motion.div></div>

        <Login/>

        <div className="flex mt-12 mb-4 ">
          <p className="tracking-wider text-black font-hlight mr-2 text-lg ">Don't have an account?</p>
          <Link  className="" to="/signup"><motion.p  className="tracking-wider  cursor-pointer  
      text-slate-800 font-hlight font-bold text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 1 }}}>Sign up</motion.p></Link></div>
        
      </div>
     
      </div>
  )
}

export default SignInPage