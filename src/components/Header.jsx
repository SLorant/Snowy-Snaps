import PropTypes from 'prop-types'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
const Header = ({title}) => {
  const { pathname } = useLocation();
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
    
  
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')

    try{
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }

  }
  
  return (
    <header className="fixed top-0 w-full z-50">
        <nav className="flex sticky justify-center items-center h-12 xl:h-[82px] bg-white border-white border-2  shadow-md">
        <a href="#" className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-12">{title}</a>
        <Link to="/"  className={`${pathname === '/' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Home</Link>
            <Link to="/learn" className={`${pathname === '/learn' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Learn</Link>
            <Link to="/watch" className={`${pathname === '/watch' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-xl xl:text-2xl`}>Huskies' Gallery</Link>
            <Link to="/play" className={`${pathname === '/play' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  border-white  sm:text-xl lg:text-xl xl:text-2xl`}>Let's play</Link>
            <Link to="/login" className={`${pathname === '/signup' || pathname === '/login' ? 'border-slate-700' : ''} p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-20 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 sm:text-xl lg:text-xl xl:text-2xl`}
             >{ useAuth().currentUser && useAuth().currentUser.email ? currentUser.email : 'Sign In'}</Link>
             {error && alert(error)}
             <Link to="/login" onClick={handleLogout} className=" p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-60 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">Logout</Link>
             <Link to="/update-profile"  className=" p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-80 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">Up.prof</Link>
             <Link to="/forgot-password"  className=" p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-96 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">FP</Link>
            
        </nav>
        
    </header>
  )
}
//currentUser.email !== null
Header.defaultProps = {
    title: 'Header',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header

/*const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
  };
 
  let toggleClass = isActive ? 'border-slate-700' : ''; */