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
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import oAuthRequests from '../../Requests/Users/oAuthRequests';
// import { io } from 'socket.io-client';
import chatRequests from '../../Requests/chats/chatRequests';
import Contacts from '@mui/icons-material/Contacts';
// import LogoutIcon from '@mui/icons-material/Logout';
import ContactsComponents from '../components/ContactsComponents';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


const settings = ['Profile', 'Logout'];
const DashBoard = () => {
  // const [socket] = useState(() => io(":8000"));
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const[error , setError] = useState("");
  const [userChats, setUserChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentChatObject, setCurrentChatObject] = useState(null)
  const [isContactPage, setIsContactPage] = useState(false);
  const navigate = useNavigate();
  const [loggedIn , setLoggedIn] = useState({loggedIn : true})
  const [loaded , setLoaded]= useState(false);
  // useEffect(() => {
  //   console.log('is socket running??')
  //   socket.on('Welcome', data => {
  //     console.log(data);
  //     console.log('yes socket is running well')
  //   })

  //   return () => socket.off("welcome");
  // })
  useEffect(() => {
    oAuthRequests.getUser().then(res => {
      console.log(res.data);
      setUser(res.data);
    }).catch(err => {
      console.log(err)
      setError(err)
    })

    console.log(user._id)
    chatRequests.getUserChat(user._id).then(res => {
      console.log(res.data);
      setUserChats(res.data);
    }).catch(err => console.log(err))


  }, [user._id])

  useEffect(() => {
    oAuthRequests.getAllUsers().then(res => {
      console.log(res.data);
      setUsers(res.data);
    }).catch(err => console.log(err))
  }, [])

  // console.log(currentChat);

  useEffect(() => {
    if (currentChat === null) { return }
    else {
      chatRequests.getOneChat(currentChat).then(res => {
        console.log(res.data)
        setCurrentChatObject(res.data)
      }).catch(err => { console.log(err) })
    }

  }, [currentChat])

  useEffect(()=>{
    oAuthRequests.updateUser(loggedIn)
    .then(
      res=> {
        console.log(res.data)
      }
    ).catch(err => console.log(err))
  }, [])

  console.log(currentChatObject)


  const handleLogOut = (e)=>{
    e.preventDefault();
    setLoggedIn({...loggedIn ,loggedIn : false})
    console.log(loggedIn)
    oAuthRequests.updateUser(loggedIn)
    .then(
      res=> {
        console.log(res.data)
      }
    ).catch(err => console.log(err))
    console.log("hello")
    oAuthRequests.logOut()
    .then(res=> {
      console.log(res.data)
      navigate("/")
    })
    .catch(err=> console.log(err))
  }





  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      padding: "0 1rem 1rem 1rem",
      backgroundColor: "rgb(243, 243, 243)"

    }}>
      <h1 style={{
        padding: "0.5rem",
        alignSelf: "start"
      }}>
        Welcome {user.firstName} {user.lastName}
      </h1>

      <div className='mainDashBoardDiv'>
        <div className="settingsDiv">
          <div className="dashBoardIcons">
            <ChatBubbleOutlineIcon fontSize='large' className='pointer' onClick={() => setIsContactPage(false)} />
            <PhoneIcon fontSize='large' className='pointer' />
            <DonutLargeIcon fontSize='large' className='pointer' />
            <Contacts fontSize='large' className='pointer' onClick={() => setIsContactPage(true)} />
          </div>
          <div className="profileSettingsDiv">
            <Logout fontSize='large'
              className='pointer' onClick={handleLogOut}/>
            <SettingsIcon fontSize='large'
              className='pointer' />

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
          <ChatHeader isContactPage={isContactPage} />
          {
            isContactPage ?
              <ContactsComponents users={users} loggedinUser={user} setUserChats = {setUserChats} userChats={userChats} setCurrentChat={setCurrentChat}/>
              :
              <Conversation users={users} loggedinUser={user}
                // socket={socket} 
                userChats={userChats} setCurrentChat={setCurrentChat} currentChat={currentChat} />
          }
        </div>
        <div className="messageDiv">
          <CurrentChat
            // socket={socket} 
            currentChatObject={currentChatObject} loggedinUser={user} setCurrentChat={setCurrentChat}/>
          <Messages
            // socket={socket} 
            currentChat={currentChat} loggedinUser={user} />
        </div>
      </div>

    </div>
  )
}

export default DashBoard