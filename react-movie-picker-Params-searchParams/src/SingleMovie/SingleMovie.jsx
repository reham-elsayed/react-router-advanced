import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams, useLocation} from "react-router-dom";

const SingleMovie = () => {
 const [searchParams, setSearchParams] = useSearchParams()
 const [movie, setMovie] = useState()
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  useEffect(()=>{
    setMovie(searchParams.get("name"))
  },[])
  return (
    <>
      <div className="p-2 h-screen flex-col flex justify-center items-center">
        SingleMovie with id :{id}
        <span className="text-red-800 font-bold">{movie? movie:'no movie'}</span>
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
