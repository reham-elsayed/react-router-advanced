import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTrendingMoviesToday } from "../../../utils/movies";
import { Link } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import Loader from "../../components/Loader/Loader";

const TrendingMovie = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tending-movie"],
    queryFn: fetchTrendingMoviesToday,
  });
  return (
    <div className="">
      {isLoading && <div><Loader/></div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
    {data?.map((movie) => (
        <>
         <HomeCard movie={movie}/>
        </>
      ))}
    </div>
    </div>
  );
};

export default TrendingMovie;
