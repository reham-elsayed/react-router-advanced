import React from 'react'

const HeroCard = ({heroMovies}) => {
  return (
   <>
  <div className='flex justify-center items-center card-hero-styler relative'>
    <div className='flex justify-center h-[300px] md:h-[300px] lg:h-[350px] w-4/5 hero' >
{heroMovies?.map(movie=>
    <div key={movie.id}
    className=' h-full rounded-md hero-img'
    >
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      srcSet={
        `https://image.tmdb.org/t/p/w200/${movie.poster_path} 200w,
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
   className='h-full rounded-md'
      />
    </div>
  )
}
    </div>

  </div>

   </>
    
  )
}

export default HeroCard