import React, {useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import SignUpForm from '../components/SignUpForm';
import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';



const AuthPage = () => {
    const [isRegisterPage , setIsRegisterPage] = useState(true);
  return (

    <div style={{backgroundColor: "rgb(17, 28, 90)" , height: "100vh" , color: "white"}}>
         
         <NavBar/>
        
        { isRegisterPage ? 
        <SignUpForm 
        setIsRegisterPage = {setIsRegisterPage} /> 
        : 
        <LoginForm setIsRegisterPage = {setIsRegisterPage}/>}

    
    </div>
  )
}

export default AuthPage