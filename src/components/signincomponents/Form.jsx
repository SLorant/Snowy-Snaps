import { useRef } from "react"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Form = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef =useRef()
    const { pathname } = useLocation();

    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
      };

  return (
    <div className="flex flex-col  justify-center items-center  h-screen">
        <div className="flex flex-col justify-center items-center  rounded-xl  ">
        <div className="mt-8 mb-12 ">
            <button onClick={toggleClass}  className={`${isActive ? 'border-2 border-slate-700 border-dashed hover:translate-x-0 opacity-100' :
             'transition border-2 border-white opacity-70  ease-in-out hover:border-2 hover:border-slate-800 hover:border-dashed hover:-translate-x-4 duration-500'} rounded-l-md tracking-wider
            shadow-lg bg-white   cursor-pointer
             px-4 py-2 px-40 font-hlight font-bold text-4xl `}>Login</button>
            <button onClick={toggleClass} className={`${isActive  ? 'opacity-70 transition ease-in-out hover:border-2 hover:border-slate-800 border-dashed hover:translate-x-4'
            : 'border-slate-700 border-dashed'} rounded-r-md tracking-wider border-2 border-white
            shadow-lg bg-white  cursor-pointer 
            hover:opacity-100 duration-500
             px-4 py-2 px-40 font-hlight font-bold text-4xl`}>Signup</button>
        </div>
    <div className="flex  mb-24 w-1/2">
    <form className="flex flex-col  " >
        <div className='form-group flex flex-col mt-4'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your email' required className="border-2 border-gray-400 rounded-md" />
        </div>
        <div className='form-group flex flex-col my-4'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter password' required className="border-2 border-gray-400 rounded-md" />
        </div>
        <div className='form-group flex flex-col mb-4'>
            <label htmlFor="">Password confirm</label>
            <input type="password" placeholder='Enter password again' required className="border-2 border-gray-400 rounded-md" />
        </div>

        <input className='btn border-2 border-gray-400 mt-4 cursor-pointer' type="submit" value='Save'/>
    </form>
    
    <div className="w-40 ml-20">
        <p>Szabályok: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt, vitae nam eligendi dolorum minus adipisci architecto, rem pariatur laudantium eaque consectetur commodi nihil qui! Quia odio dolore mollitia ex.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Form