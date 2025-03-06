import axios from "axios";

export async function fetchMovieGenres() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    headers: {
      accept: "application/json",
      Authorization: `Bearer  ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data.genres;
  } catch (error) {
    console.log(error.response.data.status_message);
    throw error.response.data.status_message;
  }
}

export async function fetchTrendingMoviesToday() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const res = await axios.request(options);

    return res.data.results;
  } catch (err) {
    return err;
  }
}
