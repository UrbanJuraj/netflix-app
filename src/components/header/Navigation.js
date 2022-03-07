import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Button from "../UI/button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {!isLoggedIn && (
          <li>
            <Link to="/login">
              <Button title="Sign in" />
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link to="/">
              <Button title="Logout" onClick={logoutHandler} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
