
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LargeButton = ({title, link}) => {
  return (
    <div className="  w-auto  flex justify-center items-center ">
      <Link to={link}><motion.div  className=" bg-sand rounded-md cursor-pointer "
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>
          <h2  className='text-center  md:text-lg lg:text-xl 2xl:text-2xl font-header text-darkblue  py-2 px-4 '>{title}</h2>
        </motion.div></Link>

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
    title: "Husky"
}

export default LargeButton