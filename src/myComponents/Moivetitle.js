import React from 'react';

function Moivetitle(mprops) {
  function eventHandler() {
    console.log("Update rating clicked for:", mprops.title);
  }
  
  return (
    <div className="movie-item">
      <div className="movie-title">{mprops.title}</div>
      <div className="movie-item_releaseyear">
        <span>Year:</span>
        <h2>{mprops.movieReleaseYear}</h2>
      </div>
      <div className="movie-item_rating">
        <span>Rating:</span>
        <h2>{mprops.movieRating}/10</h2>
      </div>
      <button className="update-btn" onClick={eventHandler}>
        ✏️ Update Rating
      </button>
    </div>
  );
}

export default Moivetitle;