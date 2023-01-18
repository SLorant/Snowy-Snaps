import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const { currentUser, resetPassword, logout } = useAuth()
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showElement, setShowElement] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, 10000)
  }, [])

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  async function handleResetPassword(e) {
    e.preventDefault()
    try {
      setMessage('')
      setError('')
      await resetPassword(currentUser.email)
      setMessage('We sent you an email with a link where you can reset your password.')
    } catch {
      setError('Something failed. Try again?')
    }
  }

  return (
    <motion.div
      className="absolute top-[270px] flex w-48 flex-col items-start justify-center rounded-lg bg-cream md:right-16 lg:right-24    "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}>
      <div className="group w-full cursor-pointer rounded-md border-b-2 border-sand  transition duration-200  ease-in-out hover:border-peach hover:bg-blue">
        <button
          className="float-left my-1 w-full text-start  font-header text-blue transition duration-200  ease-in-out  group-hover:text-peach  "
          onClick={() => navigate('/my-gallery')}>
          <p className="ml-2">Change profile image</p>
        </button>
      </div>
      <div className="group w-full cursor-pointer rounded-md border-b-2 border-sand transition duration-200 ease-in-out hover:border-peach hover:bg-blue">
        <button
          onClick={handleResetPassword}
          className=" my-1 w-full text-start font-header  text-blue transition duration-200  ease-in-out group-hover:text-peach">
          <p className="ml-2">Change password</p>
        </button>
      </div>
      {showElement && message && (
        <div className="mt-2 mb-4 w-60 font-body text-lg  text-darkblue">{message}</div>
      )}
      <div className="group w-full cursor-pointer rounded-md  transition duration-200  ease-in-out hover:bg-blue">
        <button
          onClick={handleLogout}
          className=" my-1 w-full text-start  font-header text-blue transition  duration-200 ease-in-out  group-hover:text-peach">
          <p className="ml-2">Log out</p>
        </button>
      </div>
    </motion.div>
  )
}

export default Settings
