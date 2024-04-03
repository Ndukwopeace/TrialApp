import React, { useState, useEffect } from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
import axios from 'axios';
import chatRequests from '../../Requests/chats/chatRequests';
import userRequest from '../../Requests/Users/userRequests';
const Conversation = (props) => {
    const { users, loggedinUser ,userChats} = props;
    const [currentChat, setCurrentChat] = useState("")
    const contactsArray = users.filter(user => user._id !== loggedinUser._id);
    const [chatMembers, setChatMembers] = useState("");
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
    userChats.map(chats => {
        console.log(loggedinUser)
        console.log(chats);
        const memberId = chats.members.find(memberId => memberId !=loggedinUser._id);
        console.log(memberId);
        return chatMembersId.push(memberId);

    })
    console.log(chatMembersId);
    useEffect(() => {
        chatMembersId.map(memberId => {
            userRequest.getUser(memberId).then(res => {
                console.log(res.data);
                setChatMembers([...chatMembers, res.data])
            }).catch(err => console.log(err));

        })

    }, [])

    const handleSetCurrentChat = (recieverId) => {
        chatRequests.createChat(recieverId, loggedinUser._id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))


    }


    return (
        <div className='conversation'>

            {
                contactsArray.map((user, index) => {

                    return (

                        <div className='conversationContainer' key={index}>
                            <div className='profilePic'>
                                <Avatar alt={user.userName} src="
                            "   />
                                <div className='userInfoConversation'>
                                    <p onClick={() => handleSetCurrentChat(`${user._id}`)}>{user.userName}</p>
                                    {/* <p>{user.message}</p> */}
                                </div>
                            </div>
                            <span style={{ alignSelf: "center" }}>2:00pm</span>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Conversation


