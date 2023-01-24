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
     headerlink z-50 block flex h-full items-center border-b-2 p-2 px-2 text-center text-xl text-blue  transition  duration-500
              lg:px-4 lg:text-2xl    xl:px-6   2xl:text-3xl`}>
      {title}
    </Link>
  )
}

HeaderLink.defaultProps = {
  title: 'Header',
}

export default HeaderLink
