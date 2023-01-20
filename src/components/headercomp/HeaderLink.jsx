import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderLink = ({ title, location, currLoc }) => {
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
     z-50 block h-full border-b-2 p-2 px-2 text-lg text-blue transition  duration-500  lg:px-4
              lg:text-xl xl:p-3    xl:px-4 xl:text-2xl`}>
      {title}
    </Link>
  )
}

HeaderLink.defaultProps = {
  title: 'Header',
}

export default HeaderLink
