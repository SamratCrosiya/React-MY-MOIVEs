import React, { useState } from "react";
import './AddMovie.css';

export default function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [rating, setRating] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !releaseYear || !rating) {
      alert("Please fill all fields");
      return;
    }
    
    const newMovie = {
      title,
      releaseYear: Number(releaseYear),
      rating: Number(rating)
    };
    
    addMovie(newMovie);
    setTitle("");
    setReleaseYear("");
    setRating("");
  };

  return (
    <form onSubmit={submit} className="add-movie-form">
      <h2>➕ Add a New Movie</h2>
      <input 
        type="text" 
        placeholder="Movie Title (e.g., Inception)" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Release Year (e.g., 2010)" 
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)} 
        min="1900"
        max="2030"
      />
      <input 
        type="number" 
        step="0.1"
        placeholder="Rating (e.g., 8.5)" 
        value={rating}
        onChange={(e) => setRating(e.target.value)} 
        min="0"
        max="10"
      />
      <button type="submit">🎬 Add Movie</button>
    </form>
  );
}