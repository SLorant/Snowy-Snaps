import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  const emailRef = useRef()
  const isMountedRef = useRef(false)
  const [message, setMessage] = useState('')
  const { resetPassword } = useAuth()

  async function handleResetPassword(e) {
    e.preventDefault()
    try {
      await resetPassword(emailRef.current.value)
      setMessage('We sent you an email with a link where you can reset your password.')
    } catch (error) {
      setMessage('Email not found in database.')
    }
  }
  useEffect(() => {
    if (isMountedRef.current) {
      setTimeout(function () {
        alert(message)
      }, 1000)
    } else {
      isMountedRef.current = true
    }
  }, [message])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-darkblue  md:bg-cream  ">
      <div
        className="mb-2 flex h-full w-full flex-col  items-center justify-center  rounded-xl
       bg-white bg-white dark:bg-blue md:h-1/2  md:w-1/2 lg:w-1/3 2xl:w-1/4">
        <div className="mt-10 mb-4 rounded-md py-2 font-header text-5xl text-peach">Reset password</div>

        <div className="mb-8 mt-4 flex flex-col items-center justify-center    ">
          <div className=" form-group mb-2 flex w-60 flex-col">
            <label className="font-header text-blue dark:text-cream ">Email</label>
            <input
              type="email"
              required
              ref={emailRef}
              className="h-8 rounded-sm bg-cream pl-1 font-body text-darkblue dark:bg-darkblue  dark:text-cream"
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <motion.button
              onClick={handleResetPassword}
              className="text-md mt-4 flex h-12 w-44 items-center justify-center rounded-md
               bg-sand font-header text-blue hover:bg-blue  hover:text-peach  dark:bg-darkblue
                dark:text-cream dark:hover:text-peach lg:w-44 xl:w-52  xl:text-lg  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <p>Get new password</p>
            </motion.button>

            <Link className="mt-4 mb-10" to="/login">
              <motion.p className=" cursor-pointer font-header text-lg text-peach">Back</motion.p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
