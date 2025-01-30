https://developer.themoviedb.org/reference/genre-movie-list

React Movie Picker

This project is part of my learning journey and focuses on applying concepts from the React Router DOM library with React.

Tech Stack

Vite: Modern frontend tool for building fast and optimized React apps.

React: For building a dynamic and component-based UI.

React Router DOM: For client-side routing in a single-page application (SPA).

Tailwind CSS: For styling and responsive design.

Concepts Covered

Routing in SPAs: Implementing client-side navigation for a seamless user experience.

Nested Routing: Creating and managing nested routes for better application structure.

Navigation with React Router DOM:

Using Link for navigation between pages.

Handling searchParams for dynamic queries.

Accessing route params for dynamic route matching.

Features

A single-page application (SPA) structure with seamless navigation.

Nested routing for better organization and scalability.

Dynamic route handling with params and searchParams.

Intuitive navigation using React Router DOM's Link component.

To run this project locally, follow these steps:

Clone the Repository:

git clone https://github.com/your-username/react-movie-picker.git
cd react-movie-picker

Navigate to the Project Directory:
If the project files are in a subdirectory (e.g., movie-picker), navigate to that directory:

cd movie-picker

Install Dependencies:
Make sure you have Node.js installed, then run:

npm install

Start the Development Server:

npm run dev

Open in Browser:
Open http://localhost:5173 in your browser to view the app.

 <BrowserRouter>
  {/* <Nav/> */}
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/moviegenres' element={<About/>}>
      <Route path='drama' element={<Drama/>}/>
      <Route path='action' element={<Action/>}/>
    </Route>
    <Route path='/trending' element={<TrendingLayout/>}>
    <Route index element={<TrendingAll/>}/>
    <Route path='seriestrend' element={<TrendingSeries/>}/>  
    <Route path='moviestrend' element={<TrendingMovies/>}/> 
    <Route path='singlemovie/:movie_id' element={<SingleMovieDetail/>} />

    </Route>
    </Route>

  </Routes>
  </BrowserRouter>
   </>

    {genres.map((genre)=>(
        <div key={genre.name}>
          <p
         >
            <Link to={`?genre=${genre.id}`}>
            {genre.name}
            </Link>
          </p>
        </div>
      ))}
      <div>{filteredMovies?<p>{filteredMovies.map(movie=>movie.title)}</p>:
      <div>{movies.map(movie=>movie.title)}</div>
      }</div>
