import axios from 'axios'
const Base_Url = "http://localhost:8000/oAuth"
const API = axios.create({baseURL: Base_Url})
const oAuthRequests = {
    registerUser : (user)=>API.post("/register", user , {withCredentials: true}),
    loginUser : (loginUser) => API.post("/login", loginUser , {withCredentials : true}),

}

export default  oAuthRequests;