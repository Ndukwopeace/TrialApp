import axios from 'axios'
const Base_Url = "http://localhost:8000/messages"
const API = axios.create({baseURL: Base_Url})


const chatRequests = {
 getMessageByChatId : (chatId) => API.get(`/${chatId}` , {withCredentials:true})
}

export default chatRequests;