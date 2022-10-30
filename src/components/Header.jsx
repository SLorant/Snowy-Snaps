import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header >
        <nav className="flex justify-start items-center h-10 bg-blue-700">
        <a href="#">{title}</a>
            <a className="p-6 text-white">Videos</a>
            <a className="p-6 text-white">Pics</a>
            <a className="p-6 text-white">Gifs</a>
            
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