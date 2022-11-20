import { useRef, useEffect} from 'react'
import WatchPage from './components/WatchPage'
import HomePage from './components/HomePage'
import LearnPage from './components/LearnPage';
import PlayPage from './components/PlayPage';
import SignInPage from './components/SignInPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from './contexts/AuthContext'
import Login from './components/signincomponents/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/signincomponents/ForgotPassword';



function App() {
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
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
    </AuthProvider>
  </BrowserRouter>

    
 
  
  )
}


export default App
 /*<div>
    <Header id="header" title='HuskySite'   />
     <IntroPage   />
     <Footer/>
  </div> */