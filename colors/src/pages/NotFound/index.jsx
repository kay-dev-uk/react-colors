import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const NotFound = () => {
    const location = useLocation();
    
  return (
    <h1>Page {location.pathname} Not Found</h1>
  )
}

export default NotFound
