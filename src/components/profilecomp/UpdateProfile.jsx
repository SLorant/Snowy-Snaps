import React from 'react'
import { useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import AvatarChooser from './AvatarChooser'

const UpdateProfile = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { currentUser, resetPassword } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(currentUser.email)
      console.log(currentUser.email)
      setMessage('We sent you an email with a link where you can reset your password.')
    } catch {
      setError('Something failed. Try again?')
    }
    setLoading(false)
  }

  return (
    <div className="flex h-screen items-center justify-center bg-cream ">
      <div className=" flex h-full w-1/2 flex-col items-center justify-center rounded-xl bg-white">
        <div className=" flex   w-2/3 flex-col items-center justify-center">
          <h2 className="font-header text-3xl text-peach ">Change your profile picture</h2>
          <AvatarChooser type="update" />
        </div>
        <div className="mt-8 flex  w-1/2 flex-col items-center justify-center ">
          <h2 className="font-header text-3xl text-peach">Change your password</h2>
          <div className="mt-6">
            <motion.button
              onClick={handleSubmit()}
              className="flex h-12 w-32  items-center justify-center rounded-md bg-sand  font-headersc text-lg
                text-blue hover:bg-blue hover:text-peach  xl:w-40  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Reset password
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
