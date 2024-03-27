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
                        <div className='chatBubble' style={{
                            borderRadius: message.id !== 'me' ? "0.75rem 0.5rem 0.75rem 0": "0.75rem 0.75rem 0  0.75rem",
                            alignSelf: message.id !== 'me' ? "start": "end",
                            backgroundColor: message.id !== 'me' ? "rgb(255,255,255)" : "rgb(233,255,219)"
                        }}>
                            <p>{message.message}</p>
                        </div>
                    )
                })
            }
        </div>
        <div>
        <form className='chatForm'>
   
          <Box sx={{display:"flex" ,borderRadius:"1rem" , height:"3rem" , background:"rgb(252, 252, 252)"}}>
            <OutlinedInput placeholder='Send a message.....' fullWidth className="input" />
            <Button  endIcon = {<SendIcon fontSize='larger'/>} className='button' ></Button>
          </Box>

        </form>
        </div>
        </div>
  )
}

export default Messages