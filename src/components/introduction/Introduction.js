import styles from "./Introduction.module.css";

const Introduction = (props) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime</p>
      </div>
    </div>
  );
};

export default Introduction;
