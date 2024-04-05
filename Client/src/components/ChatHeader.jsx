import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Box , TextField , OutlinedInput, Button} from '@mui/material'
const ChatHeader = (props) => {
  const {isContactPage} = props
  return (
    
      <div className="chatHeader">
        { isContactPage?
          <h3>Contacts</h3>
            :
          <h3>Chats</h3>
          }
        <form className='chatForm'>
          <Box sx={{display:"flex" , height:"3rem"}}>
            <OutlinedInput placeholder='Search or start a new Chat..' fullWidth/>
            <Button  endIcon = {<SearchIcon/>} ></Button>
          </Box>

        </form>
      </div>

    
  )
}

export default ChatHeader