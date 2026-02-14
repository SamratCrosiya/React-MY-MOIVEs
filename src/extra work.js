// // import logo65 from './logo65.png';
// // import './App.css';
// // import Moivetitle from './myComponents/Moivetitle';
// // import MoiveRelease from './myComponents/MoiveRelease';
// // import MoiveRating from './myComponents/MoiveRating';

// // function App() {
// //   let moive = [
// //     {title: "Inception", releaseYear: 2010, rating: 8.8},
// //     {title: "The Dark Knight", releaseYear: 2008, rating: 9.0},
// //     {title: "Interstellar", releaseYear: 2014, rating: 8.6},
// //     {title: "The Prestige", releaseYear: 2006, rating: 8.5},
// //     {title: "Dunkirk", releaseYear: 2017, rating: 7.9}
// //   ];
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo65} className="App-logo65" alt="logo" />
// // <div>
// //   {moive.map((movie, index) => (
// //     <div key={index}>
// //       <h1>{movie.title}</h1>
// //       <p>Release Year: {movie.releaseYear}</p>
// //       <p>Rating: {movie.rating}</p>
// //     </div>
// //   ))} 
  
// // </div>







// //         <p>

// //           Moive  title:
      
// //         <Moivetitle />
// //           </p>
// //           <p>
// //           Moive Release Year:
      
// //         <MoiveRelease />
// //           </p>
// //           <p>
// //           Moive Rating:
      
// //         <MoiveRating />
// //           </p>  

     
// //          Hello World
      
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import { useState } from "react";
// import logo65 from "./logo65.png";
// import "./App.css";

// // export const addMoive =() => {
// //   let footerstyle = {
// //     backgroundColor: "black",
// //     color: "white",
// //     padding: "10px",
// //     textAlign: "center"
// //   };
// //   return (
// //     <footer style={footerstyle}>
// //       <p>© 2026 Moive app. All rights reserved.</p>
// //     </footer>

// //   );
// // };
// function eventHandler()
//   {
//     console.log("clicked !!!");
//   };

// function App() {
  
//   const [movies, setMovies] = useState([
//     { title: "Inception", releaseYear: 2010, rating: 8.8, liked: true },
//      { title: "The Dark Knight", releaseYear: 2008, rating: 9.0, liked: false },
//      {title: "Interstellar", releaseYear: 2014, rating: 8.6},
//      {title: "The Prestige", releaseYear: 2006, rating: 8.5},
//      {title: "Dunkirk", releaseYear: 2017, rating: 7.9}
//   ]);

//   const [newMovie, setNewMovie] = useState({ title: "", releaseYear: "", rating: "" });

//   const addMovie = () => {
//     if (!newMovie.title || !newMovie.releaseYear || !newMovie.rating) return;
//     setMovies([...movies, { ...newMovie, liked: false }]);
//     setNewMovie({ title: "", releaseYear: "", rating: "" });
//   };

//   const toggleLike = (index) => {
//     const updated = [...movies];
//     updated[index].liked = !updated[index].liked;
//     setMovies(updated);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo65} className="App-logo65" alt="logo" />

//         {/* Movie List */}
//         <div>
//           {movies.map((movie, index) => (
//             <div key={index}>
//               <h1>{movie.title}</h1>
//               <p>Release Year: {movie.releaseYear}</p>
//               <p>Rating: {movie.rating}</p>
//               <button onClick={() => eventHandler(index)}>
//                 Like
//               </button>
//               <button onClick={() => eventHandler(index)}>
//                 disLike
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Add New Movie */}
//         <div style={{ marginTop: "20px", backgroundColor: "rgba(0, 0, 0, 0.5)"}} className="addMovie" >
//           <h2>Add a Movie</h2>
//           <input
//             type="text"
//             placeholder="Title"
//             value={newMovie.title}
//             onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Release Year"
//             value={newMovie.releaseYear}
//             onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Rating"
//             value={newMovie.rating}
//             onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
//           />
//           <button onClick={addMovie}>Add Movie</button>
//         </div>
//       </header>
//     </div>
//   );
  

// }



// export default App;













import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./myComponents/footer";
import Movies from "./MyComponents/Movies";
import AddMovie from "./MyComponents/AddMovie";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const addMovie = (title, releaseYear, rating) => {
    const newMovie = {
      id: movies.length === 0 ? 0 : movies[movies.length - 1].id + 1,
      title,
      releaseYear,
      rating,
      liked: false
    };
    setMovies([...movies, newMovie]);
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <Router>
      <Header title="My Movie App" />
      <Switch>
        <Route exact path="/" render={() => (
          <>
            <AddMovie addMovie={addMovie} />
            <Movies movies={movies} onDelete={onDelete} setMovies={setMovies} />
          </>
        )} />
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;