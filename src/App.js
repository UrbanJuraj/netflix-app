import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import Introduction from "./pages/introduction/Introduction";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
