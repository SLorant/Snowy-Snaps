import React from 'react'
import { useLocation } from 'react-router-dom'
import SignUp from './signincomponents/SignUp'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ChooseButtons from './signincomponents/ChooseButtons'

const SignInPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white md:bg-cream ">
      <div className="flex w-full flex-col items-center  justify-center  rounded-xl bg-white  md:w-1/2 lg:w-1/3 2xl:w-1/4">
        <div className="z-0">
          <div className="mt-8 mb-6 rounded-md py-2 font-header text-5xl text-peach">Signup</div>
        </div>

        <SignUp />

        <div className="mt-6 mb-8 flex items-center justify-center">
          <p className="text-md mr-2 mt-[3px] font-header text-lg   text-blue  ">
            Already have an account?
          </p>
          <Link className="" to="/login">
            <motion.p
              className="cursor-pointer  font-header text-lg text-peach "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Log in
            </motion.p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
