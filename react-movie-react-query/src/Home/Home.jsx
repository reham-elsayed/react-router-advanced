import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link } from "react-router-dom";

const Home = () => {
const {data, isError,isLoading, error}= useQuery({
  queryKey:['popular-movies-home'],
  queryFn:getPopularMovies,
 
})
console.log(data)

return  (
  <div>
{isLoading && <div>... loading</div>}
{isError && <p>Something went wrong: {error}</p>}
{!isLoading && !isError && data?.map(movie =><div className="flex justify-evenly items-center"> <p key={movie.id}>{movie.title} </p> 
<Link 
to={`movie/${movie.id}`} 
className="button"
>See Details</Link>
</div>)}
</div>
)

};

export default Home;
