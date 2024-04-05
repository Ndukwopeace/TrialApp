import axios from 'axios'
const Base_Url = "http://localhost:8000/chats"
const API = axios.create({baseURL: Base_Url})


const chatRequests = {
    createChat : (recieverId , senderId)=>API.post(`/create/${recieverId}/${senderId}`, {withCredentials: true}),
    getAllChat : () => API.get('/', {withCredentials: true}),
    getOneChat : (chatId)=>API.get(`/chats/${chatId}`, {withCredentials: true}),
    getUserChat : (userId)=>API.get(`/${userId}`, {withCredentials: true}),
}

export default chatRequests;