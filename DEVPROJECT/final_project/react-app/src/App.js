import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./Components/Movies";
import MoviesHeading from "./Components/MoviesHeading";
import SearchBox from "./Components/SearchBox";
import AddToFavorites from "./Components/AddToFavorites";

const API_KEY = "598d1c39"; // to OMDB
// const API_KEY = "338d9da5ffde4fe6044c0fd2c82d4457"; // to TMDB

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const [favoritesList, setFavoritesList] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const handleAddToFavorites = async (movie) => {
    const url = `/api/add_to_favorites`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movie_title: movie.Title, imdbID: movie.imdbID }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setFavoritesList(data.favorites));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MoviesHeading heading="IMDB"></MoviesHeading>
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></SearchBox>
      </div>
      <div className="row"></div>
      <Movies
        movies={movies}
        favoriteComponent={AddToFavorites}
        handleFavorites={handleAddToFavorites}
      ></Movies>
    </div>
  );
};

export default App;
