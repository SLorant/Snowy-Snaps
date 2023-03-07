import React from 'react'
import LoginForm from './LoginForm'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-blue md:bg-cream dark:md:bg-darkblue ">
      <div
        className="mb-2 flex h-[480px] w-full flex-col items-center  justify-center rounded-xl
      bg-white bg-white dark:bg-blue  md:w-1/2 lg:w-1/3 2xl:w-1/4">
        <div className="z-0">
          <div className="mt-10 mb-4 rounded-md py-2 font-header text-5xl text-peach">Login</div>
        </div>

        <LoginForm />

        <div className="mt-8 mb-4 flex items-center justify-center ">
          <p className="mr-2 font-header text-lg text-blue dark:text-cream ">First time here?</p>
          <Link className="" to="/signup">
            <motion.p
              className="  cursor-pointer  font-header text-lg text-peach "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Sign up
            </motion.p>
          </Link>
        </div>

        <div className="mb-8  flex ">
          <p className="mr-1 font-header text-sm text-blue dark:text-cream ">If you forgot your password,</p>
          <Link className="" to="/forgotpassword">
            <motion.p
              className=" cursor-pointer  font-header text-sm text-peach"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              click here
            </motion.p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
