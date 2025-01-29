import React from "react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, name: "Star wars" },
  {
    id: 2,
    name: "Harry potter",
  },
  {
    id: 3,
    name: "Spider man",
  },
];
const TrendingAll = () => {
  return (
    <div>
      {data.map((movie) => (
        <>
          <div className="m-2 flex justify-start items-center gap-4 bg-slate-50">
            <p>{movie.id}</p>
            <p>{movie.name}</p>
            <Link 
            className="button"
            to={`../movie/${movie.id}`}>
            Movie Details
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default TrendingAll;
