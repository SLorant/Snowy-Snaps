import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useMediaQuery } from 'react-responsive'
import HeaderLink from './HeaderLink'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import data from './data.json'
import { motion } from 'framer-motion'
import useLoadHeaderUser from './useLoadHeaderUser'

const Header = () => {
  const { currentUser } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation().pathname
  const lottieRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const [showMenu, setShowMenu] = useState(false)
  const [headerBg, setHeaderBg] = useState('bg-white')

  useEffect(() => {
    if (showMenu) {
      lottieRef.current.playSegments([0, 30], false)
    } else {
      /* lottieRef.current.setDirection(-1) */
      lottieRef.current.playSegments([30, 0], false)
    }
  }, [showMenu])

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

  useLoadHeaderUser(setUserName)

  return (
    <header className={`${showMenu ? 'h-full w-full bg-cream' : ''} fixed top-0 z-50 flex  w-full `}>
      <motion.nav
        className={`
        ${showMenu ? 'h-full flex-col bg-sand' : 'h-16'}
        ${headerBg}
      sticky flex  w-full items-center justify-center    md:h-14 md:justify-between  xl:h-[72px]   `}
        initial={isMobile ? 'closed' : 'none'}
        animate={isMobile ? (showMenu ? 'open' : 'closed') : 'none'}>
        <Link
          to="/"
          className={`${
            showMenu ? 'right-6' : 'left-2 hidden md:block '
          } absolute top-4 mb-1  w-40 font-headersc  text-lg font-bold
            text-blue  lg:left-6 lg:top-3 lg:w-52 lg:text-2xl xl:left-8 xl:left-6 xl:top-4 xl:w-64 xl:text-4xl`}>
          <img src="/src/assets/logo.png" alt="logo" />
        </Link>
        <div className="">
          <button className="absolute top-1 left-2 w-12 md:hidden" onClick={handleClickMenu}>
            <Lottie autoplay={false} loop={false} lottieRef={lottieRef} animationData={data} />
          </button>
          {currentUser ? (
            ''
          ) : (
            <Link
              to="login"
              className={`${showMenu ? 'hidden' : ''} absolute top-2 right-4 flex items-center p-2
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
          /*   style={{ pointerEvents: showMenu ? 'auto' : 'none' }} */
          style={showMenu ? { pointerEvents: 'auto' } : {}}
          className={`${
            showMenu
              ? 'absolute top-52 h-2/3 w-full flex-col items-start justify-start  '
              : 'hidden h-full  items-center justify-center '
          }  mx-4  md:mx-0 md:ml-40   md:flex md:flex-row lg:ml-60 xl:ml-80 `}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </div>

        {currentUser ? (
          <div
            className={`${
              showMenu
                ? 'absolute top-32 left-0 flex w-full items-center justify-center'
                : 'flex h-full w-full items-start justify-center md:w-auto'
            }`}>
            <div className="flex w-3/4 flex-col items-end">
              <motion.div
                className={`${
                  showMenu
                    ? ' flex h-8 w-full   justify-end '
                    : 'mr-12 flex hidden h-full w-full justify-end md:block xl:mr-16'
                }  ${username.length > 10 ? 'text-xl' : ' text-2xl'} md:h-14 md:w-auto    xl:mr-16 xl:h-[72px]`}>
                <div className=" hidden md:block">
                  <HeaderLink
                    title={username}
                    location="/profile"
                    currentLocation={currentLocation}
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                  />
                </div>
                <Link to="/profile" className={`${showMenu ? '' : 'hidden'} mr-2 font-header text-blue  md:hidden`}>
                  {username}
                </Link>
              </motion.div>
              <Link to="/profile" className={`${showMenu ? '' : 'hidden'} mr-2 font-header text-sm  text-blue`}>
                {currentUser.email}
              </Link>
            </div>
            <Link to="/profile" className="">
              <img
                id="myimg"
                className={`${
                  showMenu ? ' h-14 w-14' : ' absolute right-2 top-2  h-12 w-12'
                } rounded-full shadow-md md:top-[2px] md:h-12 md:h-11 md:w-12 md:w-11 lg:right-3 xl:right-5 xl:top-2 xl:h-14 xl:w-14`}
                src="/src/assets/profile.png"
                alt="userpic"
              />
            </Link>
          </div>
        ) : (
          <div className="right-2  z-50 mr-2 hidden h-full  items-center md:block xl:mr-12">
            <HeaderLink title="Sign In" location="/login" currentLocation={currentLocation} />
          </div>
        )}
      </motion.nav>
    </header>
  )
}

export default Header
