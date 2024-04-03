import React, { useEffect, useState } from 'react'
import userRequest from '../../Requests/Users/userRequests'
import { Avatar } from '@mui/material'
const ConversationContainer = (props) => {
    const { data, loggedinUser } = props
    const [member, setMember] = useState({})

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
        console.log(member)
    return (

        <div className='conversationContainer' >

            <div className='profilePic'>
                <Avatar alt={member.userName} src="" />
                <div className='userInfoConversation'>
                    <p onClick={() => handleSetCurrentChat(`${member._id}`)}>{member.userName}</p>
                    {/* <p>{member.message}</p> */}
                </div>
            </div>
            <span style={{ alignSelf: "center" }}>2:00pm</span>

        </div>

    )
}

export default ConversationContainer


const Chats = (props) => {
    const { data } = props
    console.log(data)
    return (
        <>
            {/* <div className='profilePic'>
                <Avatar alt={user.userName} src="
                            "   />
                <div className='userInfoConversation'>
                    <p onClick={() => handleSetCurrentChat(`${user._id}`)}>{user.userName}</p>
                    <p>{user.message}</p>
                </div>
            </div>
            <span style={{ alignSelf: "center" }}>2:00pm</span> */}
        </>
    )
}