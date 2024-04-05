import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material'
import chatRequests from '../../Requests/chats/chatRequests';
import userRequest from '../../Requests/Users/userRequests';

const CurrentChat = (props) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentChatObject , loggedinUser} = props
  const [chatMember , setChatMember] = useState({})

  useEffect(() => {
    if (currentChatObject !== null){
      const memberId = currentChatObject?.members.filter(memberId => memberId !== loggedinUser._id)
      userRequest.getUser(memberId).then(res => {
          console.log(res.data)
          setChatMember(res.data)
        }).catch(err => {console.log(err)})
    } else{
      return ;
    }

  },[currentChatObject])


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ background: "grey" }}>
        <Toolbar>
          <Box sx={{ display: "flex" , alignItems:"center" ,gap:"1rem"}}>
          <IconButton 
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar />
          </IconButton>

          <div>
            <p>{chatMember.userName}</p>
          </div>
          </Box>
        
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              // vertical: 'top',
              // horizontal: 'right',
              top: '10px'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
         { currentChatObject?
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {
              chatMember.loggedIn? "Online" : "Offline"
            }
          </Typography>
          
            :
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Start chat 
          </Typography>
        }
          {auth && (
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >

                <MenuIcon />
              </IconButton>

            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CurrentChat