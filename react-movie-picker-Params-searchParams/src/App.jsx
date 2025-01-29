import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import MovieGenres from "./MovieGenres/MovieGenres";
import Layout from "./Layout";
import TrendingLayout from "./Trending/TrendingLayout/TrendingLayout";
import TrendingAll from "./Trending/TrendingAll/TrendingAll";
import TrendingMovie from "./Trending/TrendingMovie/TrendingMovie";
import TrendingSeries from "./Trending/TrendingSeries/TrendingSeries";
import SingleMovie from "./SingleMovie/SingleMovie";
/*
Dynamic Routing
1-Create a new route for the single movie page in your React app using React Router. 👍
2-Make the route dynamic based on user interaction (movie ID) by using a URL parameter (:id). 👍
3-Create a navigation link that directs users to the single movie page with the corresponding movie ID. 👍
4-Access the URL parameters in the single movie component using useParams() to fetch and display movie data.👍
5-Navigate back to the previous page using the useNavigate() hook from React Router.

*/
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="genre" element={<MovieGenres />} />
            <Route path="trending" element={<TrendingLayout />}>
              <Route index element={<TrendingAll />} />
              <Route path="trendingmovies" element={<TrendingMovie />} />
              <Route path="trendingseries" element={<TrendingSeries />} />
            </Route>
            <Route path='movie/:id'  element={<SingleMovie/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
