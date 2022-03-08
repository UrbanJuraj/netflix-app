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
  const [movie, setMovie] = useState({});

  const addSearchedMoviesHandler = (movies) => {
    setIsSearched(true);
    setMovies(movies);
  };

  const setChosenMovie = (movie) => {
    setMovie(movie);
  };

  const clearSearchedMovies = () => {
    setIsSearched(false);
    setMovies([]);
    setMovie({});
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
