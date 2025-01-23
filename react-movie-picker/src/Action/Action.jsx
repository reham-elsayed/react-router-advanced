import React from 'react'
import {fetchData} from '../../utils/movies'
import { useState, useEffect } from 'react'

const Action = () => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    async function getFetch(){
    const moviesData=  await fetchData()
    setMovies(moviesData)
    }
    getFetch()
  },[])
  return (
    <div>
      {
        movies.map(movie=><p key={movie.id}>{movie.name}</p>)
      }
    </div>
  )
}

export default Action