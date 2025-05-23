import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs' // ✅ Correct path
import Products from './pages/Products'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* ✅ Match link */}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App