import React, { useState, useEffect } from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
import axios from 'axios';
import chatRequests from '../../Requests/chats/chatRequests';
import userRequest from '../../Requests/Users/userRequests';
import ConversationContainer from './ConversationContainer';
import { Link } from 'react-router-dom';
const Conversation = (props) => {
    const { users, loggedinUser ,userChats , setCurrentChat} = props;
    // const [currentChat, setCurrentChat] = useState("")
    const contactsArray = users.filter(user => user._id !== loggedinUser._id);
    const [chatMembers, setChatMembers] = useState([]);
    // const [userChats, setUserChats] = useState([]);

    const chatMembersId = [];
   
    // useEffect(async () => {
    //     try {
    //         const res = await chatRequests.getUserChat(user._id);
    //         if (res) {
    //             console.log(res.data)
    //             setUserChats(res.data)
    //         } else { return; }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [])

    console.log(userChats)
    
    
//     useEffect(() => {


//             chatMembersId.map(memberId => {
//                 userRequest.getUser(memberId)
//                 .then(res => {
//                     console.log(res.data);
//                     setChatMembers([...chatMembers,res.data])
//                 })
//                 .catch(err => console.log(err));
//             })
//     },[])


// console.log(chatMembersId);

    const handleSetCurrentChat = (recieverId) => {
        chatRequests.createChat(recieverId, loggedinUser._id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))


    }


    return (
        <div className='conversation'>

            {
                userChats?.map((chat, index) => {
                    return (
                        <Link onClick={()=>setCurrentChat(chat._id)} style={{textDecoration: "none" , color:"inherit"}}>
                          <ConversationContainer data={chat} key={index} loggedinUser={loggedinUser}/>  
                          </Link>
                    )
                })
            }
        </div>
    )
}

export default Conversation


