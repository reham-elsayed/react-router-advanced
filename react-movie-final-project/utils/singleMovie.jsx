import axios from "axios";

export async function fetchSingleTVDatails(id) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
}
export async function fetchSingleMovieDatails(id) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// export async function getSingleMovieDetails(id) {
//   const options = {
//     method: "GET",
//     url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
//     headers: {
//       accept: "application/json",
//       Authorization:
//       `Bearer ${import.meta.env.VITE_API_TOKEN}`
//         },
//   };
//   try {
//     const movieDetails = await axios.request(options);
//     console.log(movieDetails);
//     return movieDetails.data;
//   } catch (err) {
//     console.log(err, "error of singleMovie");
//   }
// }
