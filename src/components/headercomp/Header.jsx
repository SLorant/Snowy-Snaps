import { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useMediaQuery } from 'react-responsive'
console.log(useMediaQuery)
import HeaderLink from './HeaderLink'
import { useLocation, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import menu from '../../animations/menu.json'
import menudark from '../../animations/menudark.json'
import { motion } from 'framer-motion'
import LoadHeaderUser from './LoadHeaderUser'
import MobileHeaderUserInfo from './MobileHeaderUserInfo'
import LogoutIcon from '../../icons/LogoutIcon'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  const { currentUser, logout } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation().pathname
  const currentUrl = currentLocation.substring(currentLocation.lastIndexOf('/') + 1)
  const lottieRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const [showMenu, setShowMenu] = useState(false)
  const [headerBg, setHeaderBg] = useState('bg-white')
  const [direction, setDirection] = useState(1)
  const [animationData, setAnimationData] = useState(menu)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const isDarkMode = localStorage.getItem('isDarkModeEnabled') === 'true'
  const setBg = () => {
    switch (currentLocation) {
      case '/':
        setHeaderBg('bg-sand dark:bg-darkblue')
        break
      case '/watch':
        setHeaderBg('bg-white dark:bg-darkblue')
        break
      case '/learn':
        setHeaderBg('bg-cream dark:bg-blue')
        break
      case '/login':
        setHeaderBg('bg-white md:bg-cream dark:bg-blue dark:md:bg-darkblue')
        break
      case '/forgotpassword':
        setHeaderBg('bg-white md:bg-cream dark:bg-blue dark:md:bg-darkblue')
        break
      case '/privacypolicy':
      case '/termsconditions':
      case '/cookiepolicy':
        setHeaderBg('bg-white dark:bg-blue dark:md:bg-darkblue')
        break
      default:
        setHeaderBg('bg-white md:bg-cream dark:bg-darkblue dark:md:bg-blue')
    }
  }
  useEffect(() => {
    isDarkMode ? setAnimationData(menudark) : setAnimationData(menu)
    if (lottieRef.current) {
      if (isFirstRender) {
        lottieRef.current.goToAndStop(0, true)
        setIsFirstRender(false)
      } else lottieRef.current.goToAndStop(45, true)
    }
  }, [isDarkMode])

  const handleExitMenu = () => {
    lottieRef.current.setDirection(-1)
    lottieRef.current.play()
    setDirection(1)
  }

  useEffect(() => {
    setBg()
    if (currentUrl === 'gallery') setHeaderBg('bg-white dark:bg-darkblue')
    if (showMenu) setHeaderBg('bg-sand dark:bg-darkblue')
    if (!isMobile) setShowMenu(false)
  })

  const playLottie = () => {
    lottieRef.current.setSpeed(1.25)
    if (direction === 1) {
      lottieRef.current.setDirection(direction)
      lottieRef.current.play()
      setDirection(-1)
    } else {
      lottieRef.current.setDirection(direction)
      lottieRef.current.play()
      setDirection(1)
    }
  }

  const handleClickMenu = () => {
    setShowMenu(!showMenu)
    playLottie()
  }

  async function handleLogout() {
    try {
      await logout()
      setShowMenu(false)
      navigate('/')
    } catch (error) {
      //console.log(error)
    }
  }

  LoadHeaderUser(setUserName)

  return (
    <header className={`${showMenu && 'h-full w-full bg-cream dark:bg-blue'} fixed top-0 z-50 flex  w-full `}>
      <motion.nav
        className={`
          ${showMenu ? 'h-full flex-col  bg-sand dark:bg-darkblue' : 'h-16'}
          ${headerBg} sticky flex  w-full items-center justify-center    md:h-14 md:justify-between  xl:h-[72px]   `}
        initial={isMobile ? 'closed' : 'none'}
        animate={isMobile ? (showMenu ? 'open' : 'closed') : 'none'}>
        <Link
          to="/"
          className={`${showMenu ? 'right-4' : 'left-2 hidden md:block '} 
            absolute top-4 mb-1  w-40  lg:left-6 lg:top-3 lg:w-52  xl:left-8 xl:left-6 xl:top-4 xl:w-64 `}>
          <img className="block dark:hidden" src="/assets/icons/logo.png" alt="logo" />
          <img className="hidden dark:block" src="/assets/icons/logocream.png" alt="logo" />
        </Link>
        <div className="">
          <button className="absolute top-2 left-3 w-11 md:hidden" onClick={handleClickMenu}>
            <Lottie autoplay={false} loop={false} lottieRef={lottieRef} animationData={animationData} />
          </button>

          {!currentUser && (
            <Link
              to="login"
              className={`${showMenu && 'hidden'} absolute top-2 right-4 flex items-center p-2
             px-2  text-center font-header text-2xl text-blue dark:text-cream  sm:hidden`}>
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
          }  ${currentUser ? 'xl:ml-96' : 'xl:ml-72'}
              mx-4  md:mx-0 md:ml-40   md:flex md:flex-row lg:ml-60  `}>
          <HeaderLink
            setDirection={setDirection}
            lottieRef={lottieRef}
            title="Home"
            location="/"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <HeaderLink
            setDirection={setDirection}
            lottieRef={lottieRef}
            title="Gallery"
            location="/watch"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <HeaderLink
            setDirection={setDirection}
            lottieRef={lottieRef}
            title="Huskypedia"
            location="/learn"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          {currentUser ? (
            <div className="w-full md:hidden">
              <div className="w-full md:hidden">
                <HeaderLink
                  setDirection={setDirection}
                  lottieRef={lottieRef}
                  title="Profile"
                  location="/profile/me"
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                />
              </div>
              <div className="w-full md:hidden">
                <HeaderLink
                  setDirection={setDirection}
                  lottieRef={lottieRef}
                  title="My Snaps"
                  location={`/profile/${username}/gallery`}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                />
              </div>
            </div>
          ) : (
            <div className="w-full md:hidden">
              <HeaderLink
                setDirection={setDirection}
                lottieRef={lottieRef}
                title="Register"
                location={`signup`}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            </div>
          )}
        </motion.div>
        <div
          className={`${
            showMenu ? 'absolute bottom-6' : 'hidden'
          } mx-4 flex w-[91%] items-end justify-between md:hidden`}>
          <DarkModeToggle setAnimationData={setAnimationData} />
          <button className={`${!currentUser && 'hidden'} cursor-pointer`} onClick={handleLogout}>
            <LogoutIcon />
          </button>
        </div>
        {currentUser ? (
          <MobileHeaderUserInfo
            setDirection={setDirection}
            lottieRef={lottieRef}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            username={username}
          />
        ) : (
          <div className="right-2 z-50 mr-2 flex hidden h-full  md:block xl:mr-10">
            <div className="absolute right-24 hidden md:block lg:right-28 xl:right-44 2xl:right-48">
              <DarkModeToggle setAnimationData={setAnimationData} />
            </div>

            <HeaderLink
              setDirection={setDirection}
              lottieRef={lottieRef}
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
