import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link } from "react-router-dom";
import HeroCard from "../components/Hero/HeroCard";

const Home = () => {
  const [heroMovies, setHeroMovie] = useState([])
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["popular-movies-home"],
    queryFn: getPopularMovies,
  });
 useEffect(()=>{
if(!isError && data){
setHeroMovie(data.slice(0,9))
}
 },[data])

  return (
<div class="container mx-auto px-0 sm:px-3 md:px-7 bg-slate-200 flex flex-col justify-between gap-3 pt-3">
{isLoading && <div>... loading</div>}
      {isError && <p>Something went wrong: {error}</p>}
      <div className="">
      {data && <HeroCard heroMovies={heroMovies} />}
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
     {!isLoading &&
        !isError &&
        data?.map((movie) => (

          <div className="flex flex-col items-center p-2 bg-red-600">
            <div className="">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className='w-full h-full'
                />
            </div>
            <p key={movie.id}>{movie.title} </p>
            <Link to={`movie/${movie.id}`} className="button">
              See Details
            </Link>
          </div>
        ))}
     </div>
     
    </div>
  );
};

export default Home;
