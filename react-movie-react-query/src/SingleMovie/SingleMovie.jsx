import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSingleMovieDatails } from "../../utils/singleMovie";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title/Title";
import Loader from "../components/Loader/Loader";
const SingleMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["single-movie-details", id],
    queryFn: getSingleMoviedetails,
  });

  async function getSingleMoviedetails() {
    return await fetchSingleMovieDatails(id);
  }

  return (
    <>
      <div className="p-5 md:h-[calc(100vh_-_6rem)] flex-col flex justify-center items-center md:flex-row">
      {isLoading && <div><Loader/></div>}
        {data && <>
          <div className="w-full md:w-1/3 h-full">
      <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          srcSet={`
     https://image.tmdb.org/t/p/w200/${data.poster_path} 200w,
     https://image.tmdb.org/t/p/w300/${data.poster_path} 300w,
     https://image.tmdb.org/t/p/w500/${data.poster_path} 500w,
     https://image.tmdb.org/t/p/w780/${data.poster_path} 780w`}
          sizes="(max-width: 400px) 200px,
    (max-width: 768px) 300px,
    (max-width: 1024px) 500px,
    780px
    "
          alt={data.title}
          className="h-full object-contain rounded-md w-full"
        />
      </div>
        <div className="p-3 text-start w-full md:w-2/3">
          <Title title={data.title} text={'text-start'}/>
          <div className="">
          <p className="text-white dark:text-white text-sm md:text-base leading-relaxed md:leading-loose tracking-wide">
          {data.overview}</p>
          <p className="text-white dark:text-white text-sm md:text-base leading-relaxed md:leading-loose tracking-wide">
              Date Of Release : {data.release_date}</p>
              <p className="text-white dark:text-white text-sm md:text-base leading-relaxed md:leading-loose tracking-wide">
              Rating :{data.popularity }</p>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-2 py-3">
            <button
            className="button"
            onClick={()=>{navigate(-1)}}
            >Go Back</button>
           <button
           className="button"
           onClick={()=>{window.open(data.homepage, '_blank')}}>Go To Movie</button>
          </div>
        </div>
        </>}

      </div>
    </>
  );
};

export default SingleMovie;
