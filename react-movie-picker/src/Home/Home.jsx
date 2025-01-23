import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams]= useSearchParams()
  console.log(searchParams.get('movie_id'))
  return (
    <div className='font-extrabold'>Home
    
    <h1 data-testid='homeText'>Hello from home</h1>
    </div>
  )
}

export default Home