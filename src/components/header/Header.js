import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import MoviesContext from "../../store/movies-context";

import Navigation from "./Navigation";

import styles from "./Header.module.css";

const Header = () => {
  const authContext = useContext(AuthContext);
  const moviesContext = useContext(MoviesContext);

  const onClickHandler = () => {
    moviesContext.clearMovies();
  };

  return (
    <header className={styles["main-header"]}>
      <Link
        to={authContext.isLoggedIn ? "/home" : "/"}
        onClick={onClickHandler}
        className={styles.logo}
      >
        Netflix
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
