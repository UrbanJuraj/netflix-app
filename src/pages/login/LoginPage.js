import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/UI/button/Button";
import Card from "../../components/UI/card/Card";
import Input from "../../components/UI/input/Input";
import AuthContext from "../../store/auth-context";

import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const validEmailExpression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      enteredEmail.match(validEmailExpression) &&
      enteredPassword.length > 7
    ) {
      authContext.login();
      navigate("/home");
    } else console.log("chujovina");
  };

  return (
    <Card>
      <div className={styles["login-form"]}>
        <h2>Sign in</h2>
        <form onSubmit={submitFormHandler}>
          <div>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              reference={emailInputRef}
            />
            <Input
              type="text"
              id="password"
              reference={passwordInputRef}
              placeholder="Password"
            />
          </div>
          <Button title="Sign in" type="submit" />
        </form>
      </div>
    </Card>
  );
};

export default LoginPage;
