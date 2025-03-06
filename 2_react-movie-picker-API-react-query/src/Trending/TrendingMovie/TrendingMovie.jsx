import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTrendingMoviesToday } from "../../../utils/movies";
import { Link } from "react-router-dom";

const TrendingMovie = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tending-movie"],
    queryFn: fetchTrendingMoviesToday,
  });
  return (
    <div>
      {isLoading && <div>...loading</div>}
      {data?.map((movie) => (
        <>
          <div className="m-2 flex justify-start items-center gap-4 bg-slate-50">
            <p>title: {movie.title}</p>
            <p>rating {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`} className="button">
              Movie Details
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default TrendingMovie;
