import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Content from './Content'

const LearnPage = () => {
  return (
    <div className=" h-full w-full bg-cream">
      <div className=" mt-14  flex w-full flex-col items-center  justify-center bg-cream xl:mt-16 ">
        <h1 className=" mb-6 mt-14 font-header text-5xl  text-blue ">Huskypedia</h1>
        <div className="invisible fixed top-52 left-32 flex h-[500px] w-80 flex-col items-center justify-center rounded-md bg-white 2xl:visible">
          <h2 className=" font-headersc text-3xl text-blue">Table of contents</h2>
          <ul className="mt-4 flex flex-col gap-2 font-header text-xl text-blue">
            <li>
              <Link to="#spec"> Characteristics</Link>
            </li>
            <li>
              <Link to="#pers"> Personality</Link>
            </li>
            <li>
              <Link to="#care"> Husky care</Link>
            </li>
            <ul>
              <li className="ml-5 text-base">
                <Link to="#feed"> Food</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#groom"> Grooming</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#env"> Environment and children</Link>
              </li>

              <li className="ml-5  text-base">
                <Link to="#puppy"> Puppies</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#exr"> Exercise</Link>
              </li>
            </ul>
            <li>
              <Link to="#train"> Training a husky</Link>
            </li>
            <ul>
              <li className="ml-5 text-base">
                <Link to="#potty"> Potty</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#crate"> Crate</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#leash"> Leash</Link>
              </li>
              <li className="ml-5 text-base">
                <Link to="#clicker"> Clicker</Link>
              </li>
            </ul>
            <li className="mb-2">
              <Link to="#sources"> Sources</Link>
            </li>
          </ul>
        </div>

        <Content />
      </div>
    </div>
  )
}

export default LearnPage
