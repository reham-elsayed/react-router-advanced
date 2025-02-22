import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchMovieGenres } from "../../utils/movies";
import { getPopularMovies } from "../../utils/popularMovies";
import { Link, useSearchParams } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";
import Title from "../components/Title/Title";

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
    <div className="flex flex-col items-center py-10">
      <div className="flex justify-between items-center overflow-hidden flex-wrap w-4/5 gap-2">
        {isLoading && <div>...Loading</div>}
        {data
          ? data?.genres?.map((genre) => (
              <Link
             
                to={`.?genre=${genre.id}`}
                className="p-2 w-28 text-center cursor-pointer button rounded-full"
                key={genre.id}
              >
                {genre.name}
              </Link>
            ))
          : null}
      </div>
      <section
      className="container mx-auto px-3 sm:px-5 md:px-7 py-10"
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-center">
      {filteredMovies?.length === 0 ? (
        <div className="text-center col-span-full">
         <p className=""><Title title='No Movies Found'/></p>
        </div>
        ) : (
          filteredMovies?.map((movie) => <p><HomeCard movie={movie}/></p>)
        )}
      </div>
      </section>
    </div>
  );
};

export default MovieGenres;
