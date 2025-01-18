import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li className="ps-2">
          <Link to="drama">Drama</Link>
        </li>
        <li className="ps-2">
          <Link to="action">Action</Link>
        </li>
      </ul>
      <h1>About</h1>
      <div>
        {/* Render the nested route here */}
        <Outlet />
      </div>
    </div>
  );
};

export default About;
