import axios from "axios";

export async function fetchMovieGenres() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0",
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.genres;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchTrendingMoviesToday() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0",
    },
  };
  try {
    const res = await axios.request(options);
    return res.data.results;
  } catch (err) {
    return err;
  }
}

export async function fetchTrendingSeriesToday() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0",
    },
  };
  try {
    const res = await axios.request(options);

    return res.data.results;
  } catch (err) {
    return err;
  }
}

export async function fetchTrendingAllToday() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0",
    },
  };
  try {
    const res = await axios.request(options);

    return res.data.results;
  } catch (err) {
    return err;
  }
}
export async function search(query){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${query}`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
