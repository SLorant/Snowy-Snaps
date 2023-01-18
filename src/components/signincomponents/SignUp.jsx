import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { createUserDocument, auth } from '../../../firebase/config'
import useStorage from '../hooks/useStorage'
import ProgressBar from '../watchpagecomp/ProgressBar'

//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  //const provider = new GoogleAuthProvider();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const userNameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [charactersRemaining, setCharactersRemaining] = useState(20)
  const uploadType = 'profile'

  useEffect(() => {
    userNameRef.current.addEventListener('input', () => {
      setCharactersRemaining(20 - userNameRef.current.value.length)
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Passwords don't match")
    const username = userNameRef.current.value

    try {
      setError('')
      setLoading(true)
      console.log(emailRef.current.value)
      const { user } = await signup(emailRef.current.value, passwordRef.current.value)

      console.log(user)

      //await signup(emailRef.current.value, passwordRef.current.value, )
      await createUserDocument(user, { username })
      const response = await fetch('src/assets/avatars/normalavatar.png')
      const file = await response.arrayBuffer()
      console.log(file)
      var newFile = new File([file], 'my_image.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      })
      setFile(newFile)

      /* navigate('/upload-profile') */
    } catch (error) {
      if (passwordRef.current.value.length < 6) {
        setError('Password have to be at least 6 characters long')
      } else setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
      <div className="flex w-full flex-col items-center  justify-center  ">
        {error && (
          <div
            className="mb-6 flex h-16 w-80 items-center justify-center
     text-center  font-header text-lg text-blue">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-68 flex flex-col items-center justify-center">
          <div className="form-group flex w-60  flex-col  ">
            <div className="flex items-center justify-between">
              <label className="font-header text-blue  ">Email</label>
              <div className=" group relative h-4 w-4">
                <img
                  className=" h-4 w-4 cursor-pointer"
                  src="./src/assets/question.png"
                  alt="questionmark"
                />
                <div
                  className="group-hover:bg-slate-700 invisible absolute  right-7 -top-10 
                h-14 w-48 rounded-md bg-blue group-hover:visible md:left-7 md:-top-3  ">
                  <p className="mt-2 ml-2 font-body text-sm text-white">
                    Email format required. <br /> user.name@example.com
                  </p>
                </div>
              </div>
            </div>
            <input
              type="email"
              ref={emailRef}
              required
              className="h-8 rounded-sm bg-cream font-body  text-darkblue"
            />
          </div>

          <div className="form-group my-6 flex w-60 flex-col">
            <div className="flex items-center justify-between">
              <label className="font-header text-blue ">Password</label>
              <div className=" group relative h-4 w-4">
                <img
                  className=" h-4 w-4 cursor-pointer"
                  src="./src/assets/question.png"
                  alt="questionmark"
                />
                <div
                  className="group-hover:bg-slate-700 invisible absolute  right-7 -top-5 
                h-9 w-40 rounded-md bg-blue ease-in group-hover:visible  md:left-7 md:-top-3   ">
                  <p className="mt-2 ml-2 font-body text-sm text-white">At least 6 characters.</p>
                </div>
              </div>
            </div>
            <input
              type="password"
              ref={passwordRef}
              required
              className="h-8 rounded-sm  bg-cream text-darkblue"
            />
          </div>

          <div className=" form-group mb-4 flex w-60 flex-col">
            <label className="font-header  text-blue ">Confirm password</label>
            <input
              type="password"
              ref={passwordConfirmRef}
              required
              className="h-8 rounded-sm bg-cream  text-darkblue"
            />
          </div>
          <div className=" form-group mb-4 flex w-60 flex-col">
            <label className="font-header  text-blue ">Username</label>
            <input
              type="text"
              ref={userNameRef}
              maxLength={20}
              required
              className="h-8 rounded-sm bg-cream font-body text-darkblue"
            />
            <span className="font-body text-xs text-darkblue">
              Maximum {charactersRemaining} characters remaining
            </span>
          </div>

          <motion.button
            className="mt-4 flex h-10 w-24
         items-center  justify-center rounded-md bg-sand font-headersc text-lg  text-blue hover:bg-blue  hover:text-peach
                md:h-12 md:w-28 lg:w-32  xl:w-32  "
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <input className="cursor-pointer  " disabled={loading} type="submit" value="Sign up" />
          </motion.button>
        </form>
        {file && (
          <div className="hidden">
            <ProgressBar
              setLoading={setLoading}
              file={file}
              setFile={setFile}
              uploadType={uploadType}
              isFirst={true}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUp
