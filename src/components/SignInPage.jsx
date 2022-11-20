import React from 'react'
import { useLocation } from 'react-router-dom';
import SignUp from './signincomponents/SignUp'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="bg-stone-300 absolute hidden left-1/3 w-1/2 h-[82px] z-20"></div>
      <div className="flex flex-col justify-center bg-white z-30 items-center mt-28 border-2 rounded-xl border-stone-500  w-1/3">
         <div className="z-0"><motion.button  className="mt-8 mb-6 rounded-md tracking-wider
          border-2 border-slate-700 border-dashed  shadow-lg bg-white cursor-default
    px-4 py-2 px-32 text-slate-800 font-hlight font-bold text-4xl"
    initial={{ translateX: 25, opacity:0}}
    animate={{ translateX: 0, opacity:1, transition: { duration: 1 }}}>Sign up</motion.button></div>

        <SignUp/>

        <div className="flex mt-12 mb-4 ">
          <p className="tracking-wider text-black font-hlight mr-2 text-lg ">Already have an account?</p>
          <Link  className="" to="/login"><motion.p  className="tracking-wider  cursor-pointer  
      text-slate-800 font-hlight font-bold text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 1 }}}>Log in</motion.p></Link></div>
        
      </div>
     
      </div>
  )
}

export default SignInPage