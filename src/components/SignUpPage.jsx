import React from 'react'
import { useLocation } from 'react-router-dom';
import SignUp from './signincomponents/SignUp'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-white md:bg-cream h-screen ">
      <div className="flex flex-col justify-center bg-white  items-center  rounded-xl w-full  md:w-1/2 lg:w-1/3 2xl:w-1/4">
      <div className="z-0">
        <div className="mt-8 mb-6 rounded-md text-peach font-header py-2 text-4xl">Signup</div>
          </div>

        <SignUp/>


        <div className="flex mt-6 mb-8 justify-center items-center">
          <p className="text-blue font-header mr-2 mt-[3px]   text-md  ">Already have an account?</p>
          <Link  className="" to="/login"><motion.p  className="cursor-pointer  text-peach font-header text-lg "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Log in</motion.p></Link></div>

        

        


        
      </div>
     
      </div>
  )
}

export default SignInPage