import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './headercomp/Header'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        style={{ background: '#F8F0E2', color: '#2D4550', justifyContent: 'center' }}
        buttonStyle={{ background: '#2D4550', color: '#F8F0E2', fontSize: '16px' }}
        expires={150}>
        This website uses cookies to enhance the user experience. &nbsp;
        <span>
          See more in our&nbsp;
          <Link className="underline" to="cookiepolicy">
            Cookie Policy.
          </Link>
        </span>
      </CookieConsent>
    </>
  )
}

export default Layout
