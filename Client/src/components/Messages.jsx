import React, { useEffect, useRef, useState } from 'react'
import { Box, TextField, OutlinedInput, Button, InputLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { MessageData } from '../../sampleData/messageData';
import messageRequests from '../../Requests/Messages/messageRequests';
import { io } from 'socket.io-client';
import {format} from 'timeago.js'





const Messages = (props) => {
    const [socket] = useState(() => io(":8000"));
    const { currentChat, loggedinUser } = props;
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("");
    const userId = useState(loggedinUser._id);
    const [isTyping, setIsTyping] = useState(false);
    const [chat , setChat] = useState([])
    // let messagediv = document.querySelector('.message');
    const [chatArray , setChatArray] = useState([])
    const scroll = useRef();
    console.log(loggedinUser._id)
    console.log(currentChat)

    console.log(text)

    //  handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {
            chatId : currentChat,
            senderId : loggedinUser._id,
            message : text
        }
        messageRequests.sendMessage(message)
            .then((res) => {
                console.log(res.data)
                setMessages((prev)=> [...prev , res.data])
                setText("")
            }).catch(err => console.log(err));

            socket.emit("sendMessage" , {text , currentChat});
            // setChat((prev) => [...prev, {text , recieved : false}]);

            // messagediv.scrollIntoView(false)

    }
    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleInput = (e) => {
        setText(e.target.value);
        socket.emit("isTyping", { currentChat })
        if (typingTimeout) { clearTimeout(typingTimeout) }
        setTypingTimeout(setTimeout(() => {
            socket.emit("typingStopped", { currentChat })
            // console.log(currentChat)
            // console.log('typing stopped')
        }, 1000)
        );

    }

    // socket ..........................................

    useEffect(() => {
        if (!socket) return;
        console.log('is socket running??')
        socket.on('Welcome', data => {
            console.log(data);
            console.log('yes socket is running well')
        })

        socket.on("isTyping",setIsTyping(true))
        socket.on("typingStopped",setIsTyping(false))

        return () => socket.off("welcome");
    }, [socket])


    useEffect(() => {
        if (currentChat !== null) {
            // setMessages([]);
            console.log("current chat is " + currentChat)
            messageRequests.getMessageByChatId(currentChat)
                .then(res => {
                    console.log(res)
                    setMessages(res.data)
                })
                .catch(err => console.log(err))
        } else {
            return;
        }
    }, [currentChat,messages])

    // scroll to last message 

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior: "smooth"})
    },[text])

    console.log(messages)


    return (
        <div className='messages'>
            <div className='message' ref={scroll}>
                {
                    messages?.map(message => {
                        return (
                            <div className='chatBubble' style={{
                                borderRadius: message.senderId !== loggedinUser._id ? "0.75rem 0.5rem 0.75rem 0" : "0.75rem 0.75rem 0  0.75rem",
                                alignSelf: message.senderId !== loggedinUser._id ? "start" : "end",
                                backgroundColor: message.senderId !== loggedinUser._id ? "rgb(255,255,255)" : "rgb(233,255,219)",
                                display:"flex",
                                flexDirection: "column",
                                justifyContent:"flex-start",

                            }}>
                                <p>{message.message}</p>
                                <p style={{fontSize:"0.7rem" , alignSelf:"flex-start", gap:"1rem"}}>{format(message.createdAt)}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ display:"flex" , flexDirection:"column"}}>
            {
                        isTyping ?
                            <InputLabel shrink htmlFor="message-input" style={{ alignSelf:"flex-end" ,color:"white"}}>
                                Typing....
                            </InputLabel>
                            :
                            null
                    }
                <form onSubmit={handleSubmit} className='chatForm' style={{
                    display: "flex", alignItems: "center"
                    , borderRadius: "1rem", height: "3rem", background: "rgb(252, 252, 252)"
                }}>

                    <OutlinedInput placeholder='Send a message.....' fullWidth className="input" value={text} onChange={handleInput} />
                    <Button type="submit" endIcon={<SendIcon fontSize='larger' />} className='button' ></Button>
                </form>

            </div>
        </div>
    )
}

export default Messages