import { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"

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
       
    <div className="flex justify-center items-center  h-[850px]  w-full  ">
    {error && alert(error)}
    {message && alert(message)}
    <form onSubmit={handleSubmit} className="flex flex-col  mr-44  " >
        <div className='form-group flex flex-col mt-4 w-52  '>
            <label className="font-hlight">Email</label>
            <input type="email" ref={emailRef} required className=" border-2 border-gray-400 rounded-md" />
        </div>
    

        <button  className=" btn rounded-md bg-blue-100 border-2 border-gray-400 mt-4 cursor-pointer">
            <input className="cursor-pointer" disabled={loading} type="submit"
         value="Reset Password"/></button>
    </form>

    </div>
    </div>
  )
}

export default ForgotPassword