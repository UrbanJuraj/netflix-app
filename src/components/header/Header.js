import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import Navigation from "./Navigation";

import styles from "./Header.module.css";

const Header = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <header className={styles["main-header"]}>
      <Link to={authContext.isLoggedIn ? "/home" : "/"}>
        <h1>Netflix</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
