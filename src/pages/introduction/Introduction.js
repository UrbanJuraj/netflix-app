import Card from "../../components/UI/card/Card";

import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <Card className={styles.intro}>
      <div className={styles.container}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime</p>
      </div>
    </Card>
  );
};

export default Introduction;
