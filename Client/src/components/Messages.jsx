import React from 'react'
import {Box , TextField , OutlinedInput, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { MessageData } from '../../sampleData/messageData';
const Messages = () => {
  return (
    <div className='messages'>
        <div className='message'>
            {
                MessageData.map(message =>{
                    
                    return (    
                        <div>
                            <p>{message.message}</p>
                        </div>
                    )
                })
            }
        </div>
        <div>
        <form className='chatForm'>
          <Box sx={{display:"flex" , height:"3rem"}}>
            <OutlinedInput placeholder='Search or start a new Chat..' fullWidth/>
            <Button  endIcon = {<SendIcon/>} ></Button>
          </Box>

        </form>
        </div>
        </div>
  )
}

export default Messages