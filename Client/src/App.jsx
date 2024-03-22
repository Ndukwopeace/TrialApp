import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
const [isHomePage , setIsHomePage] = useState(true)

  return (
    <>
      <NavBar/>
      {
        isHomePage && <h1>Welcome To MYCHatApp</h1>
      }
      <Outlet context={[isHomePage , setIsHomePage] }/>
    </>
  )
}

export default App
