import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatHeader from '../components/ChatHeader';
import Conversation from '../components/Conversation';
import CurrentChat from '../components/CurrentChat';
import Messages from '../components/Messages';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import oAuthRequests from '../../Requests/Users/oAuthRequests';
import { io } from 'socket.io-client';
import chatRequests from '../../Requests/chats/chatRequests';


const settings = ['Profile', 'Logout'];
const DashBoard = () => {
  const [socket] = useState(()=>io(":8000"));
  const [users , setUsers] = useState([]);
  const [user , setUser] = useState({});
  const [userChats , setUserChats] = useState([]);
  
  

  useEffect(()=>{
    console.log('is socket running??')
    socket.on('Welcome' , data => {
      console.log(data);
      console.log('yes socket is running well')
    })

    return ()=>socket.off("welcome");
  })
  useEffect(()=>{
    oAuthRequests.getUser().then(res=> {
      console.log(res.data);
      setUser(res.data);
    }).catch(err=> console.log(err))

    console.log(user._id)
    chatRequests.getUserChat(user._id).then(res=> {
      console.log(res.data);
      setUserChats(res.data);
    }).catch(err=> console.log(err))
    const stop = "stop"
    
}, [data])

  useEffect(()=>{
      oAuthRequests.getAllUsers().then(res=> {
        console.log(res.data);
        setUsers(res.data);
      }).catch(err=> console.log(err))

  }, [])










  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      height: "100vh",
      padding:"0 1rem 1rem 1rem",
      backgroundColor: "rgb(243, 243, 243)"

      }}>
        <h1 style={{
          padding:"0.5rem",
          alignSelf:"start"
        }}>
        My Dashboard  
        </h1>
       
        <div className='mainDashBoardDiv'>
          <div className="settingsDiv">
            <div className="dashBoardIcons">
            <ChatBubbleOutlineIcon fontSize='large' className='pointer'/>
            <PhoneIcon fontSize='large' className='pointer'/>
            <DonutLargeIcon fontSize='large' className='pointer'/>
            </div>
            <div className="profileSettingsDiv">
              <SettingsIcon fontSize='large'
              className='pointer'/>
              
              <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.userName} src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Tooltip>
            </Box>
            
            </div>
          </div>
          <div className="chatsDiv">
          <ChatHeader />
          <Conversation users ={users} loggedinUser = {user} 
          socket = {socket} userChats={userChats}/>
          </div>
          <div className="messageDiv">
            <CurrentChat socket = {socket}/>
            <Messages socket = {socket}/>
          </div>
        </div>

    </div>
  )
}

export default DashBoard