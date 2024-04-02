import axios from 'axios'
const Base_Url = "http://localhost:8000/chats"
const API = axios.create({baseURL: Base_Url})


const chatRequests = {
    createChat : (recieverId , senderId)=>API.post(`/create/${recieverId}/${senderId}`, {withCredentials: true}),
    getAllChat : () => API.get('/', {withCredentials: true}),
    getChat : (chatId)=>API.post(`/create/${chatId}`, {withCredentials: true}),
}

export default chatRequests;