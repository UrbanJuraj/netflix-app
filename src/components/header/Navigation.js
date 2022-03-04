import Button from "../UI/button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Button title="Sign in" />
        </li>
        <li>
          <Button title="Logout" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
