import App from "../src/App.jsx"
import {createBrowserRouter} from 'react-router-dom'
import HomePage from "../src/pages/HomePage.jsx";
import AuthPage from "../src/pages/AuthPage.jsx";


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
    }
   ]
}])

export default  router;