import React from 'react'
import { useLocation } from 'react-router-dom';
import Form from './signincomponents/Form'
import { motion } from 'framer-motion'
import {  Link } from "react-router-dom";
import ChooseButtons from './signincomponents/ChooseButtons';

const SignInPage = () => {
  
  return (
    
      <div>
         <ChooseButtons/>

        <Form/>
        
      </div>
  )
}

export default SignInPage