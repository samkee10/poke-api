import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Menu from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemones />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
