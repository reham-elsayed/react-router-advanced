import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import MovieGenres from './MovieGenres/MovieGenres'
import Nav from './Nav/Nav'

function App() {

  return (
  <>
<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/genre' element={<MovieGenres/>}/>
</Routes>
</BrowserRouter>
  </>
 
   )}

export default App
