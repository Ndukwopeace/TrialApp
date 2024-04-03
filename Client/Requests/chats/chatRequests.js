import axios from 'axios'
const Base_Url = "http://localhost:8000/chats"
const API = axios.create({baseURL: Base_Url})


const chatRequests = {
    createChat : (recieverId , senderId)=>API.post(`/create/${recieverId}/${senderId}`, {withCredentials: true}),
    getAllChat : () => API.get('/', {withCredentials: true}),
<<<<<<< HEAD
    // getChat : (chatId)=>API.post(`/create/${chatId}`, {withCredentials: true}),
    getAllUserChat: (userId)=>API.post(`/${userId}`, {withCredentials: true}),
=======
    getOneChat : (chatId)=>API.get(`/chats/${chatId}`, {withCredentials: true}),
    getUserChat : (userId)=>API.get(`/${userId}`, {withCredentials: true}),
>>>>>>> fb0e33b864552337d3055ad5c338172cb408c343
}

export default chatRequests;