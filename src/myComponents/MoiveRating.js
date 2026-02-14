// function MoiveRating() {    
//     return <div>Rating: 8.8/10</div>;
//     }
//         export default MoiveRating;
    


export default function Movies({ movies, onDelete, setMovies }) {
  const likeMovie = (index) => {
    const updated = [...movies];
    updated[index].liked = true;
    setMovies(updated);
  };

  const dislikeMovie = (index) => {
    const updated = [...movies];
    updated[index].liked = false;
    setMovies(updated);
  };

  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies to display</p>
      ) : (
        movies.map((movie, index) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={() => likeMovie(index)}>Like</button>
            <button onClick={() => dislikeMovie(index)}>Dislike</button>
            <p>Status: {movie.liked ? "Liked 👍" : "Disliked 👎"}</p>
            <button onClick={() => onDelete(movie)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}