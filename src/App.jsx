import { useRef, useEffect} from 'react'
import WatchPage from './components/WatchPage'
import HomePage from './components/HomePage'
import LearnPage from './components/LearnPage';
import PlayPage from './components/PlayPage';
import SignInPage from './components/SignUpPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from './contexts/AuthContext'
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/signincomponents/ForgotPassword';
import Profile from './components/profilecomp/Profile';
import MyGallery from './components/profilecomp/MyGallery';
import UploadProfilePic from './components/profilecomp/UploadProfilePic';
import ImgCrop from './components/profilecomp/ImgCrop';
import { useAuth } from './contexts/AuthContext'



function App() {
 
  const isAuth = true;
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
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="login" element={<LoginPage/>} />
       
        <Route
        path="/protected"
        render={() => (useAuth().currentUser ? <LearnPage /> : <LoginPage />)}
      />
      
        <Route path="profile" element={<Profile />} />
        <Route path="my-gallery" element={<MyGallery />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        
      </Route>
      <Route path="signup" element={<SignInPage />} />
      <Route path="upload-profile" element={<UploadProfilePic />} />
      <Route path="imgcrop" element={<ImgCrop/>} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>

  </div>
 
  
  )
}


export default App
 /*<div>
    <Header id="header" title='HuskySite'   />
     <IntroPage   />
     <Footer/>
  </div> */