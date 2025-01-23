import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
   <nav className='flex justify-between items-center'>
    <div>Movies</div>
    <div>
        <ul className='flex justify-center '>
            <li className='ps-2'><Link to='/'>Home</Link></li>
            <li className='ps-2'><Link to='/moviegenres'>Genres</Link></li>
            <li className='ps-2'><Link to='/trending'>Trending</Link></li>
            <li className='ps-2'><Link to='/korean'>Korean</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Nav