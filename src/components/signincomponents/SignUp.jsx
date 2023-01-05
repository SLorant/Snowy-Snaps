import { useState, useRef, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { createUserDocument, auth } from "../../../firebase/config"
import useStorage from "../hooks/useStorage";

//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const SignUp = () => {
    //const provider = new GoogleAuthProvider();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef =useRef()
    const userNameRef =useRef()
    const { signup } =  useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)
    const navigate =  useNavigate()
    const [email, setEmail] = useState('')
    const [charactersRemaining, setCharactersRemaining] = useState(20);

    useEffect(() => {
        userNameRef.current.addEventListener('input', () => {
          setCharactersRemaining(20 - userNameRef.current.value.length);
        });
      }, []);

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords don\'t match')
        const username = userNameRef.current.value
     
        try {
            setError('')
            setLoading(true)
            console.log(emailRef.current.value)
             const { user }  = await signup(
                emailRef.current.value,
                passwordRef.current.value
              ); 
           
              console.log(user)
             
            //await signup(emailRef.current.value, passwordRef.current.value, )
            await createUserDocument(user, { username });

            navigate('/upload-profile')
        } catch {
            if (passwordRef.current.value.length < 6)
            {  setError("Password have to be at least 6 characters long")}
            else setError('Failed to create an account')
            
        }
        setLoading(false)
        
    }

  return (
    <div >
            
            
       
    <div className="flex flex-col justify-center items-center  w-full  ">
    {error && <div className="w-80 h-16 font-hlight flex justify-center text-red-700 bg-red-100 font-bold
     items-center rounded-md text-lg text-center">
        {error}
        </div>}
    
    <form onSubmit={handleSubmit} className="flex flex-col w-68" >
   
        <div className='form-group flex flex-col mt-8 w-60  '>
            
            <div className="flex items-center justify-between">
            <label className="font-hbold text-slate-700  ">Email</label>
            <div className=" w-4 h-4 group relative">
            <img className=" w-4 h-4 cursor-pointer" src="./src/assets/question.png" alt="questionmark" />
                <div className="invisible rounded-md bg-slate-400  group-hover:visible group-hover:bg-slate-700 
                absolute shadow-md w-48 h-14 left-7 -top-9 transition ease-in duration-300 group-hover:translate-y-4  ">
                    <p className="mt-2 ml-2 text-sm text-white font-hlight">Email format required. <br /> user.name@example.com</p>
                </div>
                
                </div>
            
           
            </div>
            <input type="email" ref={emailRef} required className="h-8 focus:shadow-lg  border-[1px] border-slate-500 rounded-sm" />
        </div>
        
        
        <div className='form-group flex flex-col my-6 w-60'>
            <div className="flex items-center justify-between">
            <label className="font-hbold text-slate-700 ">Password</label>
            <div className=" w-4 h-4 group relative">
            <img className=" w-4 h-4 cursor-pointer" src="./src/assets/question.png" alt="questionmark" />
                <div className="invisible rounded-md bg-slate-400  group-hover:visible group-hover:bg-slate-700 
                absolute left-7 -top-6 ease-in shadow-md w-40 h-9  transition duration-300 group-hover:translate-y-4  ">
                    <p className="mt-2 ml-2 text-sm text-white font-hlight">At least 6 characters.</p>
                </div>
                
                </div>

            </div>
            <input type="password" ref={passwordRef} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
        </div>


        <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-hbold  text-slate-700 ">Confirm password</label>
            <input type="password" ref={passwordConfirmRef} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
        </div>
        <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-hbold  text-slate-700 ">Username</label>
            <input type="text" ref={userNameRef} maxLength={20} required className="h-8 focus:shadow-lg border-[1px] border-slate-500 rounded-sm" />
            <span className="text-black text-xs">Maximum {charactersRemaining} characters remaining</span>
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