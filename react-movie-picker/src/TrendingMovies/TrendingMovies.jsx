import React, { useEffect, useState } from 'react'
import { fetchTrendingMoviesToday } from '../../utils/movies'

const TrendingMovies = () => {
  const [movies, setMovies] =useState([])

  useEffect(()=>{
    async function getMovies(){
     const movieData= await fetchTrendingMoviesToday()
     setMovies(movieData)
    }

    getMovies()
  },[])
  return (
    <div>
      {
        movies.map(movie=>
          <>
          <h1>trending movie</h1>
          <p key={movie.id}>
          {movie.title}</p>
          </>
        )
      }

    </div>
  )
}

export default TrendingMovies