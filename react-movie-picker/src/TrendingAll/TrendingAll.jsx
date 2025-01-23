import React, { useEffect, useState } from 'react'
import { fetchTrendingAllToday } from '../../utils/movies'

const TrendingAll = () => {
   const [movies, setMovies] = useState([])
    useEffect(()=>{
      async function getFetch(){
      const moviesData=  await fetchTrendingAllToday()
      setMovies(moviesData)
      }
      getFetch()
    },[])
  return (
    <div>TrendingAll this is default
    {movies?.map(movie=><p key={movie.id}>{movie.title?movie.title:movie.name}</p>)}
    </div>
  )
}

export default TrendingAll