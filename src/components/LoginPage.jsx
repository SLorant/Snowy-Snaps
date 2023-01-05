import React from 'react'
import { useLocation } from 'react-router-dom';
import Login from './signincomponents/Login'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-cream h-screen ">
      <div className="flex flex-col justify-center bg-white mb-2  items-center bg-white  rounded-xl w-1/3 2xl:w-1/4">
         <div className="z-0"><motion.div className="mt-8 mb-6 rounded-md text-peach font-header 
     py-2   text-4xl"
    initial={{ translateY: -25, opacity:0}}
    animate={{ translateY: 0, opacity:1, transition: { duration: 1 }}}>Login</motion.div></div>

        <Login/>

        <div className="flex mt-8 items-center justify-center mb-2 ">
          <p className="text-blue font-header mr-2   text-md ">Need an account?</p>
          <Link  className="" to="/signup"><motion.p  className="  cursor-pointer  text-peach font-header text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Sign up</motion.p></Link></div>
        
      </div>
     
      </div>
  )
}

export default SignInPage