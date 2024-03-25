import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';
import { LocalCafe } from '@mui/icons-material';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

const LoginForm = (props) => {
  const {setIsRegisterPage} = props;
  return (
    <div style={{
      display:"flex",
      justifyContent: "center"
      }}>
      
        <form style={{ width: "25rem", padding: "1rem", borderRadius: "1rem", boxShadow: "0 0 1px", display: "flex", justifyContent: "center", background: "white", color: "black", }}>

        <Grid container spacing={2} style={{ width: "90%", paddingTop: "1rem" }} >

          <Grid item xs={12}>
            <h3 >Sign In </h3>
          </Grid>

          <Grid item xs={12}>
            <TextField type="email" label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" label="Password" fullWidth />
          </Grid>

          <Grid item xs={8}>
            <Link onClick={()=>setIsRegisterPage(true)}><span>Don't have an account ? Sign up</span></Link>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" color="primary" >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default LoginForm