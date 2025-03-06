import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchMovieGenres } from "../../utils/movies";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link, useSearchParams } from "react-router-dom";

const MovieGenres = () => {
  const [filteredMovies, setFilteredMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("genre"));
  async function getMoviesAndGenres() {
    const genres = await fetchMovieGenres();
    const movies = await getPopularMovies();
    return { movies, genres };
  }
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["combined-api-call"],
    queryFn: getMoviesAndGenres,
  });

  function handleFilteredMovies(id) {
    console.log(id);
    if (data) {
      const { movies } = data;
      const filteredData = movies.filter((movie) =>
        movie.genre_ids.includes(+id),
      );
      console.log(filteredData);
      setFilteredMovies(filteredData);
    }
  }
  useEffect(() => {
    if (searchParams.get("genre")) {
      handleFilteredMovies(searchParams.get("genre"));
    } else {
      if (data) {
        setFilteredMovies(data?.movies);
      }
    }
  }, [data, searchParams.get("genre")]);
  return (
    <div>
      MovieGenres
      <div className="flex justify-between items-center overflow-hidden flex-wrap">
        {isLoading && <div>...Loading</div>}

        {data
          ? data?.genres?.map((genre) => (
              <Link
                to={`.?genre=${genre.id}`}
                className="p-2 cursor-pointer"
                key={genre.id}
              >
                {genre.name}
              </Link>
            ))
          : null}
      </div>
      <div>
        {filteredMovies?.length === 0 ? (
          <p>No Movies Found</p>
        ) : (
          filteredMovies?.map((movie) => <p>{movie.title}</p>)
        )}
      </div>
    </div>
  );
};

export default MovieGenres;
