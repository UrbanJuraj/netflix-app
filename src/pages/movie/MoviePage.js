import Card from "../../components/UI/Card";
import notFoundImg from "../../assets/not-found.png";

import styles from "./MoviePage.module.css";

const MoviePage = (props) => {
  const imgHttp = `https://image.tmdb.org/t/p/original`;

  return (
    <Card>
      <div className={styles.movie}>
        <img
          src={
            props.movie.backdrop_path
              ? imgHttp + props.movie.backdrop_path
              : notFoundImg
          }
          alt="movie img"
        />
        <div className={styles.description}>
          <h1>{props.movie.title}</h1>
          <p>Released date: {props.movie.release_date}</p>
          <p>{props.movie.overview}</p>
        </div>
      </div>
    </Card>
  );
};

export default MoviePage;
