import React from 'react'
import { useLocation } from 'react-router-dom';
import SignUp from './signincomponents/SignUp'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-cream h-screen ">
      <div className="flex flex-col justify-center bg-white  mt-8  items-center  rounded-xl w-1/3">
      <div className="z-0"><motion.div className="mt-8 mb-6 rounded-md text-peach font-header 
     py-2   text-4xl"
    initial={{ translateY: -25, opacity:0}}
    animate={{ translateY: 0, opacity:1, transition: { duration: 1 }}}>Signup</motion.div></div>

        <SignUp/>


        <div className="flex mt-8 mb-4 ">
          <p className="tracking-wider text-black font-hlight mr-2 text-lg ">Already have an account?</p>
          <Link  className="" to="/login"><motion.p  className="tracking-wider  cursor-pointer  
      text-slate-800 font-hlight font-bold text-xl "
    whileHover={{ scale: 1.1, transition: { duration: 1 }}}>Log in</motion.p></Link></div>

        <div className="flex  mb-8 ">
          <p className="tracking-wider text-black font-hlight mr-2 text-sm ">If you forgot your password,</p>
          <Link  className="" to="/forgot-password"><motion.p  className="tracking-wider  cursor-pointer  
      text-slate-800 font-hlight font-bold text-sm "
    whileHover={{ scale: 1.1, transition: { duration: 1 }}}> click here</motion.p></Link></div>

        


        
      </div>
     
      </div>
  )
}

export default SignInPage