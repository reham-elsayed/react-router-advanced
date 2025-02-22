import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTrendingSeriesToday } from "../../../utils/movies";
import { Link } from "react-router-dom";

const TrendingSeries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tending-series"],
    queryFn: fetchTrendingSeriesToday,
  });
  return (
    <div>
      {isLoading && <div>...loading</div>}
      {data?.map((series) => (
        <>
          <div className="m-2 flex justify-start items-center gap-4 bg-slate-50">
            <p>title: {series.title}</p>
            <p>rating {series.vote_average}</p>
            <Link to={`/series/${series.id}`} className="button">
              Series Details
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default TrendingSeries;
