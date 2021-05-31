import React from "react";

const Movies = (props) => {
  const AddToFavoritesComponent = props.favoriteComponent;
  return (
    <div className="row">
      {props.movies.map(
        (movie) =>
          movie.Poster !== "N/A" && (
            <div
              key={movie.imdbID}
              className="image-container d-flex justify-content-start m-3"
            >
              <img src={movie.Poster} alt="movie"></img>
              <div
                className="overlay d-flex align-items-center justify-content-center"
                onClick={() => props.handleFavorites(movie)}
              >
                <AddToFavoritesComponent></AddToFavoritesComponent>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Movies;
