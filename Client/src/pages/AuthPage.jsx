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

    <div style={{backgroundColor: "rgb(17, 28, 90)" , height: "100vh" , color: "white", display:"flex", flexDirection:"column"}}>
         
         <NavBar/>
        
        { isRegisterPage ? 
        <div style={{
          flexGrow:"1" , 
          // border:"1px solid white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          }}>
          <SignUpForm 
        setIsRegisterPage = {setIsRegisterPage} /> 
        </div>
        : 
        <div style={{
          flexGrow:"1" , 
          // border:"1px solid white",
          justifyContent:"center",
          display:"flex",
          alignItems:"center",
          }}>
          <LoginForm setIsRegisterPage = {setIsRegisterPage}/>
          </div>

        }
    </div>
  )
}

export default AuthPage