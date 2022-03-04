import { Link } from "react-router-dom";
import Button from "../UI/button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/login">
            <Button title="Sign in" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button title="Logout" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
