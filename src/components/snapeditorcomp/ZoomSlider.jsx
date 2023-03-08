import React from 'react'
import Slider from '@mui/material/Slider'

const ZoomSlider = ({ picture, setPicture }) => {
  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value,
    })
  }
  return (
    <div className="w-80">
      <div className="mt-1 hidden dark:block md:mt-4">
        <Slider
          className="slider "
          aria-label="raceSlider"
          value={picture.zoom}
          min={1}
          max={10}
          step={0.01}
          onChange={handleSlider}
          style={{ color: '#f8f0e2' }}
        />
      </div>
      <div className="mt-1 w-80 dark:hidden md:mt-4">
        <Slider
          className=""
          aria-label="raceSlider"
          value={picture.zoom}
          min={1}
          max={10}
          step={0.01}
          onChange={handleSlider}
          style={{ color: '#2d4550' }}
        />
      </div>
    </div>
  )
}

export default ZoomSlider
