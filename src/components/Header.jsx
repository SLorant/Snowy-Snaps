import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header className="fixed top-0 w-full z-50">
        <nav className="flex sticky justify-center items-center h-12 xl:h-[82px] bg-white border-white border-2  shadow-md">
        <a href="#" className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-12">{title}</a>
        <a href="#" className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-2xl">Home</a>
            <a href="#" className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-2xl">Learn</a>
            <a href="#"  className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-2xl">Huskies' Gallery</a>
            <a  href="#" className="p-2 xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  border-white  sm:text-xl lg:text-2xl">Let's play</a>
            <a  href="#" className="p-2 xl:p-4 absolute md:right-2 lg:right-4 xl:right-20 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 sm:text-xl lg:text-2xl">Sign In</a>
            
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