import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({movie}) => {
  return (
    <div className='relative z-50'>
        <div className=''>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    srcSet={`
     https://image.tmdb.org/t/p/w200/${movie.poster_path} 200w,
     https://image.tmdb.org/t/p/w300/${movie.poster_path} 300w,
     https://image.tmdb.org/t/p/w500/${movie.poster_path} 500w,
     https://image.tmdb.org/t/p/w780/${movie.poster_path} 780w`
    }
    sizes='(max-width: 400px) 200px,
    (max-width: 768px) 300px,
    (max-width: 1024px) 500px,
    780px
    '
    alt={movie.title}
    className='min-h-full object-fill rounded-md w-full'
    />


        </div>
        <div className='bg-gray-900 bg-opacity-85 p-3 rounded-md  absolute inset-0 flex flex-col justify-end items-center pb-3 opacity-0 hover:opacity-100 transition-all duration-200 translate-y-7 hover:translate-y-0'>
           <h2
           className='font-bold py-2 text-stone-50 text-lg lg:text-3xl'
           >{movie.title} </h2>
           <Link
           className='button'
           to={`/movie/${movie.id}`}>
           See Details
           </Link>
        </div>
    </div>
  )
}

export default HomeCard


