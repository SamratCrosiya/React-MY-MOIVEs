import React from 'react';
import Moivetitle from './Moivetitle';
import './Movies.css';

function Movies({ movies, onDelete }) {
  return (
    <div className="movies-container">
      <h2>🎬 My Movie Collection</h2>
      
      {movies.length === 0 ? (
        <div className="no-movies">
          <p>No movies to display. Add some movies to get started! 🍿</p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <Moivetitle
                title={movie.title}
                movieReleaseYear={movie.releaseYear}
                movieRating={movie.rating}
              />
              <div className="movie-buttons">
                <button className="delete-btn" onClick={() => onDelete(movie)}>
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;