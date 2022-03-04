import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <input type="text" placeholder="Search film" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
