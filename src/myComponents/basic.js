import { useState } from "react";

function MovieList() {
  // Initial movie list
  const [movies, setMovies] = useState([
    { title: "Inception", releaseYear: 2010, rating: 8.8, liked: true },
    { title: "The Dark Knight", releaseYear: 2008, rating: 9.0, liked: false },
    { title: "Interstellar", releaseYear: 2014, rating: 8.6, liked: false },
    { title: "The Prestige", releaseYear: 2006, rating: 8.5, liked: false },
    { title: "Dunkirk", releaseYear: 2017, rating: 7.9, liked: false }
  ]);

  // State for new movie input
  const [newMovie, setNewMovie] = useState({ title: "", releaseYear: "", rating: "" });

  // Add a new movie
  const addMovie = () => {
    if (!newMovie.title || !newMovie.releaseYear || !newMovie.rating) return;
    setMovies([...movies, { ...newMovie, liked: false }]);
    setNewMovie({ title: "", releaseYear: "", rating: "" });
  };

  // Toggle like/dislike in one function (simpler than separate handlers)
  const toggleLike = (index, likedStatus) => {
    const updated = [...movies];
    updated[index].liked = likedStatus;
    setMovies(updated);
  };

  return (
    <div>
      <h2>🎬 My Movie List</h2>

      {/* Movie List */}
      {movies.map((movie, index) => (
        <div key={index} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{movie.title}</h3>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Rating: {movie.rating}</p>

          {/* Like/Dislike buttons */}
          <button onClick={() => toggleLike(index, true)}>👍 Like</button>
          <button onClick={() => toggleLike(index, false)}>👎 Dislike</button>

          {/* Status */}
          <p>Status: {movie.liked ? "Liked 👍" : "Disliked 👎"}</p>
        </div>
      ))}

      {/* Add New Movie Form */}
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9" }}>
        <h2>Add a Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Release Year"
          value={newMovie.releaseYear}
          onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>➕ Add Movie</button>
      </div>
    </div>
  );
}

export default MovieList;