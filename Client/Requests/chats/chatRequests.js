import axios from 'axios'
const Base_Url = "http://localhost:8000/chats"
const API = axios.create({baseURL: Base_Url})
