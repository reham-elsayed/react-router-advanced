import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const TrendingLayout = () => {
  return (
    <div className="relative container mx-auto px-2 md:px-5 lg:px-7">
      <nav className="fixed top-16 left-32 index ">
        <ul className="flex justify-between  items-center container px-10 mx-auto  white/50 backdrop-blur-md shadow-sm rounded-full">
          <li>
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
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
                isActive ? "text-yellow-500" : "text-white"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trendingseries"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }
            >
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
     <div className="pt-10">
     <Outlet />
     </div>
    </div>
  );
};

export default TrendingLayout;
