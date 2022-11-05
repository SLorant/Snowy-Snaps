import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header className="fixed top-0 w-full z-50">
        <nav className="flex sticky justify-center items-center h-12 xl:h-[82px] bg-white border-white border-2  shadow-md">
        <a href="#" className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-4xl left-12">{title}</a>
        <a href="#" className="p-4 px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-2xl">Home</a>
            <a href="#" className="p-4 px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-2xl">Learn</a>
            <a href="#"  className="p-4 px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-2xl">Huskies' Gallery</a>
            <a  href="#" className="p-4 px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  border-white  sm:text-xl lg:text-2xl">Let's play</a>
            <a  href="#" className="p-4 absolute md:right-8 lg:right-24 border-white font-hlight border-b-2 transition duration-500 hover:bg-white
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