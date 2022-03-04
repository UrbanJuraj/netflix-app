import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button>Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
