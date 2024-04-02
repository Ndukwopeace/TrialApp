import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';
import { LocalCafe } from '@mui/icons-material';
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import oAuthRequests from '../../Requests/Users/oAuthRequests';

const userObject = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignUpForm = (props) => {
    const [user, setUser] = useState(userObject);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const { setIsRegisterPage } = props;

    const registerUser =  (e) => {
        e.preventDefault();
        oAuthRequests.registerUser(user)
        .then(res => {
            console.log(res);
            setUser(userObject);
            setIsRegisterPage(false);
        }).catch((err) => {
            console.log(err)
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors);
            console.log(errors);
        }
        )
    }
    return (
        <div>
            <div style={{
                display: "flex",
                // border: "1px solid white",
                justifyContent: "center"
            }}>

                <div style={{
                    // border: "1px solid white",
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
                    <p style={{ fontSize: "1.3rem" }}>Share Your Smile </p>
                    <p style={{ fontSize: "1.3rem" }}>With  Friends</p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem"
                    }}>
                        <LocalCafe style={{ fontSize: 40 }} />
                        Enjoy!!!
                    </div>
                </div>
                <form
                    onSubmit={registerUser}
                    style={{
                        width: "25rem",
                        padding: "1rem", borderRadius: "0 1rem 1rem 0 ",
                        boxShadow: "0 0 1px", display: "flex", justifyContent: "center",
                        background: "white", color: "black",
                    }}>

                    <Grid container spacing={2} style={{ width: "90%", paddingTop: "1rem" }} >

                        <Grid item xs={12}>
                            <h3 >Sign up </h3>
                        </Grid>
                        <Grid item xs={6}>
                            {errors?.firstName ? <small style={{ color: "red" }}> {errors?.firstName.message}</small> : null}
                            <TextField type="text" label="First Name" fullWidth value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {errors?.lastName ? <small style={{ color: "red" }}> {errors?.lastName.message}</small> : null}
                            <TextField type="text" label="Last Name" fullWidth value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            {errors?.userName ? <small style={{ color: "red" }}> {errors?.userName.message}</small> : null}

                            <TextField type="text" label="User Name" fullWidth
                                value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            {errors?.email ? <small style={{ color: "red" }}> {errors?.email.message}</small> : null}

                            <TextField type="email" label="Email" fullWidth
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            {errors?.password ? <small style={{ color: "red" }}> {errors?.password.message}</small> : null}

                            <TextField type="password" label="Password" fullWidth
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            {errors?.confirmPassword ? <small style={{ color: "red" }}> {errors?.confirmPassword.message}</small> : null}

                            <TextField type="password" label="Confirm Password" fullWidth
                                value={user.confirmPassword}
                                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                        </Grid>
                        <Grid item xs={8}>
                            <Link onClick={() => setIsRegisterPage(false)}><span>Already registered ? LogIn</span></Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="primary" type="submit">
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