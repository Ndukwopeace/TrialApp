import { useState } from 'react' 
import './App.css'
// import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
