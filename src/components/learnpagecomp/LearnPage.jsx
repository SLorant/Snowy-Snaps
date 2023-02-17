import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Content from './Content'
import { useState } from 'react'
import { motion } from 'framer-motion'

const LearnPage = () => {
  const [showT, setShowT] = useState(false)

  const links = [
    { text: 'Characteristics', link: '#spec', main: true },
    { text: 'Personality', link: '#pers', main: true },
    { text: 'Husky care', link: '#care', main: true },
    { text: 'Food', link: '#feed', main: false },
    { text: 'Grooming', link: '#groom', main: false },
    { text: 'Environment', link: '#env', main: false },
    { text: 'Puppies', link: '#puppy', main: false },
    { text: 'Exercise', link: '#exr', main: false },
    { text: 'Training a husky', link: '#train', main: true },
    { text: 'Potty', link: '#potty', main: false },
    { text: 'Crate', link: '#crate', main: false },
    { text: 'Leash', link: '#leash', main: false },
    { text: 'Clicker', link: '#clicker', main: false },
    { text: 'Sources', link: '#sources', main: true },
  ]

  /* // In the component create variants of your animation state
  const variants = {
    rotate: { translateX: 50, opacity: 0, transition: { duration: 0.4 } },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: {
      opacity: 1,
      translateX: -60,
      transition: { duration: 0.4 } /* transition: { repeat: Infinity, repeatDelay: 3 } ,
    },
  } */

  const [isOpen, setIsOpen] = useState(false)

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  return (
    <div className=" h-full w-full bg-cream">
      <motion.div
        className=" mt-14  flex w-full flex-col items-center  justify-center bg-cream xl:mt-16 "
        initial={'closed'}
        animate={showT ? 'open' : 'closed'}>
        <h1 className=" mb-6 mt-14 font-header text-5xl  text-blue ">Huskypedia</h1>

        <motion.div
          className={`${
            showT ? 'z-50' : 'visible z-30'
          } fixed top-0 right-0  flex h-full w-64 flex-col items-center justify-center  lg:right-0 lg:top-28 
              lg:h-[850px] lg:w-80 lg:rounded-l-md 2xl:visible`}
          variants={{
            open: {
              boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.3)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.5,
                delay: 0.5,
              },
            },
            closed: {
              boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
            },
          }}>
          {/* /* shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] */
          /* initial={{ opacity: 0 }}
          animate={{ translateX: 40, opacity: 1, transition: { duration: 2 } }} */
          /* variants=
          {variants}
        animate={showT ? 'rotate' : 'stop'} */}
          <motion.ul
            className="flex h-full w-full flex-col justify-center gap-2   bg-cream font-header text-2xl text-blue lg:rounded-l-md xl:bg-cream "
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',

                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(90% 50% 10% 50% round 10px)',

                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.4,
                },
              },
            }}
            style={{ pointerEvents: showT ? 'auto' : 'none' }}>
            <div className=" mb-28  flex flex-col  justify-center gap-2 ">
              <div className=" flex w-full items-center justify-center">
                <h2 className=" mt-0 mb-4 font-headersc text-2xl text-blue lg:mb-10 lg:text-3xl">
                  Table of contents
                </h2>
              </div>
              {links.map((link) => (
                <motion.div
                  key={link.link}
                  variants={itemVariants}
                  className="w-full cursor-pointer border-b-2 border-sand hover:border-peach hover:bg-blue hover:text-peach xl:border-sand"
                  onClick={() => {
                    setShowT(false)
                  }}>
                  {/*   <TableOfContent link={link.link} text={link.text} main={link.main} /> */}
                  <motion.li
                    className={`${
                      link.main ? 'ml-4 lg:ml-8' : 'ml-8 text-lg lg:ml-12'
                    } flex  w-full`}>
                    <Link className=" w-full " to={link.link}>
                      {' '}
                      {link.text}
                    </Link>
                  </motion.li>
                </motion.div>
              ))}
            </div>
          </motion.ul>
        </motion.div>
        <div
          className=" mt-4 flex h-full flex-col items-center justify-start rounded-md bg-white md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-5/12"
          onClick={() => {
            setShowT(false)
          }}>
          <Content />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setShowT(!showT)
          }}
          className={`${
            showT ? 'z-50 bg-blue' : 'z-30 bg-sand'
          } uploadbutton fixed right-6 bottom-6   rounded-2xl  p-2
            hover:bg-blue   lg:bottom-6 lg:right-28 `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-tabler-file-upload icon icon-tabler icon-tabler-eye-table"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${showT ? '#de9873' : '#2c3e50'}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 3h16" />
            <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
            <path d="M14 7h-4" />
            <path d="M10 15h4" />
            <path d="M10 18h4" />
            <path d="M12 11v-4" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default LearnPage
