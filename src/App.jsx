import { useState, useEffect} from 'react'
import Header from './components/Header'
import IntroPage from './components/IntroPage'
import UpperBox from './components/UpperBox'

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
    <div>
    <Header title='A husky website'   />
    
     <IntroPage />
     <UpperBox />
  </div>
  )
}

export default App
