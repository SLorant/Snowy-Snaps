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
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1><Header title='A husky website'   />
     <IntroPage />
     <UpperBox className="bg-blue-700"/>
  </div>
  )
}

export default App
