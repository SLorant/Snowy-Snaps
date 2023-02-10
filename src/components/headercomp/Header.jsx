import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { projectFirestore, projectStorage } from '../../../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import HeaderLink from './HeaderLink'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { currentUser } = useAuth()
  const [username, setUserName] = useState('')
  const currentLocation = useLocation()
  const currLoc = currentLocation.pathname

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
    <header className="fixed top-0 z-40 flex  w-full ">
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
        sticky flex h-14  w-full items-center justify-between  xl:h-[72px]   `}>
        <a
          href="#"
          className="absolute left-2 top-4 mb-1 w-44  font-headersc text-lg
         font-bold text-blue lg:left-6 lg:top-4 lg:w-52 lg:text-2xl xl:left-8 xl:left-6 xl:top-4 xl:w-64 xl:text-4xl">
          <img src="/src/assets/logo.png" alt="logo" />
        </a>

        <div className=" ml-40 flex h-full w-2/3 items-center justify-center lg:ml-60 xl:ml-80">
          <HeaderLink title="Home" location="/" currLoc={currLoc} />
          <HeaderLink title="Gallery" location="/watch" currLoc={currLoc} />
          <HeaderLink title="Huskypedia" location="/learn" currLoc={currLoc} />
        </div>

        {useAuth().currentUser ? (
          <div className="flex h-full items-start  justify-center">
            <div className="mr-16 h-full w-full xl:mr-24">
              <HeaderLink title={username} location="/profile" currLoc={currLoc} />
            </div>
            <img
              id="myimg"
              className="absolute right-2 top-[2px] h-11 w-11 rounded-full shadow-md lg:right-3 xl:right-5 xl:top-2 xl:h-14 xl:w-14"
              src="src\assets\profile.png"
              alt="userpic"
            />
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
