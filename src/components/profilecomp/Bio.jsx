import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import updateBio from './updateBio'
import { motion } from 'framer-motion'

const Bio = ({ loadedBio }) => {
  const userNameRef = useRef()
  const [charactersRemaining, setCharactersRemaining] = useState(150)
  const [error, setError] = useState('')
  const { currentUser } = useAuth()
  const userid = currentUser.uid

  useEffect(() => {
    userNameRef.current.addEventListener('input', () => {
      setCharactersRemaining(150 - userNameRef.current.value.length)
    })
  }, [])

  async function handleSubmit(e) {
    //e.preventDefault()
    const bio = userNameRef.current.value
    try {
      setError('')
      updateBio(userid, bio)
      //userNameRef.current.value = ''
    } catch (error) {
      console.log(error)
    }
  }
  //console.log(loadedBio)

  return (
    <div>
      <div className="form-group ml-12 mb-4 flex h-44 w-72  flex-col">
        <label className="font-header  text-blue ">Bio</label>
        {/* <input */}
        <div className="h-full w-full rounded-lg border-2 border-blue  ">
          <textarea
            type="text"
            ref={userNameRef}
            defaultValue={loadedBio}
            maxLength={150}
            className="h-full w-full rounded-sm bg-white font-body text-darkblue"
          ></textarea>
        </div>
        <span className="font-body text-xs text-darkblue">
          {charactersRemaining}
        </span>
      </div>
      <motion.button
        onClick={handleSubmit}
        className="mt-4 flex h-10 w-24
         items-center  justify-center rounded-md bg-sand font-headersc text-lg  text-blue hover:bg-blue  hover:text-peach
                md:h-12 md:w-28 lg:w-32  xl:w-32  "
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
  )
}

export default Bio
