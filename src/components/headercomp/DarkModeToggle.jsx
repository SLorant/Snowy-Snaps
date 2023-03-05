import React from 'react'
import { useState, useEffect } from 'react'
const DarkModeToggle = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)

  /* useEffect(() => {
    const storedDarkModeValue = localStorage.getItem('isDarkModeEnabled')
    setIsDarkModeEnabled(storedDarkModeValue === 'true')
  }, []) */

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true'
    setIsDarkModeEnabled(isDarkModeEnabled)
    document.body.classList.toggle('dark', isDarkModeEnabled)
  }, [])

  function toggleDarkMode() {
    const newIsDarkModeEnabled = !isDarkModeEnabled
    setIsDarkModeEnabled(newIsDarkModeEnabled)
    document.body.classList.toggle('dark', newIsDarkModeEnabled)
    localStorage.setItem('isDarkModeEnabled', newIsDarkModeEnabled.toString())
  }

  /* function toggleDarkMode() {
    const newDarkModeValue = !isDarkModeEnabled

    // Update the state variable
    setIsDarkModeEnabled(newDarkModeValue)

    // Update the local storage
    localStorage.setItem('isDarkModeEnabled', newDarkModeValue)

    // Toggle the `dark` class on the `body` element
    document.body.classList.toggle('dark')
  } */
  return (
    <div className=" mr-0  flex h-full w-auto items-center justify-center ">
      <button onClick={toggleDarkMode}>{isDarkModeEnabled ? 'Disable' : 'Enable'} Dark Mode</button>
    </div>
  )
}

export default DarkModeToggle
