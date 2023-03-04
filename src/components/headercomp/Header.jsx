import { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useMediaQuery } from 'react-responsive'
import HeaderLink from './HeaderLink'
import { useLocation, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import data from '../../assets/animations/data.json'
import { motion } from 'framer-motion'
import LoadHeaderUser from './LoadHeaderUser'
import MobileHeaderUserInfo from './MobileHeaderUserInfo'
import LogoutIcon from '../../assets/icons/LogoutIcon'

const Header = () => {
  const { currentUser } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation().pathname
  const lottieRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const [showMenu, setShowMenu] = useState(false)
  const [headerBg, setHeaderBg] = useState('bg-white')

  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }
  const setBg = () => {
    switch (currentLocation) {
      case '/':
        setHeaderBg('bg-sand')
        break
      case '/watch':
        setHeaderBg('bg-white')
        break
      case '/my-gallery':
        setHeaderBg('bg-white')
        break
      default:
        setHeaderBg('bg-cream')
    }
  }
  useEffect(() => {
    setBg()
    if (showMenu) setHeaderBg('bg-sand')
    if (!isMobile) setShowMenu(false)
  })

  const playLottie = useCallback(() => {
    if (lottieRef.current) {
      if (showMenu) {
        lottieRef.current.playSegments([0, 30], false)
      } else {
        lottieRef.current.playSegments([30, 0], false)
      }
    }
  }, [lottieRef, showMenu])

  useEffect(() => {
    playLottie()
  }, [playLottie])

  LoadHeaderUser(setUserName)

  return (
    <header className={`${showMenu && 'h-full w-full bg-cream'} fixed top-0 z-50 flex  w-full `}>
      <motion.nav
        className={`
          ${showMenu ? 'h-full flex-col bg-sand' : 'h-16'}
          ${headerBg} sticky flex  w-full items-center justify-center    md:h-14 md:justify-between  xl:h-[72px]   `}
        initial={isMobile ? 'closed' : 'none'}
        animate={isMobile ? (showMenu ? 'open' : 'closed') : 'none'}>
        <Link
          to="/"
          className={`${showMenu ? 'right-6' : 'left-2 hidden md:block '} 
            absolute top-4 mb-1  w-40 font-header  text-lg font-bold
            text-blue  lg:left-6 lg:top-3 lg:w-52 lg:text-2xl xl:left-8 xl:left-6 xl:top-4 xl:w-64 xl:text-4xl`}>
          <img src="/src/assets/icons/logo.png" alt="logo" />
        </Link>
        <div className="">
          <button className="absolute top-1 left-2 w-12 md:hidden" onClick={handleClickMenu}>
            <Lottie autoplay={false} loop={false} lottieRef={lottieRef} animationData={data} />
          </button>
          {!currentUser && (
            <Link
              to="login"
              className={`${showMenu && 'hidden'} absolute top-2 right-4 flex items-center p-2
             px-2  text-center font-header text-2xl text-blue  sm:hidden`}>
              Sign in
            </Link>
          )}
        </div>

        <motion.div
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(90% 50% 10% 50% round 10px)',
              transition: { type: 'spring', bounce: 0, duration: 0.4 },
            },
          }}
          style={showMenu ? { pointerEvents: 'auto' } : {}}
          className={`${
            showMenu
              ? 'absolute top-52 h-2/3 w-full flex-col items-start justify-start  '
              : 'hidden h-full  items-center justify-center '
          } 
              mx-4  md:mx-0 md:ml-40   md:flex md:flex-row lg:ml-60 xl:ml-80 `}>
          <HeaderLink title="Home" location="/" showMenu={showMenu} setShowMenu={setShowMenu} />
          <HeaderLink title="Gallery" location="/watch" showMenu={showMenu} setShowMenu={setShowMenu} />
          <HeaderLink title="Huskypedia" location="/learn" showMenu={showMenu} setShowMenu={setShowMenu} />
          {currentUser ? (
            <div className="w-full md:hidden">
              <div className="w-full md:hidden">
                <HeaderLink title="Profile" location="/profile" showMenu={showMenu} setShowMenu={setShowMenu} />
              </div>
              <div className="w-full md:hidden">
                <HeaderLink
                  title="My Snaps"
                  location={`/${username}/gallery`}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                />
              </div>
            </div>
          ) : (
            <div className="w-full md:hidden">
              <HeaderLink title="Register" location={`signup`} showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
          )}
        </motion.div>
        <div
          className={`${
            showMenu ? 'absolute bottom-6' : 'hidden'
          } mx-4 flex w-[91%] items-end justify-between md:hidden`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
          <LogoutIcon />
        </div>

        {currentUser ? (
          <MobileHeaderUserInfo showMenu={showMenu} setShowMenu={setShowMenu} username={username} />
        ) : (
          <div className="right-2  z-50 mr-2 hidden h-full  items-center md:block xl:mr-12">
            <HeaderLink
              title="Sign In"
              location="/login"
              currentLocation={currentLocation}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
        )}
      </motion.nav>
    </header>
  )
}

export default Header
