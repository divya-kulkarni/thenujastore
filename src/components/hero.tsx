import { Carousel } from "react-bootstrap";
import "../styling/hero.css";
import gift from "../assets/gift-hands.jpg";
import heroBracelet from "../assets/hero/hero2.jpg";
import heroEarrings from "../assets/hero-earrings.jpg";

const interval = 30000;

export const Hero = () => {
  return (
    <div className="hero">
      <Carousel controls={false} fade>
        <Carousel.Item interval={interval}>
          <div className="carousel-content">
            <img src={heroEarrings} alt="" className="slide moveLeft" />
            <div className="overlay d-flex">
              <section
                className="overlay-content statement align-items-center justify-content-center"
                style={{ textAlign: "left", top: "60%" }}
              >
                <a
                  href="/products"
                  style={{ color: "white", borderColor: "white !important" }}
                >
                  <h5 style={{paddingBottom: "1%"}}>SHOP NOW →</h5>
                </a>
                <h5>DISCOVER YOUR PERFECT</h5>
                <h2>STATEMENT PIECE</h2>
              </section>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <div className="carousel-content ">
            <img src={heroBracelet} alt="" className="slide moveUp" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <section
                className="overlay-content"
                style={{ textAlign: "center" }}
              >
                <h2>WEARABLE ART</h2>
                <h5>A CHARMING COLLECTION OF HANDMADE JEWELLERY</h5>
              </section>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={interval}>
          <div className="carousel-content">
            <img src={gift} alt="" className="slide moveUp" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <section className="overlay-content text-center">
                <br />
                <h5>SMALL BOX,</h5>
                <h2>BIG GESTURE</h2>
                <a
                  href="/products"
                  style={{ color: "white", borderColor: "white !important" }}
                >
                  <h5
                    style={{ color: "white", borderColor: "white !important" }}
                  >
                    SEND A GIFT TO SOMEONE YOU LOVE →
                  </h5>
                </a>
              </section>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
