import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import HeaderLink from './HeaderLink'
import { useLocation, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import data from './data.json'

const Header = () => {
  const { currentUser } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation()
  const currLoc = currentLocation.pathname
  /*  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: data,
  } */
  /* const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  } */

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (currentUser) {
      async function loadProfilePic() {
        try {
          const docRef = doc(projectFirestore, 'users', currentUser.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            setUserName(data.username)
          } else console.log('No such document!')

          const url = await getDownloadURL(
            ref(projectStorage, `${currentUser.uid}/profilepics/image`),
          )
          const img = document.getElementById('myimg')
          img.setAttribute('src', url)
        } catch (error) {
          /*  console.log("user has no profile pic:", error)
        console.log("Error getting user data:", error); */
        }
      }
      loadProfilePic()
    }
  }, [currentUser])

  return (
    <header
      className={`${showMenu ? 'h-full w-full bg-cream' : ''} fixed top-0 z-40 flex  w-full `}>
      <nav
        className={`${
          currLoc === '/'
            ? 'bg-sand'
            : currLoc === '/watch'
            ? 'bg-white'
            : currLoc === '/my-gallery'
            ? 'bg-white '
            : 'bg-cream'
        } 
        ${showMenu ? 'h-2/3 bg-cream' : 'h-16'}
      sticky flex  w-full  items-center justify-between md:h-14  xl:h-[72px]   `}>
        <a
          href="#"
          className="absolute left-2 top-4 mb-1 hidden w-40 font-headersc  text-lg font-bold
         text-blue md:block lg:left-6 lg:top-4 lg:w-52 lg:text-2xl xl:left-8 xl:left-6 xl:top-4 xl:w-64 xl:text-4xl">
          <img src="/src/assets/logo.png" alt="logo" />
        </a>
        <button
          className="absolute top-1 left-2 md:hidden"
          onClick={() => {
            setShowMenu(!showMenu)
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="55"
            height="55"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        <div
          className={`${
            showMenu
              ? 'h-2/3 flex-col items-start justify-start '
              : 'hidden h-full w-full items-center justify-center md:flex'
          } flex    md:ml-40 md:flex-row lg:ml-60 xl:ml-80`}>
          <HeaderLink title="Home" location="/" currLoc={currLoc} showMenu={showMenu} />
          <div className="w-10">
            <Lottie loop={true} animationData={data} />
          </div>
          <HeaderLink title="Gallery" location="/watch" currLoc={currLoc} showMenu={showMenu} />
          <HeaderLink title="Huskypedia" location="/learn" currLoc={currLoc} showMenu={showMenu} />
          <div className="md:hidden">
            <HeaderLink title="Profile" location="/learn" currLoc={currLoc} showMenu={showMenu} />
          </div>

          <div className="md:hidden">
            <HeaderLink
              title="My Gallery"
              location="/learn"
              currLoc={currLoc}
              showMenu={showMenu}
            />
          </div>
          <div className="md:hidden">
            <HeaderLink
              title="Upload picture"
              location="/learn"
              currLoc={currLoc}
              showMenu={showMenu}
            />
          </div>
        </div>

        {useAuth().currentUser ? (
          <div
            className={`${
              showMenu ? '' : 'flex h-full w-full items-start justify-center md:w-auto'
            }  `}>
            <div
              className={`${
                showMenu
                  ? 'absolute top-2 right-20 '
                  : 'mr-16 flex hidden h-full w-full justify-end'
              }     md:block md:w-auto xl:mr-24`}>
              <HeaderLink title={username} location="/profile" currLoc={currLoc} />
            </div>
            <Link to="/profile" className="">
              <img
                id="myimg"
                className="absolute right-2 top-2 h-12 w-12 rounded-full shadow-md md:top-[2px] md:h-11 md:w-11 lg:right-3 xl:right-5 xl:top-2 xl:h-14 xl:w-14"
                src="src\assets\profile.png"
                alt="userpic"
              />
            </Link>
          </div>
        ) : (
          <div className="absolute right-2 mr-2  h-full items-center xl:mr-12">
            <HeaderLink title="Sign In" location="/login" currLoc={currLoc} />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
