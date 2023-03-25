import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ShowCaseButton = ({ title, link }) => {
  const navigate = useNavigate()
  return (
    <div className="z-50 flex h-10  w-auto items-center  justify-center ">
      <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
        <button
          className="rounded-md bg-cream py-2 px-4 text-center font-header text-2xl text-blue hover:bg-blue 
          hover:text-peach dark:bg-blue dark:text-cream dark:hover:text-peach  sm:py-3 sm:px-6  sm:text-3xl  dark:sm:bg-darkblue
          xl:hover:bg-cream xl:hover:text-blue  dark:xl:bg-blue 2xl:text-3xl "
          onClick={() => {
            navigate(link)
          }}>
          {title}
        </button>
      </motion.div>
    </div>
  )
}
ShowCaseButton.defaultProps = {
  title: 'Husky',
}

export default ShowCaseButton
