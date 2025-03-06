import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTrendingSeriesToday } from "../../../utils/movies";
import HomeCard from "../../components/HomeCard/HomeCard";
import Loader from "../../components/Loader/Loader";

const TrendingSeries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tending-series"],
    queryFn: fetchTrendingSeriesToday,
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

export default TrendingSeries;
