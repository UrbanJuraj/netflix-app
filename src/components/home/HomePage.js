import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./HomePage.module.css";
import img from "../../assets/introduction-img.jpg";
import SearchForm from "./SearchForm";

const HomePage = (props) => {
  return (
    <section className={styles.home}>
      <SearchForm />

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
    </section>
  );
};

export default HomePage;
