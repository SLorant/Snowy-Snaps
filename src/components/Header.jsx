import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link } from "react-router-dom";
const Header = ({title}) => {
  const clicked = false;
  return (
    <header className="fixed top-0 w-full z-50">
        <nav className="flex sticky justify-center items-center h-12 xl:h-[82px] bg-white border-white border-2  shadow-md">
        <a href="#" className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-12">{title}</a>
        <Link to="/" className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             active:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl">Home</Link>
            <Link to="/learnpage"  className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl">Learn</Link>
            <Link to="/watchpage"  className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-xl xl:text-2xl">Huskies' Gallery</Link>
            <Link to="/" className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  border-white  sm:text-xl lg:text-xl xl:text-2xl">Let's play</Link>
            <Link to="/" className="p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-20 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 sm:text-xl lg:text-xl xl:text-2xl">Sign In</Link>
            
        </nav>
        
    </header>
  )
}

Header.defaultProps = {
    title: 'Header',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header