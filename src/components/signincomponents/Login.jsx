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
    {error && <div className="w-80 h-16 font-hlight flex justify-center text-red-700 bg-red-100 font-bold
     items-center rounded-md text-lg text-center mb-6">
        {error}
        </div>}
    
    <form onSubmit={handleSubmit} className="flex flex-col w-68  " >
        <div className=" form-group flex flex-col mb-6 w-60">
            <label className="font-hbold  text-slate-700 ">Email</label>
            <input type="email" ref={emailRef} required className="h-8 focus:shadow-lg  border-slate-500 rounded-sm" />
        </div>
        <div className=" form-group flex flex-col mb-6 w-60">
            <label className="font-hbold  text-slate-700 ">Password</label>
            <input type="password" ref={passwordRef} required className="h-8 focus:shadow-lg border-slate-500 rounded-sm" />
        </div>

        <motion.button className="text-blue bg-cream text-lg rounded-md font-headersc py-2 w-32 ml-28  mt-4 "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer " disabled={loading}  type="submit" value="Sign in"/></motion.button>
            </form>
   
    </div>
    </div>
  )
}

export default Login