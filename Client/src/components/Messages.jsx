import React,{useEffect, useState} from 'react'
import {Box , TextField , OutlinedInput, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { MessageData } from '../../sampleData/messageData';
import { io } from 'socket.io-client';
const Messages = () => {
  // const [socket] = useState(()=>io(":8000"))
  // useEffect(()=>{
  //   console.log('is socket running??')
  //   socket.on('Welcome' , data => {
  //     console.log(data);
  //     console.log('yes socket is running well')
  //   })

  //   return ()=>socket.off("welcome");
  // })
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
   
          
            <form action="" style={{display:"flex" , alignItems:"center" , border:"1px solid black", borderRadius:"1rem" , height:"3rem" , background:"rgb(252, 252, 252)"}}>
            <OutlinedInput placeholder='Send a message.....' fullWidth className="input" />
            <Button type="submit"endIcon = {<SendIcon fontSize='larger'/>} className='button' ></Button>
            </form>
          

        </form>
        </div>
        </div>
  )
}

export default Messages