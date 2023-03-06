import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError('Username or password incorrect')
    }
    setLoading(false)
  }
  useEffect(() => {
    setTimeout(function () {
      setError(null)
    }, 10000)
  }, [error])

  return (
    <div className="">
      <div className="flex w-full flex-col items-center  justify-center  ">
        {error && (
          <div className="mb-4 flex h-2 w-80 items-center justify-center text-center font-header text-lg text-blue dark:text-peach">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-68 flex flex-col  items-center justify-center  ">
          <div className=" form-group mb-6 flex w-60 flex-col">
            <label className="font-header text-lg text-blue dark:text-cream ">Email</label>
            <input
              type="email"
              ref={emailRef}
              required
              className="input h-9 
              rounded-sm bg-cream pl-1 font-body text-lg  text-darkblue focus:border-cream dark:bg-darkblue  dark:text-cream"
            />
          </div>
          <div className=" form-group mb-6 flex w-60 flex-col">
            <label className="font-header text-lg text-blue dark:text-cream">Password</label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="input h-9 rounded-sm bg-cream pl-1 font-body dark:bg-darkblue  dark:text-cream"
            />
          </div>

          <motion.button
            className="mt-4 flex h-10 w-24 items-center  justify-center rounded-md
             bg-sand font-header text-xl  text-blue hover:bg-blue  hover:text-peach
              dark:bg-darkblue dark:text-cream dark:hover:text-peach md:h-12 md:w-28 lg:w-32  xl:w-32  "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <input className="h-10 cursor-pointer " disabled={loading} type="submit" value="Sign in" />
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
