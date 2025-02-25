import React, { useEffect, useMemo, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link } from "react-router-dom";
import HeroCard from "../components/Hero/HeroCard";
import HomeCard from "../components/HomeCard/HomeCard";
import Title from "../components/Title/Title";
import useImageObtimizer from "../imageObtimizer";

const Home = () => {
  const [heroMovies, setHeroMovies] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["popular-movies-home"],
    queryFn: getPopularMovies,
  });
//  const imgUrls= useImageObtimizer({movies: data?.slice(0,9)})
useEffect(()=>{
  if (data){
    const heroData = data?.slice(0,9)
    setHeroMovies(heroData)
  
  }
},[data])
const nextSectionRef = useRef(null);

const handleScroll = () => {
  nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

  return (
     <div className=" bg-orange-200 ">
{isLoading && <div>...loading</div>}
{isError && <div>something went wrong {error}</div>}
<div className="">
  <div className="bg-[#373047] py-5" >
    {!isError && <HeroCard heroMovies={heroMovies}/>}
  </div>
  <section className="pt-20">
        <button
          onClick={handleScroll}
          className="h-16 w-8 border border-gray-900  rounded-full relative">
            <div
            onClick={()=>{setIsClicked(prev=>!prev)}}
            className={`h-8 w-8 bg-[#373047] hover:bg-[#27232e] focus:bg-[#2a2141] rounded-full absolute transform duration-200 ${isClicked?'top-0': 'bottom-0'}`}
            ></div>
          </button>
  </section>
<main className="container mx-auto px-3 sm:px-5 md:px-7">
<section 
 ref={nextSectionRef}
id="#home" className="py-20">
  <div>
    <Title title='Popular Movies'/>
  </div>
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

