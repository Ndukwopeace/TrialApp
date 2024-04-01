import React from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
const Conversation = (props) => {
    const { users } = props;
  return (
    <div className='conversation'>

        {
            users.map((user)=>{
                return(
                    <div className='conversationContainer'>
                        <div className='profilePic'>
                            <Avatar alt={user.userName} src="
                            "   />
                            <div className='userInfoConversation'>
                                <p>{user.userName}</p>
                                {/* <p>{user.message}</p> */}
                            </div>
                        </div>
                        <span style={{alignSelf:"center"}}>2:00pm</span>

                    </div>
                )
            })
        }

    </div>
  )
}

export default Conversation