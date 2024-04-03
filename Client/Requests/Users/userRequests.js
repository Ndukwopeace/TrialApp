import axios from 'axios'
const Base_Url = "http://localhost:8000/users"
const API = axios.create({baseURL: Base_Url})

<<<<<<< HEAD
const userRequests = {
    getUser : (userId)=>  API.get(`/${userId}`, {withCredentials: true})
}

export default  userRequests;
=======
const userRequest = {
    getUser : (userId)=>  API.get(`/${userId}`, {withCredentials: true}) 
}

export default userRequest;
>>>>>>> fb0e33b864552337d3055ad5c338172cb408c343
