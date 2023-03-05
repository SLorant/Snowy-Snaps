import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import UpdateBio from './UpdateBio'
import { motion } from 'framer-motion'

const Bio = ({ loadedBio, canEdit }) => {
  const bioRef = useRef()
  const loadedLength = 150 - loadedBio.length
  const [charactersRemaining, setCharactersRemaining] = useState(loadedLength)
  const { currentUser } = useAuth()
  let userid
  if (currentUser) userid = currentUser.uid
  const [showUpdate, setShowUpdate] = useState(false)
  const [showChar, setShowChar] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [bio, setBio] = useState('')

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
    updated ? (document.getElementById('area').value = bio) : (document.getElementById('area').value = loadedBio)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    setBio(bioRef.current.value)
    try {
      setShowChar(false)
      setShowUpdate(false)
      setUpdated(true)
      UpdateBio(userid, bioRef.current.value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full">
      <div className="form-group mt-2 flex h-52   w-80 flex-col  items-end md:mb-4  ">
        <div className="max-h-3/4 h-4/5 w-full rounded-lg bg-cream  dark:bg-blue  ">
          <label className="ml-2 font-header text-2xl text-peach dark:text-cream">Bio</label>
          <textarea
            type="text"
            ref={bioRef}
            onChange={handleOnChange}
            onClick={handleOnClick}
            defaultValue={loadedBio}
            maxLength={150}
            disabled={canEdit ? false : true}
            id="area"
            className="mx-2 h-2/3 w-[95%] resize-none rounded-md border-none bg-cream font-body
             text-darkblue outline-none dark:bg-blue dark:text-cream"></textarea>
        </div>
        {showChar && canEdit && (
          <span className="ml-1 font-body text-sm text-darkblue dark:text-sand">{charactersRemaining}</span>
        )}

        {showUpdate && canEdit && (
          <div className="items-between mt-1 mb-4 flex w-full justify-between">
            <motion.button
              onClick={handleCancel}
              className="text-md mt-0 flex h-8 w-24 items-center justify-center rounded-md bg-sand font-header
                  text-blue hover:bg-blue hover:text-peach dark:bg-blue dark:text-cream dark:hover:text-peach md:h-8 md:w-28 lg:w-32  xl:w-20  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              Cancel
            </motion.button>
            <motion.button
              onClick={handleSubmit}
              className="text-md mt-0 flex h-8 w-24 items-center justify-center rounded-md bg-sand font-header
                  text-blue hover:bg-blue hover:text-peach dark:bg-blue dark:text-cream dark:hover:text-peach md:h-8 md:w-28 lg:w-32  xl:w-20  "
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
              <input className="cursor-pointer  " type="submit" value="Update" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
