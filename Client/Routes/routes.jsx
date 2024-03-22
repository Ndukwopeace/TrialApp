import App from "../src/App.jsx"
import {createBrowserRouter} from 'react-router-dom'
import RegisterPage from "../src/pages/RegisterPage"


const router = createBrowserRouter([
{
   path : "/",
   element : <App/>,
   children : [
    {
        path: "register",
        element : <RegisterPage/>
    }
   ]
}])

export default  router;