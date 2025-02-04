import axios from "axios";

export async function getPopularMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0",
    },
  };
  try {
    const popularMovies = await axios.request(options);
    console.log(popularMovies);
    return popularMovies.data.results;
  } catch (err) {
   
    throw err.message;
  }
}
