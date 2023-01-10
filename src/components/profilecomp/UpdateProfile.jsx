import React from 'react'
import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { motion } from 'framer-motion'
import AvatarChooser from './AvatarChooser'

const UpdateProfile = () => {
  const [ error, setError] = useState('')
  const [ loading, setLoading] = useState(false)
  const [ message, setMessage] = useState("")
  const { currentUser, resetPassword } = useAuth()

  async function handleSubmit(e) {
    //e.preventDefault()
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
    <div className='flex justify-center items-center bg-cream h-screen '>
    <div className=' bg-white flex flex-col w-1/2 h-full rounded-xl justify-center items-center'>
      <div className=' w-2/3   flex flex-col justify-center items-center'>
      <h2 className='font-header text-peach text-3xl '>Change your profile picture</h2>
      <AvatarChooser type="update"/>
      </div>
      <div className='w-1/2 mt-8  flex flex-col justify-center items-center '>
        <h2 className='font-header text-peach text-3xl'>Change your password</h2>
        <div className='mt-6'>
        <motion.button onClick={handleSubmit()}  className="text-lg flex justify-center  items-center bg-sand w-32 xl:w-40  h-12 text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Reset password</motion.button>
         </div>
      </div>
    </div>
    </div>

  )
}

export default UpdateProfile