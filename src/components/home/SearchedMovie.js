import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MoviesContext from "../../store/movies-context";

import styles from "./SearchedMovie.module.css";

const SearchedMovie = (props) => {
  const navigate = useNavigate();

  const moviesContext = useContext(MoviesContext);

  const onClickHandler = () => {
    moviesContext.setMovie(props.movie);
    navigate("/movie");
  };

  return (
    <div className={styles["searched-movie"]} onClick={onClickHandler}>
      <h2>{props.movie.title}</h2>
    </div>
  );
};

export default SearchedMovie;
