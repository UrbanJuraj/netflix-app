import styles from "./HomePage.module.css";

const HomePage = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.home}>
      <form onSubmit={submitFormHandler}>
        <input type="text" placeholder="Search film" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
