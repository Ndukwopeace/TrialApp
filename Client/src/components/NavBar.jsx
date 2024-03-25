import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Whatshot from '@mui/icons-material/Whatshot';
import {useNavigate} from 'react-router-dom'

const NavBar = (props) => {
  const {setIsHomePage , isHomePage} = props;
    const navigate = useNavigate()
  return (
    <>
    <Box>
      <AppBar position="static" sx={{  backgroundColor: "transparent" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Whatshot color='red'/> MyCHaT <Whatshot/>
          </Typography>
          
          {/* <Button color="inherit">Login</Button> */}
          { isHomePage? <Button color="inherit" onClick={()=> {
            navigate('/oauth')
            setIsHomePage(false);
          }}>Login</Button>
          :
          <Button color="inherit" onClick={()=> navigate('/')}>Home</Button>
        }
        </Toolbar>
      </AppBar>
    </Box>
        
    </>
  )
}

export default NavBar