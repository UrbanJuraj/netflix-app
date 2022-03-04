import { Carousel } from "react-bootstrap";

import styles from "./HomePage.module.css";
import img from "../../assets/introduction-img.jpg";
import SearchForm from "../../components/home/SearchForm";
import Card from "../../components/UI/Card";

const HomePage = (props) => {
  return (
    <Card>
      <div className={styles.gap}>
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
      </div>
    </Card>
  );
};

export default HomePage;
