import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
const ChooseButtons = () => {
    const { pathname } = useLocation();
  return (
    <div>
    {pathname === '/signup'  ?
    <div className="mt-8 mb-12 ">
     <Link to="/login"><motion.button  className="absolute top-44 right-1/2 bg-white rounded-l-md tracking-wider border-2 border-white
    hover:border-slate-700 border-dashed shadow-lg cursor-pointer 
    px-4 py-2 px-40 text-slate-800 font-hlight font-bold text-4xl transition ease-in-out duration-500 opacity-70 hover:opacity-100"
    whileHover={{ translateX : -25, transition: { duration: 0.2 }}}>Login</motion.button></Link>
    
    <motion.button  className="absolute top-44 left-1/2 rounded-r-md tracking-wider border-2 border-slate-700 border-dashed shadow-lg bg-white cursor-pointer 
    px-4 py-2 px-40 text-slate-800 font-hlight font-bold text-4xl"
    initial={{ translateX: 25}}
    animate={{ translateX: 0, transition: { duration: 0.5 }}}>Signup</motion.button></div>
    : 
    <div className="mt-8 mb-12 ">
    <motion.button  className="absolute top-44 right-1/2 rounded-l-md tracking-wider border-2 border-slate-700 border-dashed shadow-lg bg-white cursor-pointer 
    px-4 py-2 px-40 text-slate-800 font-hlight font-bold text-4xl "
    initial={{ translateX: -25}}
    animate={{ translateX: 0, transition: { duration: 0.5 }}}
    >Login</motion.button> 

    <Link to="/signup"><motion.button  className="absolute top-44 left-1/2 rounded-r-md tracking-wider border-2  border-white border-dashed shadow-lg bg-white cursor-pointer 
    px-4 py-2 px-40 text-slate-800 font-hlight font-bold text-4xl opacity-70 hover:border-slate-700 hover:opacity-100
    transition ease-in-out duration-500"
    whileHover={{ translateX : 25, transition: { duration: 0.2 }}}>Signup</motion.button></Link>
    </div>}
    
    </div>
    

  )
}

export default ChooseButtons

/*{`${pathname === '/login'  ? 'opacity-70 transition ease-in-out hover:border-2 hover:border-slate-800 border-dashed hover:translate-x-4'
: 'border-slate-700 border-dashed'}
     rounded-r-md tracking-wider border-2 border-white shadow-lg bg-white  cursor-pointer hover:opacity-100 duration-500 text-slate-800
     px-4 py-2 px-40 font-hlight font-bold text-4xl absolute top-44 left-1/2`} */

     //whileHover={{ translateX : 20, transition: { duration: 0.1 }


/*<Link to="/login"><motion.button   className={`${pathname === '/login' ? 'border-2 border-slate-700 border-dashed hover:translate-x-0 opacity-100' :
     'transition border-2  border-white opacity-70  ease-in-out hover:border-2 hover:border-slate-800 hover:border-dashed hover:-translate-x-4 duration-500'}
     rounded-l-md tracking-widest shadow-lg bg-white   cursor-pointer text-slate-800
     px-4 py-2 px-40 font-cutefont  text-4xl absolute top-44 right-1/2 `}
    whileHover={{ translateX : -20, transition: { duration: 0.3 }}}
    whileTap={{ scale: 0.9,  transition: { duration: 0.3 } }}
     >Login</motion.button></Link> */