import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { createUserDocument, auth } from '../../../firebase/config'
import ProgressBar from '../ProgressBar'
import CheckUsernameDuplicates from './CheckUsernameDuplicates'
import CheckEmailDuplicates from './CheckEmailDuplicates'

const SignUpForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const userNameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [charactersRemaining, setCharactersRemaining] = useState(20)
  const uploadType = 'profile'

  useEffect(() => {
    userNameRef.current.addEventListener('input', () => {
      setCharactersRemaining(20 - userNameRef.current.value.length)
    })
  }, [])

  useEffect(() => {
    setTimeout(function () {
      setError(null)
    }, 10000)
  }, [error])

  async function handleSubmit(e) {
    e.preventDefault()
    const userNameTaken = await CheckUsernameDuplicates(userNameRef.current.value)
    const emailTaken = await CheckEmailDuplicates(emailRef.current.value)
    if (emailTaken) {
      return setError('User with this email already exists')
    }
    if (userNameTaken) {
      return setError('Username already taken')
    }
    if (passwordRef.current.value.length < 6) {
      return setError('Password have to be at least 6 characters long')
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError("Passwords don't match")
    const username = userNameRef.current.value

    try {
      setError('')
      setLoading(true)
      const { user } = await signup(emailRef.current.value, passwordRef.current.value)
      await createUserDocument(user, { username })
      const response = await fetch('src/assets/avatars/normalavatar.png')
      const file = await response.arrayBuffer()
      var newFile = new File([file], 'my_image.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      })
      setFile(newFile)
    } catch (error) {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
      <div className="flex w-full flex-col items-center  justify-center  ">
        {error && (
          <div className="mb-6 flex h-4 w-80 items-center justify-center text-center font-header  text-lg text-blue dark:text-peach">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-68 flex flex-col items-center justify-center">
          <div className="form-group flex w-60  flex-col  ">
            <div className="flex items-center justify-between">
              <label className="font-header text-lg text-blue dark:text-cream">Email</label>
              <div className=" group relative h-5 w-5">
                <img
                  className="hidden h-5 w-5 cursor-pointer dark:hidden md:block"
                  src="./src/assets/icons/question.png"
                  alt="questionmark"
                />
                <img
                  className="hidden h-5 w-5 cursor-pointer dark:md:block"
                  src="./src/assets/icons/questiondark.png"
                  alt="questionmark"
                />
                <div
                  className="group-hover:bg-slate-700 invisible absolute  right-7 -top-10 
                h-16 w-52 rounded-md bg-blue group-hover:visible dark:bg-sand  md:left-7 md:-top-3  ">
                  <p className="mt-2 ml-2 font-body text-white  dark:text-darkblue">
                    Email format required. <br /> user.name@example.com
                  </p>
                </div>
              </div>
            </div>
            <input
              type="email"
              ref={emailRef}
              required
              className="h-9 rounded-sm bg-cream pl-1 font-body text-lg text-darkblue dark:bg-darkblue  dark:text-cream"
            />
          </div>

          <div className="form-group mt-6 mb-4 flex w-60 flex-col md:my-6">
            <div className="flex items-center justify-between">
              <label className="font-header text-lg text-blue dark:text-cream">Password</label>
              <div className=" group relative h-5 w-5">
                <img
                  className="hidden h-5 w-5 cursor-pointer dark:hidden md:block"
                  src="./src/assets/icons/question.png"
                  alt="questionmark"
                />
                <img
                  className="hidden h-5 w-5 cursor-pointer dark:md:block"
                  src="./src/assets/icons/questiondark.png"
                  alt="questionmark"
                />
                <div
                  className="group-hover:bg-slate-700 invisible absolute  right-7 -top-5 
                   h-10 w-44 rounded-md bg-blue ease-in group-hover:visible dark:bg-sand  md:left-7 md:-top-3   ">
                  <p className="mt-2 ml-2 font-body text-white dark:text-darkblue">At least 6 characters.</p>
                </div>
              </div>
            </div>
            <input
              type="password"
              ref={passwordRef}
              required
              className="h-9 rounded-sm bg-cream pl-1 text-darkblue  dark:bg-darkblue dark:text-cream"
            />
            <span className="font-body text-sm text-darkblue dark:text-cream md:hidden">At least 6 characters</span>
          </div>

          <div className=" form-group mb-4 flex w-60 flex-col">
            <label className="font-header text-lg text-blue  dark:text-cream ">Confirm password</label>
            <input
              type="password"
              ref={passwordConfirmRef}
              required
              className="h-9 rounded-sm bg-cream pl-1 text-darkblue dark:bg-darkblue dark:text-cream"
            />
          </div>
          <div className=" form-group mb-4 flex w-60 flex-col">
            <label className="font-header text-lg text-blue dark:text-cream ">Username</label>
            <input
              type="text"
              ref={userNameRef}
              maxLength={20}
              required
              className="h-9 rounded-sm bg-cream pl-1 font-body text-lg text-darkblue dark:bg-darkblue dark:text-cream"
            />
            <span className="font-body text-sm text-darkblue dark:text-cream">
              Maximum {charactersRemaining} characters remaining
            </span>
          </div>

          <motion.button
            className="mt-4 flex h-12 
                w-28 items-center justify-center rounded-md bg-sand font-header text-xl text-blue  hover:bg-blue
                hover:text-peach dark:bg-darkblue dark:text-cream  dark:hover:text-peach md:h-12 lg:w-32 xl:w-32"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <input className="cursor-pointer  " disabled={loading} type="submit" value="Sign up" />
          </motion.button>
        </form>
        {file && (
          <div className="hidden">
            <ProgressBar setLoading={setLoading} file={file} setFile={setFile} uploadType={uploadType} isFirst={true} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpForm
