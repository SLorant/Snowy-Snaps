import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header >
        <div >
        <a>{title}</a>
            <a className="underline">Videos</a>
            <a>Pics</a>
            <a>Gifs</a>
            
        </div>
        
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