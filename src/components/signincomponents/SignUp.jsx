import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef =useRef()
    const { signup } =  useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
    const navigate =  useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords don\'t match')
        
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            if (passwordRef.current.value.length < 6)
            {  setError("Password have to be at least 6 characters")}
            else setError('Failed to create an account')
            
        }
        setLoading(false)
        
    }

  return (
    <div >
            
            
       
    <div className="flex justify-center items-center  w-full  ">
    {error && alert(error)}
    
    <form onSubmit={handleSubmit} className="flex flex-col w-68" >
   
        <div className='form-group flex flex-col mt-8 w-60  '>
            
            <div className="flex items-center justify-between">
            <label className="font-hbold text-slate-700  ">Email</label>
            <div className=" w-4 h-4 group">
            <img className=" w-4 h-4 cursor-pointer" src="./src/assets/question.png" alt="questionmark" />
                <div className="invisible rounded-md bg-slate-700  group-hover:visible absolute top-[310px] right-[470px] w-40 h-12 mr-20 mb-4">
                    <p className="ml-2 text-sm text-white font-hlight">Email format required.</p>
                </div>
                
                </div>
            
           
            </div>
            <input type="email" ref={emailRef} required className="h-8 focus:shadow-lg  border-[1px] border-slate-500 rounded-sm" />
        </div>
        
        
        <div className='form-group flex flex-col my-6 w-60'>
            <div className="flex items-center justify-between">
            <label className="font-hbold text-slate-700 ">Password</label>
            <img className="w-4 h-4" src="./src/assets/question.png" alt="questionmark" />
            </div>
            <input type="password" ref={passwordRef} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
        </div>
        <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-hbold  text-slate-700 ">Confirm password</label>
            <input type="password" ref={passwordConfirmRef} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
        </div>

        <motion.button className="text-white text-lg rounded-md bg-stone-400 font-hlight font-bold py-2
         border-2  w-32 ml-28 border-stone-600 mt-4 cursor-pointer shadow-[3px_2px_1px_1px_rgba(0,0,0,0.3)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer " disabled={loading}  type="submit" value="Sign up"/></motion.button>
    </form>
    
    
    </div>
    </div>
  )
}

export default SignUp