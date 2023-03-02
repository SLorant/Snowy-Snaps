import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function WithAuth(Component) {
  const navigate = useNavigate()
  return function (props) {
    const { currentUser } = useAuth()
    useEffect(() => {
      if (!currentUser) {
        navigate('/login')
      }
    }, [navigate, currentUser])
    return <Component {...props} />
  }
}

export default WithAuth
