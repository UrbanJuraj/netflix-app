import { Fragment, useContext, useRef, useState } from "react";
import MoviesContext from "../../store/movies-context";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [error, setError] = useState();

  const searchInputRef = useRef();

  const moviesContext = useContext(MoviesContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    setError();

    const enteredMovieName = searchInputRef.current.value;

    if (enteredMovieName.length > 2) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=8ef9ad71a27968a7f2c8623c3cd32d1a&language=en-US&query=${enteredMovieName}`;

      const fetchData = async () => {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Something went wrong!");

        const resData = await response.json();
        moviesContext.addMovies(resData.results);
      };

      fetchData().catch((error) => {
        setError(error.message);
      });
    } else {
      moviesContext.clearMovies();
      setError("Please write at least 3 letters!");
    }
  };

  return (
    <Fragment>
      <form onSubmit={submitFormHandler} className={styles.form}>
        <Input
          type="text"
          placeholder="Search film"
          reference={searchInputRef}
        />
        <Button title="Search" type="submit" />
      </form>

      {error && <p className={styles.error}>{error}</p>}
    </Fragment>
  );
};

export default SearchForm;
