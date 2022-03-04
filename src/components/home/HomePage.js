import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./HomePage.module.css";
import img from "../../assets/introduction-img.jpg";

const HomePage = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.home}>
      <form onSubmit={submitFormHandler}>
        <input type="text" placeholder="Search film" />
        <button type="submit">Search</button>
      </form>

      <div className={styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img src={img} alt="wedw" />
            <Carousel.Caption>
              <p>carousel</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={img} alt="wdwd" />
            <Carousel.Caption>
              <p>carousel</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={img} alt="wedw" />
            <Carousel.Caption>
              <p>carousel</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
