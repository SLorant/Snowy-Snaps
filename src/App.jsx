import { useRef, useEffect} from 'react'
import Header from './components/Header'
import IntroPage from './components/IntroPage'
import UpperBox from './components/UpperBox'
import useIntersection from './components/useIntersection'

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

  const ref = useRef();
  const inViewport = useIntersection(ref, '130px'); // Trigger as soon as the element becomes visible

  

  return (
    <div>
    <Header id="header" title='HuskySite'   />
   
     <IntroPage />
     <UpperBox />
     <img src="src/assets/huskieslove.gif" alt="huskylove" className={`z-0 fixed top-60 
     ${inViewport ? "absolute top-[660px]" : "fixed"} opacity-40 w-full`} />
     <div className="h-96"></div>
     
     <div ref={ref} id="see" className="h-80 bg-red-400"></div>
     <div className="h-80"></div>
     <div className="h-32 bg-blue-700 absolute  opacity-20 w-full"></div>
     
  </div>
  )
}

export default App
