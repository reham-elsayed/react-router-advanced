import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { fetchTrendingAllToday } from "../../../utils/movies";
import HomeCard from "../../components/HomeCard/HomeCard";
import Loader from "../../components/Loader/Loader";

const TrendingAll = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trendingAll"],
    queryFn: fetchTrendingAllToday,
  });

  return (
    <div>
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

export default TrendingAll;
