import { Fragment, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Introduction from "./pages/introduction/Introduction";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movie/MoviePage";
import NotFound from "./pages/notFound/NotFound";

import AuthContext from "./store/auth-context";
import MoviesContext from "./store/movies-context";

function App() {
  const authContext = useContext(AuthContext);
  const moviesContext = useContext(MoviesContext);

  return (
    <Fragment>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            authContext.isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Introduction />
            )
          }
        />
        {!authContext.isLoggedIn && (
          <Route path="login" element={<LoginPage />} />
        )}
        <Route
          path="home"
          element={
            !authContext.isLoggedIn ? (
              <Navigate to="/login" replace />
            ) : (
              <HomePage />
            )
          }
        />
        {authContext.isLoggedIn && (
          <Route
            path="movie"
            element={
              moviesContext.movie ? (
                <MoviePage movie={moviesContext.movie} />
              ) : (
                <NotFound />
              )
            }
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
