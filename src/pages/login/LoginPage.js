import Button from "../../components/UI/button/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/input/Input";
import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <div className={styles["login-form"]}>
        <h2>Sign in</h2>
        <form onSubmit={submitFormHandler}>
          <div>
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Password" />
          </div>
          <Button title="Sign in" />
        </form>
      </div>
    </Card>
  );
};

export default LoginPage;
