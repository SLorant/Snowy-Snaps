import React from 'react'
import { Link,  useLocation } from "react-router-dom";

const HeaderLink = ({title, location}) => {
    const { pathname } = useLocation();

  return (
    <Link to={location} className={`${pathname ===  location  ? ' border-blue hover:border-blue' : ''}
    ${location === "/profile" ? "font-header" : "font-headersc"}
     p-3 px-6  border-b-2 border-sand transition duration-500 hover:bg-cream
             hover:border-peach text-lg text-blue  sm:text-xl  lg:text-xl xl:text-2xl`}>{title}</Link>
  )
}

HeaderLink.defaultProps = {
    title: 'Header',
  }

export default HeaderLink