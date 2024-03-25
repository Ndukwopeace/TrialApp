import App from "../src/App.jsx"
import {createBrowserRouter} from 'react-router-dom'
import HomePage from "../src/pages/HomePage.jsx";
import AuthPage from "../src/pages/AuthPage.jsx";
import DashBoard from "../src/pages/DashBoard.jsx";


const router = createBrowserRouter([
{
   path : "/",
   element : <App/>,
   children : [
    {
        path: "/",
        element : <HomePage/>
    },
    {
        path: "oauth",
        element : <AuthPage/>
    },
    {
        path: "dashboard",
        element : <DashBoard/>
    }
   ]
}])

export default  router;