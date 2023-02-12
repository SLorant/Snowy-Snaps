import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderLink = ({ showMenu, title, location, currLoc }) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={location}
      className={`${pathname === location ? ' border-darkblue' : 'border-transparent'}
    ${location === '/profile' ? 'font-header' : 'font-headersc'}
    ${
      currLoc === '/'
        ? 'hover:border-peach hover:bg-cream'
        : currLoc === '/watch'
        ? 'hover:border-peach hover:bg-cream'
        : currLoc === '/my-gallery'
        ? 'hover:border-peach hover:bg-cream'
        : 'hover:border-peach hover:bg-white'
    }
    ${showMenu ? 'ml-4 h-14 border-none text-3xl' : ' h-full'}
     headerlink z-50 block flex items-center border-b-2 p-2 px-2 text-center text-2xl text-blue  transition  duration-500
              lg:px-4 lg:text-2xl    xl:px-6   xl:text-3xl`}>
      {title}
    </Link>
  )
}

HeaderLink.defaultProps = {
  title: 'Header',
}

export default HeaderLink
