import axios from "axios";


export async function getSingleMovieDetails(id){
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA0MmE0Y2EzZTU0OGVhOWU0OWU4NDFlZmVjNjVhZiIsIm5iZiI6MTczNzIzNzg1NC41OTMsInN1YiI6IjY3OGMyNTVlNjhlMGQ4NzM2MzZkZTA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dRFptz2l1l68tRCNcvR9ANteSVeVzdkQVxs84dRQX0'
        }
    };
    try{
        const movieDetails = await axios.request(options)
        console.log(movieDetails)
        return movieDetails.data
    }catch(err){
        console.log(err, 'error of singleMovie')
    }
     
}