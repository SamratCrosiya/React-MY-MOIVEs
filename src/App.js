import './App.css';
import Footer from "./myComponents/footer";
import AddMovie from "./myComponents/addmoives";
import About from "./myComponents/About";
import React, { useState, useEffect } from 'react';
import Header from "./myComponents/Header";
import Movies from "./myComponents/Moives";
import { Routes, Route } from "react-router-dom";

function App() {
  let initMovies;
  if (localStorage.getItem("movies") === null) {
    initMovies = [];
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

// import './App.css';
// import Footer from "./myComponents/footer";
// import AddMovie from "./myComponents/addmoives";
// import About from "./myComponents/About";
// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import Header from "./myComponents/Header";   // make sure this exists
// import Movies from "./myComponents/Moives";   // make sure this exists

// function App() {
//   let initMovies;
//   if (localStorage.getItem("movies") === null) {
//     initMovies = [];
//   } else {
//     initMovies = JSON.parse(localStorage.getItem("movies"));
//   }

//   const [movies, setMovies] = useState(initMovies);

//   const onDelete = (movie) => {
//     setMovies(movies.filter((e) => e !== movie));
//   };

//   const addMovie = (movie) => {
//     setMovies([...movies, movie]);
//   };

//   useEffect(() => {
//     localStorage.setItem("movies", JSON.stringify(movies));
//   }, [movies]);

//   return (
//     <div className="App">
//       <Header title="My Movies List" />
//       <AddMovie addMovie={addMovie} />
//       <Movies movies={movies} onDelete={onDelete} />
//       <About />
//       <Footer />
//     </div>
//   );
// }

// export default App;