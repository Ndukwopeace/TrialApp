import React,{useState} from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';
import { LocalCafe } from '@mui/icons-material';
import NavBar from './NavBar';
import {Link , useNavigate} from 'react-router-dom';
import oAuthRequests from '../../Requests/Users/oAuthRequests';

const loginObject = {
  email: "",
  password: ""
}
const LoginForm = (props) => {
  const [loginUser , setLoginUser] = useState(loginObject);
  const [errors , setErrors] = useState("");
  const {setIsRegisterPage} = props;
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    oAuthRequests.loginUser(loginUser)
    .then(res=>{
      console.log(res)
      navigate('/dashboard');
    })
    .catch(err=> {
      console.log(err)
      setErrors(err.response.data.errors);
    }
      
      );

  }
  return (
    <div style={{
      display:"flex",
      justifyContent: "center"
      }}>
      
        <form  onSubmit={handleSubmit} style={{ 
          width: "25rem", padding: "1rem",
          borderRadius: "1rem", boxShadow: "0 0 1px", 
          display: "flex", justifyContent: "center",
           background: "white", color: "black", }}>

        <Grid container spacing={2} style={{ width: "90%", paddingTop: "1rem" }} >

          <Grid item xs={12}>
            <h3 >Sign In </h3>
          </Grid>
                        {errors? <small style={{ color: "red" , alignSelf:"center"}}> {errors?.message}</small> : null}
          <Grid item xs={12}>
          {errors?.email ? <small style={{ color: "red" }}> {errors?.email.message}</small> : null}

            <TextField type="email" label="Email" fullWidth 
            value={loginUser.email}
            onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}/>
          </Grid>
          <Grid item xs={12}>
          {errors?.password ? <small style={{ color: "red" }}> {errors?.password.message}</small> : null}

            <TextField type="password" label="Password" fullWidth 
             value={loginUser.password}
             onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })} />
          </Grid>

          <Grid item xs={8}>
            <Link onClick={()=>setIsRegisterPage(true)}><span>Don't have an account ? Sign up</span></Link>
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" variant="outlined" color="primary" >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default LoginForm