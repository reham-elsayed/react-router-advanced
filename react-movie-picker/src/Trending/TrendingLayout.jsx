import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
const TrendingLayout = () => {
  return (
    <>
    <div className='pt-11 bg-red-400'>
    <ul className="flex justify-center">
      {/* 
      Use ".": When linking relative to the parent route, especially for nested layouts like TrendingLayout.
Use "/trending": When creating an absolute link from outside the parent route or when dynamic resolution is not needed.
      */}
      <li className="ps-2">
      <NavLink to="." end>All</NavLink>
      </li>
      <li className="ps-2">
        <NavLink to="moviestrend">Movies</NavLink>
      </li>
      <li className="ps-2">
        <NavLink to="seriestrend">Series</NavLink>
      </li>
    </ul>
 
    <div>
      {/* Render the nested route here */}
      <Outlet />
    </div>
  </div>
   
    </>
  )
}

export default TrendingLayout