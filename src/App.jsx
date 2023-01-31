import { useRef, useEffect } from 'react'
import WatchPage from './components/WatchPage'
import HomePage from './components/homepagecomp/HomePage'
import LearnPage from './components/learnpagecomp/LearnPage'
import PlayPage from './components/PlayPage'
import SignInPage from './components/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'
import LoginPage from './components/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/signincomponents/ForgotPassword'
import Profile from './components/profilecomp/Profile'
import UpdateProfile from './components/profilecomp/UpdateProfile'
import MyGallery from './components/profilecomp/MyGallery'
import UploadProfilePic from './components/profilecomp/UploadProfilePic'
import { useAuth } from './contexts/AuthContext'
import WithAuth from './WithAuth'
import LikedGallery from './components/profilecomp/LikedGallery'

function App() {
  /* let isAuth;
  async function  Auth() {
    isAuth = await useAuth().currentUser
  }
  Auth() */
  const ProtectedProfile = WithAuth(Profile)
  const ProtectedGallery = WithAuth(MyGallery)
  const ProtectedLikedGallery = WithAuth(LikedGallery)
  const ProtectedUploadProfile = WithAuth(UploadProfilePic)
  const ProtectedUpdateProfile = WithAuth(UpdateProfile)

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
            <Route path="learn" element={<LearnPage />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/:userId" element={<ProtectedProfile />} /* component={Profile} */ />
            <Route path="profile" element={<ProtectedProfile />} />
            <Route path="update-profile" element={<ProtectedUpdateProfile />} />
            <Route path="gallery" element={<ProtectedGallery />} />
            {/* <Route path="/:userId/gallery" element={<ProtectedGallery />} /> */}
            <Route path="liked-gallery" element={<ProtectedLikedGallery />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="signup" element={<SignInPage />} />
          <Route path="upload-profile" element={<ProtectedUploadProfile />} />
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
        /* render={() => (useAuth().currentUser ? <LearnPage /> : <LoginPage />)} 
        element={isAuth ? <SignInPage /> : <LoginPage />}
      />  */
