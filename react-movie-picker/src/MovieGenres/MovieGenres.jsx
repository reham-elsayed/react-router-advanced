import React, { useEffect, useState } from 'react';
import { Link, Outlet,useSearchParams } from 'react-router-dom';
import { fetchData } from '../../utils/movies';
import { getPopularMovies } from '../../utils/popularMovies';
const MovieGenres = () => {
const [searchParams, setSearchParams] = useSearchParams()
  const [genres, setGenres] = useState([])
  const[movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies]= useState([])
   useEffect(()=>{
     async function getFetch(){
     const moviesGenresData=  await fetchData()
     setGenres(moviesGenresData)
     const moviesData = await getPopularMovies()
     console.log(moviesData)
     
     setMovies(moviesData)
     }
     getFetch()
   },[])

   
   useEffect(()=>{
    const filteredMoviesData= movies.filter(movie=>movie.genre_ids.includes(parseInt(searchParams.get('genre'))))
setFilteredMovies(filteredMoviesData)
console.log(filteredMovies)
   },[searchParams.get('genre')])
   
  return (
    <div>
      {/* <ul className="flex justify-center">
        <li className="ps-2">
          <Link to="drama">Drama</Link>
        </li>
        <li className="ps-2">
          <Link to="action">Action</Link>
        </li>
      </ul> */}
      <h1>About</h1>
      {genres.map((genre)=>(
        <div key={genre.name}>
          <p
         >
            <Link to={`?genre=${genre.id}`}>
            {genre.name}
            </Link>
          </p>
        </div>
      ))}
      <div>{filteredMovies?<p>{filteredMovies.map(movie=>movie.title)}</p>:
      <div>{movies.map(movie=>movie.title)}</div>
      }</div>
      <div>
        {/* Render the nested route here */}
        <Outlet />
      </div>
    </div>
  );
};

export default MovieGenres;
