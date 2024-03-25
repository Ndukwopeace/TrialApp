import React from 'react'
import { TextField, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';
import { LocalCafe } from '@mui/icons-material';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'

const SignUpForm = (props) => {
  const {setIsRegisterPage} = props;

    return (
        <div>
            <div style={{
                display: "flex",
                // border: "1px solid black",
                justifyContent: "center"
            }}>

                <div style={{
                    // border: "1px solid black",
                    width: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                   padding: "4rem 0.5rem",
                //    background: "rgb(3,30,238)",
                    // background: "linear-gradient(90deg, rgba(3,30,238,0.7861519607843137) 0%, rgba(9,65,121,1) 30%, rgba(0,174,255,1) 100%)",
                    color: "white",
                    borderRadius: "1rem 0 0 1rem",
                    boxShadow: "-1px 1px 1px"
                    // padding: "1rem"

                }}>
                    <Typography variant="h4" component="div" >
                        <Whatshot color='red' /> MyCHaT <Whatshot />
                    </Typography>
                    <p style={{fontSize:"1.3rem"}}>Share Your Smile </p>
                    <p style={{fontSize:"1.3rem"}}>With  Friends</p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem"
                    }}>
                        <LocalCafe style={{ fontSize: 40 }}/>
                        Enjoy!!!
                    </div>
                </div>
                <form style={{ width: "25rem", padding: "1rem", borderRadius: "0 1rem 1rem 0 ", boxShadow: "0 0 1px" ,display: "flex", justifyContent:"center" , background: "white" , color: "black", }}>

                    <Grid container spacing={2} style={{width: "90%",paddingTop: "1rem"}} >
                        
                        <Grid item xs={12}>
                        <h3 >Sign up </h3>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="First Name" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Last Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="User Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" label="Email" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="password" label="Password" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="password" label="Confirm Password" fullWidth />
                        </Grid>
                        <Grid item xs={8}>
                            <Link onClick={()=>setIsRegisterPage(false)}><span>Already registered ? LogIn</span></Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="primary" >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </div>

        </div>
    )
}

export default SignUpForm