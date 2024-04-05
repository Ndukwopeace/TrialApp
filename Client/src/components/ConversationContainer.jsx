import React, { useEffect, useState } from 'react'
import userRequest from '../../Requests/Users/userRequests'
import { Avatar } from '@mui/material'
import chatRequests from '../../Requests/chats/chatRequests'
import messageRequests from '../../Requests/Messages/messageRequests'
const ConversationContainer = (props) => {
    const { data, loggedinUser } = props
    const [member, setMember] = useState({})
    const [messages , setMessages] = useState([])
    const messageArray = []

    console.log(data)

    useEffect(() => {
        const memberId = data.members.find((id) => id !== loggedinUser._id)
        userRequest.getUser(memberId)
            .then(res => {
                console.log(res.data)
                setMember(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(()=>{
        messageRequests.getMessageByChatId(data._id)
        .then(res => {
            console.log(res.data)
            setMessages([...messages , res.data])
        }).catch(err=> console.log(err))
    },[data])
        console.log(member)

        // messages.map((message)=>{
        //         messageArray.push(message.message);
        // })
        console.log(messages);

    return (

        <div className='conversationContainer' >

            <div className='profilePic'>
                <Avatar alt={member.userName} src="" />
                <div className='userInfoConversation'>
                    <p 
                    // onClick={() => handleSetCurrentChat(`${member._id}`)}
                    >{member.userName}</p>
                    {/* <p>{messageArray[messageArray.length-1]}</p> */}
                </div>
            </div>
            <span style={{ alignSelf: "center" ,
            // , border: "1px solid black",
            borderRadius: "50%" 
            ,padding:"0.25rem",
            background: member.loggedIn? "blue" : "red" }}></span>
        </div>
    )
}

export default ConversationContainer
