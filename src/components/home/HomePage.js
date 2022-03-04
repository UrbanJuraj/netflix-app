import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./HomePage.module.css";
import img from "../../assets/introduction-img.jpg";
import SearchForm from "./SearchForm";
import Card from "../UI/Card";

const HomePage = (props) => {
  return (
    <Card>
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
    </Card>
  );
};

export default HomePage;
