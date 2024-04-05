import { Avatar } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom'
import chatRequests from '../../Requests/chats/chatRequests';

const ContactsComponents = (props) => {
    const {users , loggedinUser , setUserChats , userChats,setCurrentChat} = props;
    console.log(users);
    const contactsArray = users.filter(user => user._id !== loggedinUser._id);
    console.log(loggedinUser)
    
    const handleAddChat = (recieverId) => {
        chatRequests.createChat(recieverId, loggedinUser._id)
            .then((res) => {
                console.log(res.data)
                setUserChats([...userChats , res.data]);
                setCurrentChat(res.data._id)
            })
            .catch((err) => console.log(err))
    }
  return (
    <div className='conversation'>

    {
        contactsArray.map((user, index) => {
            return (
                <div className='conversationContainer , pointer' onClick={()=>handleAddChat(`${user._id}`)}>

            <div className='profilePic'>
                <Avatar alt={user.userName} src="" />
                <div className='userInfoConversation'>
                    <p 
                    // onClick={() => handleSetCurrentChat(`${member._id}`)}
                    >{user.userName}</p>
                    {/* <p>{messageArray[messageArray.length-1]}</p> */}
                </div>
            </div>
            {/* <span style={{ alignSelf: "center" }}>2:00pm</span> */}
        </div>
            )
        })
    }
</div>
  )
}

export default ContactsComponents