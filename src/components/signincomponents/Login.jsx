import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import ChooseButtons from "./ChooseButtons";
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
    <div >
        <ChooseButtons/>
       
    <div className="flex justify-center items-center  h-[850px]  w-full  ">
    {error && alert(error)}
    
    <form onSubmit={handleSubmit} className="flex flex-col  mr-44  " >
        <div className='form-group flex flex-col mt-4 w-52  '>
            <label className="font-hlight">Email</label>
            <input type="email" ref={emailRef} required className=" border-2 border-gray-400 rounded-md" />
        </div>
        <div className='form-group flex flex-col my-4'>
            <label className="font-hlight">Password</label>
            <input type="password" ref={passwordRef} required className="border-2 border-gray-400 rounded-md" />
        </div>

        <button className=" btn w-20 rounded-md bg-blue-100 border-2 border-gray-400 mt-4 cursor-pointer">
            <input disabled={loading}  type="submit" className="cursor-pointer" value="Log in"/></button>
    </form>
    
    <div className="w-40 ml-20 ">
        <p>asd</p>    </div>
    </div>
    </div>
  )
}

export default Login