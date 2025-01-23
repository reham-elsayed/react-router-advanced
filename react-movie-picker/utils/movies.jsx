import axios from 'axios';
import React, {useEffect} from 'react';
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
  }
};
export async function fetchData(){
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.genres
  } catch (error) {
    console.error(error);
    return error
  }
}

export async function fetchTrendingMoviesToday(){
  const options = {
    method: 'GET',
    url:'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
    }
  };
  try{
    const res = await axios.request(options)
   return res.data.results;
   }catch(err){
    return err
   }
}

export async function fetchTrendingSeriesToday(){
  const options = {
    method: 'GET',
    url:'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
    }
  };
  try{
    const res = await axios.request(options)
  
   return res.data.results;
   }catch(err){
    return err
   }
}

export async function fetchTrendingAllToday(){
  const options = {
    method: 'GET',
    url:'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
    }
  };    
 try{
  const res = await axios.request(options)

 return res.data.results;
 }catch(err){
  return err
 }
}