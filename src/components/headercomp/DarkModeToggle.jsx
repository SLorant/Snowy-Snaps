import React from 'react'
import { useState, useEffect } from 'react'
const DarkModeToggle = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true'
    setIsDarkModeEnabled(isDarkModeEnabled)
    document.body.classList.toggle('dark', isDarkModeEnabled)
    /*    if (isDarkModeEnabled) {
      document.body.classList.add('bg-dark')
    } else {
      document.body.classList.remove('bg-dark')
    } */
  }, [])

  function toggleDarkMode() {
    const newIsDarkModeEnabled = !isDarkModeEnabled
    setIsDarkModeEnabled(newIsDarkModeEnabled)
    document.body.classList.toggle('dark', newIsDarkModeEnabled)

    localStorage.setItem('isDarkModeEnabled', newIsDarkModeEnabled.toString())
  }

  return (
    <div className=" H-14  mr-0 flex w-auto items-center justify-center xl:h-[72px] ">
      <button onClick={toggleDarkMode}>{isDarkModeEnabled ? 'Disable' : 'Enable'} Dark Mode</button>
    </div>
  )
}

export default DarkModeToggle
