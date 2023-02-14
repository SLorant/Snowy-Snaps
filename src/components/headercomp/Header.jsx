import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import HeaderLink from './HeaderLink'
import { useLocation, Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import data from './data.json'
import { HalfSun } from '@theme-toggles/react'

const Header = () => {
  const { currentUser } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation()
  const currLoc = currentLocation.pathname
  const lottieRef = useRef()
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
    if (showMenu) {
      lottieRef.current.playSegments([0, 30], false)
    } else {
      /* lottieRef.current.setDirection(-1) */
      lottieRef.current.playSegments([30, 0], false)
      console.log(showMenu)
    }
  }, [showMenu])

  const handleClickMenu = () => {
    setShowMenu(!showMenu)
    /* showMenu ? lottieRef.current.play() : lottieRef.current.pause() */
  }
  const [headerBg, setHeaderBg] = useState('bg-white')
  const setBg = () => {
    switch (currLoc) {
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
  })

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
      className={`${showMenu ? 'h-full w-full bg-cream' : ''} fixed top-0 z-50 flex  w-full `}>
      <nav
        className={`
        ${showMenu ? 'h-2/3' : 'h-16'}
        ${headerBg}
      sticky flex  w-full  items-center justify-center  md:h-14 md:justify-between  xl:h-[72px]   `}>
        <a
          href="#"
          className="absolute left-2 top-4 mb-1 hidden w-40 font-headersc  text-lg font-bold
         text-blue md:block lg:left-6 lg:top-4 lg:w-52 lg:text-2xl xl:left-8 xl:left-6 xl:top-4 xl:w-64 xl:text-4xl">
          <img src="/src/assets/logo.png" alt="logo" />
        </a>
        <div className="">
          <button className="absolute top-1 left-2 w-12 md:hidden" onClick={handleClickMenu}>
            <Lottie autoplay={false} loop={false} lottieRef={lottieRef} animationData={data} />
          </button>
        </div>

        <div
          className={`${
            showMenu
              ? 'h-2/3 w-full flex-col items-start justify-start  '
              : 'hidden h-full w-full items-center justify-center md:flex'
          }  mx-4 grid grid-cols-2 md:ml-40   md:flex md:flex-row lg:ml-60 xl:ml-80`}>
          <div className="flex h-28 w-40 items-center justify-center rounded-md bg-cream">
            <HeaderLink title="Home" location="/" currLoc={currLoc} showMenu={showMenu} />
          </div>
          <div className="flex h-28 w-40 items-center justify-center rounded-md bg-cream">
            <HeaderLink title="Gallery" location="/watch" currLoc={currLoc} showMenu={showMenu} />
          </div>
          <div className="flex h-28 w-40 items-center justify-center rounded-md bg-cream">
            <HeaderLink
              title="Huskypedia"
              location="/learn"
              currLoc={currLoc}
              showMenu={showMenu}
            />
          </div>
          <div className="flex h-28 w-40 items-center justify-center rounded-md bg-cream md:hidden">
            <HeaderLink title="Profile" location="/learn" currLoc={currLoc} showMenu={showMenu} />
          </div>

          {/*  <div className="md:hidden">
            <HeaderLink
              title="My Gallery"
              location="/learn"
              currLoc={currLoc}
              showMenu={showMenu}
            />
          </div>*/}
          <div className="col-span-2 flex h-28 w-full items-center justify-center rounded-md bg-cream md:hidden">
            <HeaderLink
              title="Upload picture"
              location="/learn"
              currLoc={currLoc}
              showMenu={showMenu}
            />
          </div>
          <button className="h-40 w-40">
            <HalfSun className="" />
          </button>
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
