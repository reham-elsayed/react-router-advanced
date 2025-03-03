import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="fixed top-1 left-0 right-0 index ">
      <nav className="flex justify-between items-center container mx-auto px-3 md:px-5 rounded-full white/50 backdrop-blur-md shadow-sm ">
        <div>
         <p className="font-bold text-white"> Movies</p>
        </div>
        <div>
          <ul className="flex justify-center p-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-md ${isActive ? "text-yellow-500" : "text-white"}`
                }
                to="."
              >
                Home
              </NavLink>
            </li>
            <li className="ps-3">
              <NavLink
                className={({ isActive }) =>
                  `text-md ${isActive ? "text-yellow-500" : "text-white"}`
                }
                to="genre"
              >
                Genre
              </NavLink>
            </li>
            <li className="ps-3">
              <NavLink
                className={({ isActive }) =>
                  `text-md ${isActive ? "text-yellow-500" : "text-white"}`
                }
                to="Trending"
              >
                Trending
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
