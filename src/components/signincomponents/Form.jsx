import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"


const Form = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef =useRef()
    const { signup } =  useAuth()
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords don\'t match')
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
            
        }
        setLoading(false)
        
    }

  return (
    <div >
       
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
        <div className=" form-group flex flex-col mb-4">
            <label className="font-hlight">Confirm password</label>
            <input type="password" ref={passwordConfirmRef} required className="border-2 border-gray-400 rounded-md" />
        </div>

        <button><input disabled={loading} className=" btn rounded-md bg-blue-100 border-2 border-gray-400 mt-4 cursor-pointer" type="submit"
         value="Sign up"/></button>
    </form>
    
    <div className="w-40 ml-20 ">
        <p>asd</p>    </div>
    </div>
    </div>
  )
}

export default Form