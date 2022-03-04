import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import Introduction from "./components/introduction/Introduction";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
