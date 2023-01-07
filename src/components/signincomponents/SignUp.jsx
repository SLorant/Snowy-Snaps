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
        } catch(error) {
            if (passwordRef.current.value.length < 6)
            {  setError("Password have to be at least 6 characters long")}
            else setError('Failed to create an account')
            
        }
        setLoading(false)
        
    }

  return (
    <div >       
            <div className="flex flex-col justify-center items-center  w-full  ">
    {error && <div className="w-80 h-16 font-header flex justify-center text-blue
     items-center  text-lg text-center mb-6">
        {error}
        </div>}
    
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col w-68" >
   
        <div className='form-group flex flex-col  w-60  '>
            
            <div className="flex items-center justify-between">
            <label className="font-header text-blue  ">Email</label>
            <div className=" w-4 h-4 group relative">
            <img className=" w-4 h-4 cursor-pointer" src="./src/assets/question.png" alt="questionmark" />
                <div className="invisible rounded-md bg-blue  group-hover:visible group-hover:bg-slate-700 
                absolute w-48 h-14 right-7 -top-10 md:left-7 md:-top-3  ">
                    <p className="mt-2 ml-2 text-sm text-white font-body">Email format required. <br /> user.name@example.com</p>
                </div>
                
                </div>
            
           
            </div>
            <input type="email" ref={emailRef} required className="h-8 text-darkblue font-body bg-cream  rounded-sm" />
        </div>
        
        
        <div className='form-group flex flex-col my-6 w-60'>
            <div className="flex items-center justify-between">
            <label className="font-header text-blue ">Password</label>
            <div className=" w-4 h-4 group relative">
            <img className=" w-4 h-4 cursor-pointer" src="./src/assets/question.png" alt="questionmark" />
                <div className="invisible rounded-md bg-blue  group-hover:visible group-hover:bg-slate-700 
                absolute right-7 -top-5 md:left-7 md:-top-3 ease-in  w-40 h-9   ">
                    <p className="mt-2 ml-2 text-sm text-white font-body">At least 6 characters.</p>
                </div>
                
                </div>

            </div>
            <input type="password" ref={passwordRef} required className="h-8 text-darkblue  bg-cream rounded-sm" />
        </div>


        <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-header  text-blue ">Confirm password</label>
            <input type="password" ref={passwordConfirmRef} required className="h-8 bg-cream text-darkblue  rounded-sm" />
        </div>
        <div className=" form-group flex flex-col mb-4 w-60">
            <label className="font-header  text-blue ">Username</label>
            <input type="text" ref={userNameRef} maxLength={20} required className="h-8 bg-cream text-darkblue font-body rounded-sm" />
            <span className="text-darkblue font-body text-xs">Maximum {charactersRemaining} characters remaining</span>
        </div>

        <motion.button className="text-lg flex justify-center items-center
         mt-4  bg-sand w-24 md:w-28 lg:w-32 xl:w-32  h-10 md:h-12  text-blue
                hover:bg-blue hover:text-peach font-headersc  rounded-md  "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
            <input className="cursor-pointer  " disabled={loading}  type="submit" value="Sign up"/></motion.button>
        
        
        
        
    </form>
    
    
    </div>
    </div>
  )
}

export default SignUp