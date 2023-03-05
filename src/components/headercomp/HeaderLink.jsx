import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeaderLink = ({ setShowMenu, showMenu, title, location }) => {
  const { pathname } = useLocation()
  const currentLocation = useLocation().pathname
  const mySnaps = currentLocation.substring(currentLocation.lastIndexOf('/') + 1)
  const navigate = useNavigate()

  const handleClickButton = (url) => {
    setShowMenu(false)
    navigate(url)
  }

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  return (
    <motion.button
      variants={itemVariants}
      onClick={() => {
        handleClickButton(location)
      }}
      className="mx-4 my-4 flex h-14 w-[90%]  items-center justify-between 
    rounded-md bg-cream md:m-auto  md:h-14 md:w-auto md:rounded-none md:bg-transparent xl:h-[72px]">
      <Link
        to={location}
        className={`${pathname === location ? 'border-darkblue dark:border-peach' : 'border-transparent'}
       
          ${
            currentLocation === '/'
              ? 'hover:border-peach hover:bg-cream dark:hover:bg-blue '
              : currentLocation === '/watch'
              ? 'hover:border-peach hover:bg-cream dark:hover:bg-blue '
              : currentLocation === '/learn'
              ? 'hover:border-peach hover:bg-white dark:hover:bg-darkblue'
              : mySnaps === 'gallery'
              ? 'hover:border-peach hover:bg-white dark:hover:bg-blue'
              : 'hover:border-peach hover:bg-white dark:hover:bg-darkblue'
          }
        
          ${showMenu ? 'my-2 ml-4 h-14 border-none text-3xl tracking-wide' : 'h-full'}
            headerlink z-50 block flex items-center border-b-2 p-2 px-2 text-center  font-header text-blue  transition  duration-500
            dark:text-cream   md:text-2xl lg:px-4    xl:px-6   xl:text-3xl`}>
        {title}
      </Link>
    </motion.button>
  )
}

HeaderLink.defaultProps = {
  title: 'Header',
}

export default HeaderLink
