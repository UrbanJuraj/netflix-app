import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import MoviesContext from "../../store/movies-context";

import SearchedMovie from "../../components/home/SearchedMovie";
import CarouselItemWrapper from "../../components/home/CarouselItemWrapper";
import SearchForm from "../../components/home/SearchForm";

import notFoundImg from "../../assets/not-found.jpg";

import styles from "./HomePage.module.css";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  const moviesContext = useContext(MoviesContext);

  const randomPageNumber = Math.floor(Math.random() * 100) + 1;

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=8ef9ad71a27968a7f2c8623c3cd32d1a&language=en-US&page=${randomPageNumber}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      const loadedMovies = [];

      resData.results.map((movie) =>
        loadedMovies.push({
          key: movie.id,
          title: movie.title,
          image: movie.backdrop_path,
          overview: movie.overview,
          release: movie.release_date,
        })
      );
      shuffle(loadedMovies);
      loadedMovies.splice(0, 10);

      setMovies(loadedMovies);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p className={styles["loading-movies"]}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  const imgHttp = `https://image.tmdb.org/t/p/original`;

  return (
    <div className={styles.gap}>
      <SearchForm />

      {moviesContext.isSearched && (
        <div className={styles["searched-movies"]}>
          {moviesContext.movies.map((movie) => (
            <SearchedMovie key={movie.key} movie={movie} />
          ))}
        </div>
      )}

      <div className={styles.carousel}>
        <Carousel>
          {movies.map((movie) => (
            <Carousel.Item key={movie.key}>
              <CarouselItemWrapper movie={movie}>
                <img
                  src={movie.image ? imgHttp + movie.image : notFoundImg}
                  alt="movie img"
                />
                <Carousel.Caption>
                  <h1>{movie.title}</h1>
                </Carousel.Caption>
              </CarouselItemWrapper>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
