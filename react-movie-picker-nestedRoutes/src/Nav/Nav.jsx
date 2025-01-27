import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-yellow-200">
      <div>Movies</div>
      <div>
        <ul className="flex justify-center p-3">
          <li>
            <Link to="">Home</Link>
          </li>
          <li className="ps-3">
            <Link to="genre">Genre</Link>
          </li>
          <li className="ps-3">
            <Link to="Trending">Trending</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
