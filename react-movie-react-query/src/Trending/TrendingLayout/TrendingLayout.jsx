import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const TrendingLayout = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-between items-center px-10 mx-auto pt-5">
          <li>
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
              end
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trendingmovies"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trendingseries"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default TrendingLayout;
