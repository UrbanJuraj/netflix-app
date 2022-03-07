import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import SearchForm from "../../components/home/SearchForm";
import Card from "../../components/UI/Card";
import notFoundImg from "../../assets/not-found.png";

import styles from "./HomePage.module.css";
import MoviesContext from "../../store/movies-context";
import SearchedMovie from "../../components/home/SearchedMovie";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  const moviesContext = useContext(MoviesContext);

  const navigate = useNavigate();

  const randomPageNumber = Math.floor(Math.random() * 100) + 1;

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=8ef9ad71a27968a7f2c8623c3cd32d1a&language=en-US&page=${randomPageNumber}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const resData = await response.json();

      let loadedMovies = [];

      resData.results.map((movie) =>
        loadedMovies.push({
          key: movie.id,
          id: movie.id,
          title: movie.title,
          image: movie.backdrop_path,
        })
      );

      setMovies(loadedMovies);
    };

    fetchData();
  }, []);

  const imgHttp = `https://image.tmdb.org/t/p/original`;

  return (
    <Card>
      <div className={styles.gap}>
        <SearchForm />

        {moviesContext.isSearched && (
          <div className={styles["searched-movies"]}>
            {moviesContext.movies.map((movie) => (
              <SearchedMovie key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        <div className={styles.carousel}>
          <Carousel>
            {movies.map((movie) => (
              <Carousel.Item key={movie.key}>
                <img
                  src={movie.image ? imgHttp + movie.image : notFoundImg}
                  alt="movie img"
                />
                <Carousel.Caption>
                  <h1>{movie.title}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Card>
  );
};

export default HomePage;
