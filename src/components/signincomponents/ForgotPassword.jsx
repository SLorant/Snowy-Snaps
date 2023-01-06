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
            setMessage('We sent you an email with a link where you can reset your password.')
        } catch {
            setError('Something failed. Try again?')
            
        }
        setLoading(false)
        
    }

  return (
    
       
    <div className="flex flex-col justify-center items-center bg-white md:bg-cream  h-screen  w-full  ">
    <div className="flex flex-col justify-center bg-white mb-2  items-center bg-white  rounded-xl h-full md:h-1/2 w-full  md:w-1/2 lg:w-1/3 2xl:w-1/4">
    {error && <div className="mt-2  w-60 text-lg text-darkblue font-body">
        {error}
        </div>}
        {message && <div className="mt-2 mb-4 w-60 text-lg text-darkblue font-body">
        {message}
        </div>}

    <form onSubmit={handleSubmit} className="flex mb-8 mt-4 flex-col justify-center items-center    " >
    <div className=" form-group flex flex-col mb-2 w-60">
            <label className="font-header  text-blue ">Email</label>
            <input type="email" ref={emailRef} required className="h-8 bg-cream text-darkblue font-body  rounded-sm" />
        </div>
        <div className="flex flex-col justify-center items-center ">
        
        <motion.button className="text-md xl:text-lg flex justify-center items-center
         mt-4  bg-sand w-44 lg:w-44 xl:w-52  h-12  text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer  " disabled={loading}  type="submit" value="Send password reset"/></motion.button>
         
            <Link  className="" to="/login"><motion.p  className="cursor-pointer mt-4 text-peach font-header text-lg"
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Back</motion.p></Link>
    </div>
    </form>
   

    </div>
   
    </div>
  )
}

export default ForgotPassword