import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
const ForgotPassword = () => {
    const emailRef = useRef()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
    const [ message, setMessage] = useState("")
    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('check your inbox lol')
        } catch {
            setError('Failed to create an account')
            
        }
        setLoading(false)
        
    }

  return (
    <div >
       
    <div className="flex justify-center items-center  h-screen  w-full  ">
    {error && <div className="w-80 h-16 font-hlight flex justify-center text-red-700 bg-red-100 font-bold
     items-center rounded-md text-lg text-center">
        {error}
        </div>}
        {message && <div className="w-80 h-16 font-hlight flex justify-center text-red-700 bg-green-400 font-bold
     items-center rounded-md text-lg text-center">
        {message}
        </div>}

    <form onSubmit={handleSubmit} className="flex flex-col    " >
    <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-hbold  text-slate-700 ">Email</label>
            <input type="password" ref={emailRef} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
        </div>
        <div className="flex flex-col justify-center items-center ">
        <motion.button  className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-40 mt-2  border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer" disabled={loading} type="submit"
         value="Reset Password"/></motion.button>
         
         <Link  className="" to="/signup"><motion.p  className="mt-8 underline tracking-wider  cursor-pointer  
      text-slate-800 font-hlight font-bold text-lg"
    whileHover={{ scale: 1.1, transition: { duration: 1 }}}>Cancel</motion.p></Link>
    </div>
    </form>

    </div>
    </div>
  )
}

export default ForgotPassword