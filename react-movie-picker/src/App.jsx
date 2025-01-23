import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import About from './MovieGenres/MovieGenres'
import Nav from './Nav/Nav'
import Drama from './Drama/Drama'
import Action from './Action/Action'
import TrendingLayout from './Trending/TrendingLayout'
import TrendingMovies from './TrendingMovies/TrendingMovies'
import TrendingAll from './TrendingAll/TrendingAll'
import TrendingSeries from './TrendingSeries/TrendingSeries'
import SingleMovieDetail from './SingleMovieDetail/SingleMovieDetail'
import Layout from './Layout/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  {/* <Nav/> */}
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/moviegenres' element={<About/>}>
      <Route path='drama' element={<Drama/>}/>
      <Route path='action' element={<Action/>}/>
    </Route>
    <Route path='/trending' element={<TrendingLayout/>}>
    <Route index element={<TrendingAll/>}/>
    <Route path='seriestrend' element={<TrendingSeries/>}/>  
    <Route path='moviestrend' element={<TrendingMovies/>}/> 
    <Route path='singlemovie/:movie_id' element={<SingleMovieDetail/>} />

    </Route>
    </Route>
  </Routes>
  </BrowserRouter>
   </>
   )}

export default App
