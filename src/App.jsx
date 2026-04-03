import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { Home } from "./pages/home.jsx"
import { Chat } from "./pages/chat.jsx"

function App() {
  return (
    <BrowserRouter style={{ height: '100vh', "background-color": "#111111"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App