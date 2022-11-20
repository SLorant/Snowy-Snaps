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
        <nav className="flex sticky justify-between items-center h-12 xl:h-[78px] bg-white border-white border-2  shadow-md">
        <a href="#" className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-12">{title}</a>

          <div className="ml-[550px]">
        <Link to="/"  className={`${pathname === '/' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Home</Link>
            <Link to="/learn" className={`${pathname === '/learn' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Learn</Link>
            <Link to="/watch" className={`${pathname === '/watch' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-xl xl:text-2xl`}>Huskies' Gallery</Link>
            <Link to="/play" className={`${pathname === '/play' ? 'border-slate-700' : ''} p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  border-white  sm:text-xl lg:text-xl xl:text-2xl`}>Let's play</Link>
            </div>
            
           {useAuth().currentUser && useAuth().currentUser.email ?
           <div className="group relative w-80 mb-6 h-2">
           <Link to='/profile'
          className={`${pathname === '/profile' ? 'border-slate-700' : ''} z-40 p-2 xl:p-4
             border-white font-hlight border-b-2 transition duration-500 
              text-lg text-slate-700 sm:text-xl lg:text-xl xl:text-2xl`}
          >{ currentUser.email}</Link>
         

          <div className="hidden mt-[18px] w-2/3 ml-8 rounded-b-md shadow-md  bg-white z-50 group-hover:block">
         

          <Link to="/profile"  className="block p-2 xl:p-4 
           border-white font-hlight border-b-2 transition duration-500 hover:bg-white
          border-slate-700 border-dashed text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">Profile</Link>

          <Link to="/my-images"  className="block p-2 xl:p-4 
           border-white font-hlight border-b-2 transition duration-500 hover:bg-white
          border-slate-700 border-dashed text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">My images</Link>
           <Link to="/login" onClick={handleLogout} className="block p-2 xl:p-4 
           border-white font-hlight  transition duration-500 
            text-md text-slate-700 sm:text-xl lg:text-xl xl:text-md">Logout</Link>
          </div>
          </div>
          :
          <Link to='/login'
          className={`${pathname === '/signup' || pathname === '/login' ? 'border-slate-700' : ''} mr-20 z-40 p-2 xl:p-4
             border-white font-hlight border-b-2 transition duration-500 hover:bg-white
          hover:border-slate-700 text-lg text-slate-700 sm:text-xl lg:text-xl xl:text-2xl`}
          >Sign In</Link>}
            
            
        </nav>
        
    </header>
  )
}
//useAuth().currentUser && useAuth().currentUser.email ? currentUser.email : 'Sign In'
//{useAuth().currentUser && useAuth().currentUser.email ? "/profile" : "/login"}
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