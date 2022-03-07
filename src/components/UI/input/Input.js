import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      ref={props.reference}
    />
  );
};

export default Input;
