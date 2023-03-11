import { useAuth } from '../../contexts/AuthContext'
import HeaderLink from './HeaderLink'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

const MobileHeaderUserInfo = ({ showMenu, setShowMenu, username }) => {
  const { currentUser } = useAuth()
  const currentLocation = useLocation().pathname
  const handleOnLinkClick = () => {
    setShowMenu(false)
  }
  return (
    <div
      className={`${
        showMenu
          ? 'absolute top-32 left-8 flex w-full items-center justify-center'
          : 'flex h-full w-full items-start justify-center md:w-auto'
      }`}>
      <div className="hidden md:block">
        <DarkModeToggle />
      </div>
      <div className="flex  flex-col items-end ">
        <motion.div
          className={`${
            showMenu
              ? ' flex h-8 w-full   justify-end '
              : 'mr-12 flex hidden h-full w-full justify-end md:block xl:mr-24'
          }  ${username.length > 10 ? 'text-xl' : ' text-2xl'} md:h-14 md:w-auto    xl:mr-16 xl:h-[72px]`}>
          <div className="hidden md:block">
            <HeaderLink
              title={username}
              location="/profile/me"
              currentLocation={currentLocation}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
          <Link
            onClick={handleOnLinkClick}
            to="/profile/me"
            className={`${showMenu ? '' : 'hidden'} mr-2 font-header text-blue dark:text-cream  md:hidden`}>
            {username}
          </Link>
        </motion.div>
        <Link
          onClick={handleOnLinkClick}
          to="/profile/me"
          className={`${showMenu ? '' : 'hidden'} mr-2 font-header text-sm text-blue  dark:text-cream`}>
          {currentUser.email}
        </Link>
      </div>
      <Link onClick={handleOnLinkClick} to="/profile/me" className="">
        <img
          id="myimg"
          className={`${
            showMenu ? ' h-14 w-14' : ' absolute right-2 top-2  h-12 w-12'
          } rounded-full shadow-md md:top-[2px] md:h-12 md:h-11 md:w-12 md:w-11 lg:right-3 xl:right-5 xl:top-2 xl:h-14 xl:w-14`}
          src="/src/assets/avatars/profile.png"
          alt="userpic"
        />
      </Link>
    </div>
  )
}

export default MobileHeaderUserInfo
