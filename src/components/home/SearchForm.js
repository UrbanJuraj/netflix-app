import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <Input type="text" placeholder="Search film" />
      <Button title="Search" />
    </form>
  );
};

export default SearchForm;
