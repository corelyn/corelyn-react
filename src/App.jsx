import './App.css'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"

import { Home } from "./pages/home.jsx"
import { Chat } from "./pages/chat.jsx"

function App() {
  return (
    <Router>
      <div className="app-shell" style={{ minHeight: '100vh', backgroundColor: '#111111' }}>
        <header className="app-nav">
          <Link to="/" className="app-link">Home</Link>
          <Link to="/chat" className="app-link">Chat</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App