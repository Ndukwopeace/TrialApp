import React from 'react'
import "../styles/ErrorPage.css"
import Error from '../assets/img/error_401.jpeg'
const ErrorPage = () => {
  return (
    <div className="ErrorPage">
        <img src={Error} alt="" />
    </div>
  )
}

export default ErrorPage