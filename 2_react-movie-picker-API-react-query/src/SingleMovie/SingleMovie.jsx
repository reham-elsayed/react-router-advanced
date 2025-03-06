import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSingleMovieDatails } from "../../utils/singleMovie";
import { useNavigate, useParams } from "react-router-dom";
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
      <div className="p-2 h-screen flex-col flex justify-center items-center">
        SingleMovie with id {data?.id}
        <span className="text-red-800 font-bold">{data?.title}</span>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="button"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default SingleMovie;
