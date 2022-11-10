import { useRef, useEffect} from 'react'

import WatchPage from './components/WatchPage'
import Home from './components/Home'
import LearnPage from './components/LearnPage';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";



function App() {
  useEffect(() => {
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
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learnpage" element={<LearnPage />} />
        <Route path="watchpage" element={<WatchPage />} />
       
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