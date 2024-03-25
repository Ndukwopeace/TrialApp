import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import pic1 from '../assets/img/cheerful.jpeg';
import pic2 from '../assets/img/depositph.jpeg';
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'



const HomePage = () => {
    const [isHomePage, setIsHomePage] = useState(true);
    const navigate = useNavigate()

   

    return (
        <div style={{backgroundColor: "rgb(17, 28, 90)" , height: "100%" , color: "white"}}>


            <NavBar setIsHomePage={setIsHomePage} isHomePage={isHomePage}/>

            {/* {
                isHomePage && <h1>Welcome To MYCHatApp</h1>
            } */}

            <section style={{
                // border:"1px solid black",
                display:"grid",
                gridTemplateColumns : "50% 50%",
                padding: "3rem 0"
            }}>
                <div style={{
                    // border:"1px solid black",
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center" ,
                    gap: "1.5rem"
                        
                        }}>
                    
                    <div style={{
                         display: "flex",
                         flexDirection:"column",
                        //  border:"1px solid black",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem"
                    }}>
                        <h1 style={{fontSize: "5rem"}}>
                            Have your best Chat
                        </h1>
                        <span style={{
                            fontWeight:"bold",
                            fontSize: "1.5rem"}}>
                            fast , easy , unlimited Chat Services ...
                        </span>
                    </div>

                        <Button variant='outlined' 
                        style={{
                            borderRadius: "1rem"
                        }}
                        onClick={()=> {
                            navigate('/oauth')
                            setIsHomePage(false)
                        }
                            } >Try for free</Button>
                </div>
                <div style={{
                    // border:"1px solid black",
                    position: "relative"
                    }}>

                    <div style={{
                         height:"15.5rem",
                         width: "15.5em",
                        //  border:"1px solid black",
                         position:"relative",
                         right: "-5rem",
                         top: "2rem",
                         borderRadius:"5rem",
                        overflow:"clip"
                    }}>
                        <img src={pic1} alt="" style={{
                         height:"100%",
                         maxWidth: "100%"
                    }}/>
                    </div>
                    <div style={{
                         height:"15.5rem",
                         width: "15.5rem",
                        //  border:"1px solid black",
                         position:"relative",
                         right: "-18.5rem",
                        top:"-5rem",
                        borderRadius:"5rem",
                        overflow:"clip",
                        boxShadow: "1rem white"


                        //  zIndex: 1
                    }}>
                        <img src={pic2} alt="" style={{
                         height:"100%",
                         width: "100%",
                    }} />

                    </div>

                </div>

            </section>
        </div>
    )
}

export default HomePage