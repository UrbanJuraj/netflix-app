import notFoundImg from "../../assets/not-found.jpg";

import styles from "./MoviePage.module.css";

const MoviePage = (props) => {
  const imgHttp = `https://image.tmdb.org/t/p/original`;

  return (
    <div className={styles.movie}>
      <img
        src={props.movie.image ? imgHttp + props.movie.image : notFoundImg}
        alt="movie img"
      />
      <div className={styles.description}>
        <h1>{props.movie.title}</h1>
        <p>Released date: {props.movie.release}</p>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
