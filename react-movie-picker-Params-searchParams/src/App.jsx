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
useSearchParams is built on the URLSearchParams API, which allows managing query parameters in the URL.
Query parameters let you pass data in the URL that can be shared across different pages without affecting the route structure.
Query parameters are formatted as key-value pairs:
They are appended to the URL using ? (e.g., ?search=react).
Multiple parameters are separated by & (e.g., ?search=react&page=2).
The useSearchParams hook is used to read and update query parameters in React Router.
Unlike dynamic route parameters (:id), query parameters do not need to be defined in the route path setup.

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
            <Route path="movie/:id" element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
