import { useState, useEffect, useRef, useCallback } from 'react'
import Lottie from 'lottie-react'
import dark from '../../assets/animations/dark.json'

const DarkModeToggle = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  const lottieRef = useRef(true)
  const firstRender = useRef(true)

  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkModeEnabled') === 'true'
    setIsDarkModeEnabled(isDarkMode)
    document.body.classList.toggle('dark', isDarkMode)
    if (isDarkMode && firstRender.current) {
      lottieRef.current.setDirection(direction)
      lottieRef.current.play()
      setDirection(-1)
    }
    firstRender.current = false
  }, [])

  function toggleDarkMode() {
    const newIsDarkModeEnabled = !isDarkModeEnabled
    setIsDarkModeEnabled(newIsDarkModeEnabled)
    document.body.classList.toggle('dark', newIsDarkModeEnabled)
    localStorage.setItem('isDarkModeEnabled', newIsDarkModeEnabled.toString())
    playLottie()
  }

  const playLottie = () => {
    if (direction === 1) {
      lottieRef.current.setDirection(direction)
      lottieRef.current.play()
      setDirection(-1)
    } else {
      lottieRef.current.setDirection(direction)
      lottieRef.current.play()
      setDirection(1)
    }
  }

  return (
    <div className=" mr-0  flex h-12 w-auto items-center justify-center xl:h-[72px] ">
      <button className="mr-2 h-14 w-14 md:mt-2 md:h-9 md:w-9 xl:mt-0 xl:h-11 xl:w-11" onClick={toggleDarkMode}>
        <Lottie autoplay={false} loop={false} animationData={dark} lottieRef={lottieRef} />
      </button>
    </div>
  )
}

export default DarkModeToggle
