import Card from "../UI/Card";
import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  return (
    <Card>
      <div className={styles["login-form"]}>
        <h2>Sign in</h2>
        <form>
          <div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </Card>
  );
};

export default LoginPage;
