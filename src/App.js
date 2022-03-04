import { Fragment } from "react";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import Introduction from "./components/introduction/Introduction";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Introduction /> */}
      {/* <HomePage /> */}
      <LoginPage />
    </Fragment>
  );
}

export default App;
