import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchMovieGenres, search } from "../../utils/movies";

const MovieGenres = () => {
  const {data, isError,isLoading, error}= useQuery({
    queryKey:['movie-genres'],
    queryFn:fetchMovieGenres,
   
  })
 
const getsearch= async function(query){
   await search(query)
   }
 

  console.log(data)
  return (
    <div>
      MovieGenres

      <div>
{isLoading && <div>... loading</div>}
{isError && <p>Something went wrong: {error}</p>}
{!isLoading && !isError && data?.map(movie => <p key={movie.id} onClick={()=>{getsearch(movie.name)}}>{movie.name}</p>)}
</div>
    </div>
  );
};

export default MovieGenres;
