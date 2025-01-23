import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleMovieDetails } from '../../utils/singleMovie'

const SingleMovieDetail = () => {
    const {movie_id} = useParams()
    const [movie, setMovie] = useState({})

useEffect(()=>{
    async function getSingleMovie(){
      const movieData=   await getSingleMovieDetails(movie_id)
     
      setMovie(movieData)
    }
    getSingleMovie()
},[])



  return (
    <div>SingleMovieDetail
        {movie.name}
    </div>
  )
}

export default SingleMovieDetail