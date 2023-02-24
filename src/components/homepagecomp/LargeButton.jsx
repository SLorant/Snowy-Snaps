import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LargeButton = ({ title, link }) => {
  const navigate = useNavigate()
  return (
    <div className="z-50 flex  w-auto items-center  justify-center ">
      {/*  <Link to={link}> */}
      <motion.div className="     " whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
        <button
          className="rounded-md bg-cream py-2 px-4 text-center font-header text-2xl text-blue hover:bg-blue hover:text-peach sm:py-3 sm:px-6  sm:text-3xl  xl:hover:bg-cream  xl:hover:text-blue 2xl:text-3xl "
          onClick={() => {
            navigate(link)
          }}>
          {title}
        </button>
      </motion.div>

      {/*  {title !== "Log out" ? <Link to={link}><motion.div  className=" bg-sand rounded-md cursor-pointer "
         whileHover={{ scale: 1.1, transition: { duration: 0.3 }}}>
          <h2  className='text-center  md:text-lg lg:text-xl 2xl:text-2xl font-header text-darkblue  py-2 px-4 '>{title}</h2>
        </motion.div></Link> :
        <motion.div  className=" bg-sand rounded-md cursor-pointer "
        whileHover={{ scale: 1.1, transition: { duration: 0.3 }}}>
         <h2  className='text-center  md:text-lg lg:text-xl 2xl:text-2xl font-header text-darkblue  py-2 px-4 '>{title}</h2>
       </motion.div>} */}
    </div>
  )
}

LargeButton.defaultProps = {
  title: 'Husky',
}

export default LargeButton
