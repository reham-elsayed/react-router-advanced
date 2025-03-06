import React from 'react'

const HeroCard = ({heroMovies}) => {
  return (
    <div className='flex justify-center '>
        {heroMovies?.map(movie=>(
            <div
            key={movie.id}
             className=' bg-slate-600 h-[300px] md:h-[400px] lg:h-[400px] hero-img transition-all duration-300'>
            <div className='overflow-hidden h-full relative'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className='w-full h-full'
                />
    
            </div>
        </div>
        ))}

    </div>
    
  )
}

export default HeroCard