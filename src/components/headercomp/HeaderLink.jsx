import React from 'react'
import { Link,  useLocation } from "react-router-dom";

const HeaderLink = ({title, location}) => {
    const { pathname } = useLocation();

  return (
    <Link to={location} className={`${pathname ===  location  ? ' border-darkblue hover:border-darkblue' : 'border-sand'}
    ${location === "/profile" ? "font-header" : "font-headersc"}
     p-2 xl:p-3 px-2 lg:px-4 xl:px-6  border-b-2 block h-full  transition duration-500 hover:bg-cream
             hover:border-peach text-lg text-blue    lg:text-xl xl:text-2xl`}>{title}</Link>
  )
}

HeaderLink.defaultProps = {
    title: 'Header',
  }

export default HeaderLink