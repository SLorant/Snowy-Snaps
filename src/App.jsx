import { useRef, useEffect } from 'react'
import WatchPage from './components/WatchPage'
import HomePage from './components/homepagecomp/HomePage'
import HuskyPedia from './components/huskypediacomp/HuskyPedia'
import PlayPage from './components/PlayPage'
import SignInPage from './components/authcomp/SignUpPage'
import LoginPage from './components/authcomp/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/profilecomp/Profile'
import MySnaps from './components/profilecomp/MySnaps'
import ChangeUserAvatar from './components/profilecomp/ChangeUserAvatar'
import { useAuth } from './contexts/AuthContext'
import WithAuth from './WithAuth'

function App() {
  /* let isAuth;
  async function  Auth() {
    isAuth = await useAuth().currentUser
  }
  Auth() */
  const ProtectedProfile = WithAuth(Profile)
  const ProtectedChangeUserAvatar = WithAuth(ChangeUserAvatar)

  /*useEffect(() => {
    const getHuskies = async() => {
      const huskiesFromServer = await fetchHusky()

    }

    fetchHusky()
  }, [])
  //Fetch data
  const fetchHusky = async() => {
    const res = await fetch('http://localhost:5000/huskies')
    const data = await res.json()

    return data
  }*/

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="learn" element={<HuskyPedia />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/:userId" element={<Profile />} />
            <Route path="profile" element={<ProtectedProfile />} />
            <Route path="/:userId/gallery" element={<MySnaps />} />
          </Route>
          <Route path="signup" element={<SignInPage />} />
          <Route path="upload-profile" element={<ProtectedChangeUserAvatar />} />
          {/* <Route path="imgcrop" element={<ImgCrop/>} /> */}
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
/*<div>
    <Header id="header" title='HuskySite'   />
     <IntroPage   />
     <Footer/>
  </div> */

/* {/* <Route
        path="/protected"
        /* render={() => (useAuth().currentUser ? <HuskyPedia /> : <LoginPage />)} 
        element={isAuth ? <SignInPage /> : <LoginPage />}
      />  */
