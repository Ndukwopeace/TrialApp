import axios from 'axios'
const Base_Url = "http://localhost:7000/user"

export default userRequests = {
    registerUser : (user)=>{
        axios.get(Base_Url , user , {withCredentials: true})
    }
}