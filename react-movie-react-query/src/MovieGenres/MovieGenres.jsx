import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchMovieGenres } from "../../utils/movies";
import { getPopularMovies } from "../../utils/popularMovies";


const MovieGenres = () => {
 // genres array : {id, genre}
 // movies getPopularmovie filter genre
 async function combinedQueries(){
 const genres= await fetchMovieGenres();
 const movies =  await getPopularMovies()
 return {genres, movies}
 }
const {data, error, isLoading}=useQuery({
  queryKey:['combined-fetch'],
  queryFn: combinedQueries
})
const filterMovieByGenre = function (id=28){
  if(data)
{const { movies} = data

return movies.filter((movie)=>movie.genre_ids.includes(id))
}}
console.log(filterMovieByGenre())
  return (
    <div>
      MovieGenres
       <div>

</div>
    </div>
  );
};

export default MovieGenres;
