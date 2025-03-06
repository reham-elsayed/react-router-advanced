import axios from "axios";
export async function getPopularMovies() {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    );
    return response.data.results;
  } catch (error) {
    throw error.response.data.status_message;
  }
}
