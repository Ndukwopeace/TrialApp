import axios from 'axios'
const Base_Url = "http://localhost:8000/messages"
const API = axios.create({baseURL: Base_Url})


const messageRequests = {
 getMessageByChatId : (chatId) => API.get(`/${chatId}` , {withCredentials:true}),
 sendMessage: (message) =>{
        // console.log(chatId);
        // console.log(senderId);
        // console.log(message)
    return API.post(`/send/` ,message , {withCredentials : true })}
}

export default messageRequests;