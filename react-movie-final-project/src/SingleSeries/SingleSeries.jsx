import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSingleTVDatails } from "../../utils/singleMovie";
import { useNavigate, useParams } from "react-router-dom";
const SingleSeries = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["single-movie-details", id],
    queryFn: getSingleTVdetails,
  });

  async function getSingleTVdetails() {
    return await fetchSingleTVDatails(id);
  }

  return (
    <>
      {isLoading && <div>...loading</div>}
      <div className="p-2 h-screen flex-col flex justify-center items-center">
        Series id {data?.id}
        <span className="text-red-800 font-bold">{data?.name}</span>
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

export default SingleSeries;
