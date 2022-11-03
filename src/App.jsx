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
  const inViewport = useIntersection(ref, '-250px'); // Trigger as soon as the element becomes visible

  
  
  return (
    <div>
    <Header id="header" title='HuskySite'   />
   
     <IntroPage />
     
     <img src="src/assets/huskieslove.gif" alt="huskylove" className={`z-0 absolute top-60 
    opacity-40 w-full`} />
     <div  ref={ref} className="h-[1700px] absolute top-[980px] w-full">
        <div id="husky-media" className="h-20  bg-red-400 flex justify-center items-center">
          <h2  className='font-hbold text-2xl tracking-wide'>Husky media</h2>
        </div>
        <UpperBox />
        <div className="h-80"></div>
        <div className="h-32 bg-blue-700 absolute  opacity-20 w-full"></div>
     </div>
    
     
     
  </div>
  )
}

export default App
