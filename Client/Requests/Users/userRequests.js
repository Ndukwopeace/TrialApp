import axios from 'axios'
const Base_Url = "http://localhost:8000/users"
const API = axios.create({baseURL: Base_Url})

const userRequest = {
    getUser : (userId)=>  API.get(`/${userId}`, {withCredentials: true}) 
}

export default userRequest;
