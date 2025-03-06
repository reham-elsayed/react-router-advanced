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
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./Login/Login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SingleSeries from "./singleSeries/singleSeries";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
              <Route path="series/:id" element={<SingleSeries />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default App;
