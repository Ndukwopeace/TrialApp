import React from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
const Conversation = (props) => {
    const { users , loggedinUser} = props;

    const contactsArray = users.filter(user => user._id !== loggedinUser._id);
    // console.log(contactsArray)
  return (
    <div className='conversation'>

        {
            contactsArray.map((user , index)=>{
                return(
                    <div className='conversationContainer' key={index}>
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