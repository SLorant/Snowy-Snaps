import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Settings = () => {
  const { currentUser, logout } = useAuth()
  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
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
      <Link to="/reset-password">
        <motion.button
          whileHover={{ translateX: 20, transition: { duration: 0.3 } }}
          className=" rounded-md bg-sand px-2 py-1  font-header text-lg text-blue hover:bg-blue hover:text-peach"
        >
          Change password
        </motion.button>
      </Link>
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
