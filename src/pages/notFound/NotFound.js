import Card from "../../components/UI/Card";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Card>
      <p className={styles["not-found"]}>Page not found!</p>
    </Card>
  );
};

export default NotFound;
