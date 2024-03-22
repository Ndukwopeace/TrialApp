import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
const RegisterPage = () => {
  const [isHomePage , setIsHomePage] = useOutletContext()
  setIsHomePage(false);
  return (
    <div>

    </div>
  )
}

export default RegisterPage