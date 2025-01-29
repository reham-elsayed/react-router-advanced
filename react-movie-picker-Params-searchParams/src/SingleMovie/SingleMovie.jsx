import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleMovie = () => {
 const { id } = useParams()
 const navigate = useNavigate()
  return (
    <>
      <div className="p-2 h-screen flex-col flex justify-center items-center">
        SingleMovie with id :{id}
        <span className="text-red-800 font-bold"></span>
        <button 
        onClick={()=>{navigate(-1)}}
        className="button">Go Back</button>
      </div>
    </>
  );
};

export default SingleMovie;
