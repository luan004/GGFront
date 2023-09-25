import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/App.css'

import Login from './views/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path="/" element={<h1>Root</h1>} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
