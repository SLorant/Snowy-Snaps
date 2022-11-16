import { useRef, useEffect} from 'react'
import WatchPage from './components/WatchPage'
import HomePage from './components/HomePage'
import LearnPage from './components/LearnPage';
import PlayPage from './components/PlayPage';
import SignInPage from './components/SignInPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";



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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="signin" element={<SignInPage />} />
       
      </Route>
    </Routes>
  </BrowserRouter>

    
 
  
  )
}


export default App
 /*<div>
    <Header id="header" title='HuskySite'   />
     <IntroPage   />
     <Footer/>
  </div> */