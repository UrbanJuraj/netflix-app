import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>Netflix</h1>
      <Navigation />
    </header>
  );
};

export default Header;
