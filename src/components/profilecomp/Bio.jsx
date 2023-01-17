import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import updateBio from './updateBio'
import { motion } from 'framer-motion'

const Bio = ({ loadedBio }) => {
  const bioRef = useRef()
  const loadedLength = 150 - loadedBio.length
  const [charactersRemaining, setCharactersRemaining] = useState(loadedLength)
  const [error, setError] = useState('')
  const { currentUser } = useAuth()
  const userid = currentUser.uid
  const notInitialRender = useRef(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [showChar, setShowChar] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [bio, setBio] = useState('')

  /* useEffect(() => {
    bioRef.current.addEventListener('input', () => {
      setCharactersRemaining(150 - bioRef.current.value.length)
    })
  }, []) */

  useEffect(() => {
    bioRef.current.addEventListener('input', () => {
      setCharactersRemaining(150 - bioRef.current.value.length)
    })
  }, [])

  const handleOnChange = () => {
    setShowChar(true)
  }
  const handleOnClick = () => {
    setShowUpdate(true)
    setBio(bioRef.current.value)
  }
  const handleCancel = () => {
    setShowUpdate(false)
    setShowChar(false)
    updated
      ? (document.getElementById('area').value = bio)
      : (document.getElementById('area').value = loadedBio)
  }

  async function handleSubmit(e) {
    //e.preventDefault()
    //bio = bioRef.current.value
    setBio(bioRef.current.value)
    try {
      setError('')
      setShowChar(false)
      setShowUpdate(false)
      setUpdated(true)
      updateBio(userid, bioRef.current.value)
      //bioRef.current.value = ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">
      <div className="form-group mt-4 mb-4 flex h-44 w-72 flex-col items-end  ">
        {/* <input */}
        <div className="max-h-3/4 h-4/5 w-full rounded-lg   bg-cream  ">
          <label className="ml-2 font-header text-lg text-peach">Bio</label>
          <textarea
            /*      onClick={handleOnClick} */
            type="text"
            ref={bioRef}
            onChange={handleOnChange}
            onClick={handleOnClick}
            defaultValue={loadedBio}
            maxLength={150}
            id="area"
            className="mx-2  h-3/4 w-[95%] resize-none rounded-sm border-none bg-cream font-body text-darkblue outline-none"
          ></textarea>
        </div>
        {showChar && (
          <span className="ml-1 font-body text-xs text-darkblue">
            {charactersRemaining}
          </span>
        )}

        {showUpdate && (
          <div className="items-between mt-2 flex w-full justify-between">
            <motion.button
              onClick={handleCancel}
              className="text-md mt-0 flex h-6
        w-24  items-center justify-center rounded-md bg-sand font-headersc text-blue hover:bg-blue  hover:text-peach
               md:h-8 md:w-28 lg:w-32  xl:w-20  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              Cancel
            </motion.button>
            <motion.button
              onClick={handleSubmit}
              className="text-md mt-0 flex h-10
         w-24  items-center justify-center rounded-md bg-sand font-headersc  text-blue hover:bg-blue  hover:text-peach
                md:h-8 md:w-28 lg:w-32  xl:w-20  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <input
                className="cursor-pointer  "
                /* disabled={loading} */
                type="submit"
                value="Update"
              />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
