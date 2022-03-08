import React, { useState } from "react";

const MoviesContext = React.createContext({
  movies: [],
  addSearchedMovies: (movies) => {},
  movie: {},
  setMovie: (movie) => {},
  clearMovies: () => {},
  isSearched: false,
});

export const MoviesContextProvider = (props) => {
  const [isSearched, setIsSearched] = useState(false);
  const [movies, setMovies] = useState([]);

  const storageVariable = JSON.parse(localStorage.getItem("movie"));
  const [movie, setMovie] = useState(storageVariable);

  const addSearchedMoviesHandler = (movies) => {
    setIsSearched(true);
    setMovies(movies);
  };

  const setChosenMovie = (movie) => {
    setMovie(movie);
    localStorage.setItem("movie", JSON.stringify(movie));
  };

  const clearSearchedMovies = () => {
    setIsSearched(false);
    setMovies([]);
    setMovie();
    localStorage.removeItem("movie");
  };

  const contextValue = {
    movies,
    addSearchedMovies: addSearchedMoviesHandler,
    movie,
    setMovie: setChosenMovie,
    clearMovies: clearSearchedMovies,
    isSearched,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
