import MovieGrid from '../components/MovieGrid';
import {useState, useEffect} from 'react';

function Favorites() {
  // Placeholder - students will implement localStorage retrieval
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Favorites</h2>
        <p>Your saved movies collection</p>
      </div>
      {favoriteMovies.length > 0 ? (
        <MovieGrid movies={favoriteMovies} />
      ) : (
        <div className="empty-state">
          <p>No favorite movies yet. Start adding some from the home page!</p>
        </div>
      )}
    </main>
  );
};

export default Favorites;