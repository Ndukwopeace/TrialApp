import React, {useState} from 'react'
import { conversation } from '../../sampleData/conversation'
import { Avatar } from '@mui/material'
import axios from 'axios';
const Conversation = (props) => {
    const { users , loggedinUser} = props;
    const [currentChat , setCurrentChat ] = useState("")
    const contactsArray = users.filter(user => user._id !== loggedinUser._id);
    // console.log(contactsArray)

    const handleSetCurrentChat = () => {
        
    }
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
                                <p onClick={handleSetCurrentChat}>{user.userName}</p>
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