import { useState } from 'react' 
import './App.css'
// import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <div>
      <Outlet />
      {/* <DashBoard/> */}
    </div>
  )
}

export default App
