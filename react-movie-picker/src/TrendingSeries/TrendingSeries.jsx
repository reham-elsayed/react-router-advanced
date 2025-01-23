import React, { useEffect, useState } from 'react'
import { fetchTrendingSeriesToday } from '../../utils/movies'
import { useNavigate, useParams } from 'react-router-dom'

const TrendingSeries = () => {
 const {movie_id} = useParams()
 

    const [movies, setMovies] = useState([])
    const navigate = useNavigate()
        useEffect(()=>{
          async function getFetch(){
          const moviesData=  await fetchTrendingSeriesToday()
          console.log(moviesData)
          setMovies(moviesData)
          }
          getFetch()
        },[])

        function handleSearchMovie(movie_id){
        //searchParams.set("movie_id",movie_id)
        console.log(movie_id)
        navigate(`../singlemovie/${movie_id}`)
        
        }
  return (
    <div>  <div> <h1>trending series</h1>
    {movies?.map(movie=><div key={movie.id}>{movie.name}

      <button className='bg-slate-400' onClick={()=>{handleSearchMovie(movie.id)}}>get movie detail</button>
    </div>)}
    </div></div>
  )
}

export default TrendingSeries