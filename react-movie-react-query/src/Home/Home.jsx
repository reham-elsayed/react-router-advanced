import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link } from "react-router-dom";
import HeroCard from "../components/Hero/HeroCard";
import HomeCard from "../components/HomeCard/HomeCard";

const Home = () => {
  const [heroMovies, setHeroMovies] = useState([])
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["popular-movies-home"],
    queryFn: getPopularMovies,
  });
useEffect(()=>{
  if (data){
    const heroData = data?.slice(0,9)
    setHeroMovies(heroData)
  }
},[data])

  return (
     <div className=" bg-orange-200 ">
{isLoading && <div>...loading</div>}
{isError && <div>something went wrong {error}</div>}
<div className="flex flex-col gap-3">
  <div className="bg-[#373047] py-5" >
    {!isError && <HeroCard heroMovies={heroMovies}/>}
  </div>
<main className="container mx-auto px-3 sm:px-5 md:px-7">
<section className="py-36">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
{data?.map(movie=>(
<HomeCard movie={movie}/>
))}
</div>
</section>
</main>
</div>

</div>

  )
};

export default Home;
