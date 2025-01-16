import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import About from './About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <nav >
    <Link to="/">home</Link>
    <Link to="/about">     about</Link>
  </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
   </>
   )}

export default App
