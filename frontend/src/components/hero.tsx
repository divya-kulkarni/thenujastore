import { Button, Carousel } from "react-bootstrap";
import "../styling/hero.css";
import gift from "../assets/hero/gift.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero5 from "../assets/hero/hero5.jpg";

const interval = 60000;

export const Hero = () => {
  return (
    <div className="hero">
      <Carousel controls={false}>
        <Carousel.Item interval={interval}>
          <img src={hero2} alt="" className="slide" />
          <div className="overlay d-flex align-items-center justify-content-center">
            <section className="overlay-content text-center">
              <h5>
                A CHARMING COLLECTION OF HANDMADE JEWELLERY WHERE EACH PIECE TELLS A STORY
              </h5>
              <br />
              <h2>AS UNIQUE AS YOU</h2>
            </section>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img src={gift} alt="" className="slide" />
          <div className="overlay d-flex align-items-center justify-content-center">
            <section className="overlay-content text-center">
              <h5>SEND A GIFT TO SOMEONE YOU LOVE</h5>
              <br />
              <h2>GOOD THINGS COME IN SMALL BOXES</h2>
              <Button className="mt-3">SEE MORE</Button>
            </section>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img src={hero5} alt="" className="slide" />
          <div className="overlay d-flex align-items-center justify-content-center">
            <section className="overlay-content text-center">
              <h2>DISCOVER YOUR PERFECT STATEMENT PIECE</h2>
            </section>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
