
import { motion } from 'framer-motion'

const LargeButton = ({title}) => {
  return (
    <div className=" mt-7 w-1/2  flex justify-center items-center ">
        <motion.div  className=" bg-sand rounded-md cursor-pointer "
         whileHover={{ scale: 1.1, transition: { duration: 0.3 }}}>
          <h2  className='text-center  md:text-lg lg:text-xl 2xl:text-2xl font-header text-darkblue  py-2 px-4 '>{title}</h2>
        </motion.div>
        </div>
  )
}

export default LargeButton