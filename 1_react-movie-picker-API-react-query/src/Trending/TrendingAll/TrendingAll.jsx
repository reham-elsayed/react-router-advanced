import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { fetchTrendingAllToday } from "../../../utils/movies";

const TrendingAll = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["trendingAll"],
    queryFn: fetchTrendingAllToday,
  });

  return (
    <div>
      {isLoading && <div>...loading</div>}
      {data?.map((movie) => (
        <>
          <div className="m-2 flex justify-start items-center gap-4 bg-slate-50">
            <p>title: {movie.title ? movie.title : movie.name}</p>
            <p>rating {movie.vote_average}</p>
            {movie.title ? (
              <Link to={`../movie/${movie.id}`} className="button">
                Movie Details
              </Link>
            ) : (
              <Link to={`series/${movie.id}`} className="button">
                Series Details
              </Link>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default TrendingAll;
