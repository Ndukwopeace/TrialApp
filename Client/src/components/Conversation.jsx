import React from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
const Conversation = () => {
  return (
    <div className='conversation'>

        {
            conversation.map((conversation)=>{
                return(
                    <div className='conversationContainer'>
                        <div className='profilePic'>
                            <Avatar src="" alt="dss" />
                            <div className='userInfoConversation'>
                                <p>{conversation.userName}</p>
                                <p>{conversation.message}</p>
                            </div>
                        </div>
                        <span style={{alignSelf:"center"}}>{conversation.time}</span>

                    </div>
                )
            })
        }

    </div>
  )
}

export default Conversation