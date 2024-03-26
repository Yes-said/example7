import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
      <Navbar />
      <Sidebar />
      <div className="content">
      </div>
    </div>
  )
}

export default App
