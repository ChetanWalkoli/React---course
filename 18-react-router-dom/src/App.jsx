import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navnbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contect'
import Product from './pages/product'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </main>
    </div>
  )
}

export default App