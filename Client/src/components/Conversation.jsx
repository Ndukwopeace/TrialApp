import React, { useState, useEffect } from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
import axios from 'axios';
import chatRequests from '../../Requests/chats/chatRequests';
import userRequest from '../../Requests/Users/userRequests';
import ConversationContainer from './ConversationContainer';
import { Link } from 'react-router-dom';
const Conversation = (props) => {
    const { users, loggedinUser, userChats, setCurrentChat,currentChat } = props;
    // const [currentChat, setCurrentChat] = useState("")
    const [chatMembers, setChatMembers] = useState([]);
    // const [userChats, setUserChats] = useState([]);

    const chatMembersId = [];

    console.log(userChats)
    console.log("current chat is" + currentChat);

    return (
        <div className='conversation'>

            {
                userChats?.map((chat, index) => {
                    return (
                        <Link onClick={() => setCurrentChat(chat._id)} style={{ textDecoration: "none", color: "inherit" }}>
                            <ConversationContainer data={chat} key={index} loggedinUser={loggedinUser} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Conversation


