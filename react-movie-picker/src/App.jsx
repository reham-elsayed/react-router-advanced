import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import About from './About/About'
import Nav from './Nav/Nav'
import Drama from './Drama/Drama'
import Action from './Action/Action'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/about' element={<About/>}>
      <Route path='drama' element={<Drama/>}/>
      <Route path='action' element={<Action/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
   </>
   )}

export default App
