import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../../contexts/AuthContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const { currentUser, resetPassword, logout } = useAuth()
  const [message, setMessage] = useState('We sent you an email with a link where you can reset your password.')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate('/')
    } catch {
      setError('Failed to log out')
    }
  }
  async function handleResetPassword() {
    try {
      setError('')
      await resetPassword(currentUser.email)
      alert(message)
    } catch {
      setError('Something failed. Try again?')
    }
  }

  return (
    <motion.div
      className="flex w-full flex-col items-start justify-center bg-cream dark:bg-blue md:absolute
       md:top-[270px] md:right-32 md:w-52 md:rounded-lg lg:right-36    "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}>
      <div
        className="group w-full cursor-pointer border-b-2 border-sand transition duration-200  ease-in-out hover:border-peach
        hover:bg-blue dark:border-darkblue md:rounded-md">
        <button
          className="float-left my-2 w-full text-start font-header text-blue transition duration-200 ease-in-out group-hover:text-peach
            dark:text-cream  md:my-1  "
          onClick={() => navigate('/upload-profile')}>
          <p className="ml-6 text-lg md:ml-2">Change avatar</p>
        </button>
      </div>
      <div
        className="group w-full cursor-pointer border-b-2 border-sand transition duration-200 ease-in-out hover:border-peach
       hover:bg-blue dark:border-darkblue md:rounded-md">
        <button
          onClick={handleResetPassword}
          className=" my-2 w-full text-start font-header text-blue transition  duration-200 ease-in-out group-hover:text-peach
            dark:text-cream md:my-1">
          <p className="ml-6 text-lg md:ml-2">Change password</p>
        </button>
      </div>
      <div className="group w-full cursor-pointer transition  duration-200 ease-in-out  hover:bg-blue md:rounded-md">
        <button
          onClick={handleLogout}
          className=" my-2 w-full text-start font-header text-blue transition duration-200 ease-in-out
            group-hover:text-peach dark:text-cream  md:my-1">
          <p className="ml-6 text-lg md:ml-2">Log out</p>
        </button>
      </div>
    </motion.div>
  )
}

export default Settings
