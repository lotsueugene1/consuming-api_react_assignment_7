import MovieGrid from '../components/MovieGrid';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService';


function Home({searchResults}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async() => {
      const movieData = await getPopularMovies();
      setMovies(movieData)
    };

    fetchMovies();
  }, []); 

    const displayRecipes = searchResults || movies;

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={displayRecipes} />
    </main>
  );
};

export default Home;