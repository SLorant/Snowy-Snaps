import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } =  useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
    const navigate =  useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to sign in')
            
        }
        setLoading(false)
        
    }

  return (
    <div className="">
       
        <div className="flex flex-col justify-center items-center  w-full  ">
    {error && <div className="w-80 h-16 font-header flex justify-center text-blue
     items-center  text-lg text-center mb-6">
        {error}
        </div>}
    
    <form onSubmit={handleSubmit} className="flex flex-col justify-center  items-center w-68  " >
        <div className=" form-group flex flex-col mb-6 w-60">
            <label className="font-header  text-blue ">Email</label>
            <input type="email" ref={emailRef} required className="input h-8  
              text-darkblue font-body bg-cream  focus:border-cream  rounded-sm" />
        </div>
        <div className=" form-group flex flex-col mb-6 w-60">
            <label className="font-header  text-blue">Password</label>
            <input type="password" ref={passwordRef} required className="input h-8 bg-cream   rounded-sm" />
        </div>

        <motion.button className="text-lg flex justify-center items-center mt-4  bg-sand w-24 md:w-28 lg:w-32 xl:w-32  h-10 md:h-12  text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer  " disabled={loading}  type="submit" value="Sign in"/></motion.button>
            </form>
   
    </div>
    </div>
  )
}

export default Login