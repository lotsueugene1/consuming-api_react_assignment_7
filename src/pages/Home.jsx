import MovieGrid from '../components/MovieGrid';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService';


function Home() {
  const [movies, setMovies] = useState([]);

  
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={staticMovies} />
    </main>
  );
};

export default Home;