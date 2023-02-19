import { useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  const emailRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { resetPassword } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('We sent you an email with a link where you can reset your password.')
    } catch {
      setError('Something failed. Try again?')
    }
    setLoading(false)
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center  bg-white  md:bg-cream  ">
      <div className="mb-2 flex h-full w-full flex-col  items-center justify-center  rounded-xl bg-white bg-white md:h-1/2  md:w-1/2 lg:w-1/3 2xl:w-1/4">
        {error && <div className="mt-2  w-60 font-body text-lg text-darkblue">{error}</div>}
        {message && <div className="mt-2 mb-4 w-60 font-body text-lg text-darkblue">{message}</div>}

        <form
          onSubmit={handleSubmit}
          className="mb-8 mt-4 flex flex-col items-center justify-center    ">
          <div className=" form-group mb-2 flex w-60 flex-col">
            <label className="font-header  text-blue ">Email</label>
            <input
              type="email"
              ref={emailRef}
              required
              className="h-8 rounded-sm bg-cream font-body  text-darkblue"
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <motion.button
              className="text-md mt-4 flex h-12 w-44
         items-center  justify-center rounded-md bg-sand font-headersc  text-blue  hover:bg-blue
                hover:text-peach lg:w-44 xl:w-52  xl:text-lg  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <input
                className="cursor-pointer  "
                disabled={loading}
                type="submit"
                value="Send password reset"
              />
            </motion.button>

            <Link className="" to="/login">
              <motion.p
                className="mt-4 cursor-pointer font-header text-lg text-peach"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                Back
              </motion.p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
