import './App.css';
import Footer from "./myComponents/footer";
import AddMovie from "./myComponents/addmoives";
import About from "./myComponents/About";
import React, { useState, useEffect } from 'react';
import Header from "./myComponents/Header";
import Movies from "./myComponents/Moives";
import { Routes, Route } from "react-router-dom";

function App() {
  // Initial movies with some pre-loaded data
  let initMovies;
  if (localStorage.getItem("movies") === null) {
    initMovies = [
      { title: "Inception", releaseYear: 2010, rating: 8.8 },
      { title: "The Dark Knight", releaseYear: 2008, rating: 9.0 },
      { title: "Interstellar", releaseYear: 2014, rating: 8.6 },
      { title: "The Prestige", releaseYear: 2006, rating: 8.5 },
      { title: "Dunkirk", releaseYear: 2017, rating: 7.9 }
    ];
  } else {
    initMovies = JSON.parse(localStorage.getItem("movies"));
  }

  const [movies, setMovies] = useState(initMovies);

  const onDelete = (movie) => {
    setMovies(movies.filter((e) => e !== movie));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="App">
      <Header title="My Movies List" searchBar={true} />
      
      <Routes>
        <Route path="/" element={
          <>
            <AddMovie addMovie={addMovie} />
            <Movies movies={movies} onDelete={onDelete} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;