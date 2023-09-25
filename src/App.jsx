import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './views/Login'

function App() {
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
