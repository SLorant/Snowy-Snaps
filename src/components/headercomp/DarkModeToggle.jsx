import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import Lottie from 'lottie-react'
import dark from '../../assets/animations/dark.json'

const DarkModeToggle = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  const lottieRef = useRef()
  const firstRender = useRef(true)
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true'
    setIsDarkModeEnabled(isDarkModeEnabled)
    document.body.classList.toggle('dark', isDarkModeEnabled)
    isDarkModeEnabled && firstRender.current && lottieRef.current.playSegments([0, 40])
    firstRender.current = false
  }, [])

  function toggleDarkMode() {
    const newIsDarkModeEnabled = !isDarkModeEnabled
    setIsDarkModeEnabled(newIsDarkModeEnabled)
    document.body.classList.toggle('dark', newIsDarkModeEnabled)
    playLottie()
    localStorage.setItem('isDarkModeEnabled', newIsDarkModeEnabled.toString())
  }
  const playLottie = useCallback(() => {
    if (!firstRender.current) {
      if (isDarkModeEnabled) {
        lottieRef.current.playSegments([40, 0])
      } else {
        lottieRef.current.playSegments([0, 40])
      }
    }
  }, [isDarkModeEnabled])

  return (
    <div className=" mr-0  flex h-12 w-auto items-center justify-center xl:h-[72px] ">
      <button className="mr-2 h-14 w-14 md:mt-2 md:h-9 md:w-9 xl:mt-0 xl:h-11 xl:w-11" onClick={toggleDarkMode}>
        <Lottie autoplay={false} loop={false} lottieRef={lottieRef} animationData={dark} />
      </button>
    </div>
  )
}

export default DarkModeToggle
