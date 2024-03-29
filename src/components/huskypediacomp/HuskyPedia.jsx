import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Content from './Content'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import TableOfContentsIcon from '../../icons/TableOfContentsIcon'
import { Helmet } from 'react-helmet-async'

const HuskyPedia = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const [showTableOfContents, setShowTableOfContents] = useState(isMobile ? false : true)

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
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  return (
    <div className=" h-full w-full bg-cream ">
      <Helmet>
        <title>Huskypedia</title>
        <meta property="og:title" content="Snowy Snaps - Huskypedia" />
        <meta property="og:type" content="article" />
        <meta name="description" content="Learn how to care for a husky, and how to train a husky." />
      </Helmet>
      <motion.div
        className=" mt-14  flex w-full flex-col items-center justify-center bg-cream dark:bg-blue xl:mt-16 "
        initial={'closed'}
        animate={showTableOfContents ? 'open' : 'closed'}>
        <h1 className=" mb-6 mt-14 font-header text-5xl text-blue  dark:text-peach ">Huskypedia</h1>
        <motion.div
          className={`${
            showTableOfContents ? 'z-50' : 'visible z-30'
          } fixed top-0 right-0  flex h-full w-64 flex-col items-center justify-center  lg:right-0 
              lg:top-20 lg:h-[850px] lg:w-80 lg:rounded-l-md 2xl:visible 2xl:top-20`}
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
          <motion.ul
            className="flex h-full w-full flex-col justify-center gap-2 bg-cream font-header text-2xl
             text-blue dark:bg-blue dark:md:bg-darkblue lg:rounded-l-md"
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.5,
                  delayChildren: 0.2,
                  staggerChildren: 0.04,
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
            style={{ pointerEvents: showTableOfContents ? 'auto' : 'none' }}>
            <div className=" mb-28  flex flex-col  justify-center gap-2 ">
              <div className=" flex w-full items-center justify-center">
                <h2 className=" mt-0 mb-4 font-header text-2xl text-blue dark:text-cream lg:mt-6 lg:mb-2 lg:text-3xl">
                  Table of contents
                </h2>
              </div>
              {links.map((link) => (
                <motion.div
                  key={link.link}
                  variants={itemVariants}
                  className="w-full cursor-pointer border-b-2 border-sand  hover:border-peach hover:bg-blue 
                  hover:text-peach dark:border-darkblue dark:text-cream dark:hover:border-peach dark:md:border-blue xl:border-sand"
                  onClick={() => {
                    setShowTableOfContents(isMobile ? false : showTableOfContents ? true : false)
                  }}>
                  <motion.li className={`${link.main ? 'ml-4 lg:ml-8' : ' ml-8 text-xl lg:ml-12'} flex  w-full`}>
                    <Link className=" w-full " to={link.link}>
                      {link.text}
                    </Link>
                  </motion.li>
                </motion.div>
              ))}
            </div>
          </motion.ul>
        </motion.div>
        <div
          className=" mt-4 flex h-full flex-col items-center justify-start rounded-md bg-white
           dark:bg-darkblue md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-5/12"
          onClick={() => {
            setShowTableOfContents(isMobile ? false : showTableOfContents ? true : false)
          }}>
          <Content />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setShowTableOfContents(!showTableOfContents)
          }}
          className={`${
            showTableOfContents
              ? 'z-50 bg-blue dark:bg-sand dark:hover:bg-blue'
              : 'z-30 bg-sand dark:bg-blue dark:hover:bg-darkblue dark:md:bg-darkblue'
          } tocbutton fixed right-6 bottom-6   rounded-2xl  p-2
            hover:bg-blue    lg:bottom-6 lg:right-28 `}>
          <TableOfContentsIcon
            className={`${showTableOfContents ? 'icon-toc-clicked' : 'icon-toc'}`}
            stroke={`${showTableOfContents ? '#de9873' : '#2c3e50'}`}
          />
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HuskyPedia
