import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../utils/popularMovies";
const Home = () => {
const {data, isError,isLoading, error}= useQuery({
  queryKey:['popular-movies-home'],
  queryFn:getPopularMovies,
 
})

return  (
  <div>
{isLoading && <div>... loading</div>}
{isError && <p>Something went wrong: {error}</p>}
{!isLoading && !isError && data?.map(movie => <p key={movie.id}>{movie.title}</p>)}
</div>
)

};

export default Home;
