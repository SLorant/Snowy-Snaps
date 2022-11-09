import { useRef, useEffect} from 'react'
import Header from './components/Header'
import IntroPage from './components/IntroPage'
import Footer from './components/Footer'

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
    <Header id="header" title='HuskySite'   />
     <IntroPage   />
     <Footer/>
  </div>
  )
}

export default App
