import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header >
        <nav className="flex relative justify-center items-center h-18 bg-cyan-900 shadow-lg">
        <a href="#" className="absolute font-cutefont font-bold text-lg text-white sm:text-xl lg:text-3xl left-12">{title}</a>
            <a className="p-6 font-hlight text-lg text-white sm:text-xl lg:text-2xl">Learn</a>
            <a className="p-6 font-hlight text-lg text-white sm:text-xl lg:text-2xl">Huskies' Gallery</a>
            <a className="p-6 font-hlight text-lg text-white sm:text-xl lg:text-2xl">Let's play!</a>
            <a className="p-6 font-hlight text-lg text-white sm:text-xl lg:text-2xl">Sign In</a>
            
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