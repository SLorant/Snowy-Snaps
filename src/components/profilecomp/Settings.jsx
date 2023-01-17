import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useState, useEffect } from 'react'

const Settings = () => {
  const { currentUser, resetPassword, logout } = useAuth()
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showElement, setShowElement] = useState(true)

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
      setMessage(
        'We sent you an email with a link where you can reset your password.',
      )
    } catch {
      setError('Something failed. Try again?')
    }
  }

  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-2 rounded-lg     ">
      <Link to="/upload-profile">
        <motion.button
          whileHover={{ translateX: 20, transition: { duration: 0.3 } }}
          className=" rounded-md bg-sand px-2 py-1  font-header text-lg text-blue hover:bg-blue hover:text-peach"
        >
          Change profile image
        </motion.button>
      </Link>
      <motion.button
        onClick={handleResetPassword}
        whileHover={{ translateX: 20, transition: { duration: 0.3 } }}
        className=" rounded-md bg-sand px-2 py-1  font-header text-lg text-blue hover:bg-blue hover:text-peach"
      >
        Change password
      </motion.button>
      {showElement && message && (
        <div className="mt-2 mb-4 w-60 font-body text-lg text-darkblue">
          {message}
        </div>
      )}
      <Link to="/login">
        <motion.button
          whileHover={{ translateX: 20, transition: { duration: 0.3 } }}
          onClick={handleLogout}
          className=" rounded-md bg-sand px-2 py-1  font-header text-lg text-blue hover:bg-blue hover:text-peach"
        >
          Log out
        </motion.button>
      </Link>
    </div>
  )
}

export default Settings
