import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MoviesContext from "../../store/movies-context";

const CarouselItemWrapper = (props) => {
  const navigate = useNavigate();

  const moviesContext = useContext(MoviesContext);

  const onClickHandler = () => {
    moviesContext.setMovie(props.movie);
    navigate("/movie");
  };

  return <div onClick={onClickHandler}>{props.children}</div>;
};

export default CarouselItemWrapper;
