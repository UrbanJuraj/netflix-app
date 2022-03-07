import { useContext, useRef } from "react";
import MoviesContext from "../../store/movies-context";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchInputRef = useRef();

  const moviesContext = useContext(MoviesContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredMovieName = searchInputRef.current.value;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8ef9ad71a27968a7f2c8623c3cd32d1a&language=en-US&query=${enteredMovieName}`;

    const fetchData = async () => {
      const response = await fetch(url);
      const resData = await response.json();
      moviesContext.addMovies(resData.results);
    };

    fetchData();
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <Input type="text" placeholder="Search film" reference={searchInputRef} />
      <Button title="Search" type="submit" />
    </form>
  );
};

export default SearchForm;
