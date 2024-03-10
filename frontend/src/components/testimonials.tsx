import React from "react";
import "../styling/testimonials.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import quoteLeft from "../assets/quote-up.svg";
import quoteRight from "../assets/quote-down.svg";
import btnLeft from "../assets/btn-left.svg";
import btnRight from "../assets/btn-right.svg";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Riya",
    quote:
      "I absolutely love this website! It has everything I need, and the design is so fresh and fun. I absolutely love this website! It has everything I need, and the design is so fresh and fun.",
  },
  {
    id: 2,
    name: "Alex",
    quote:
      "This is by far the best portfolio I have ever seen. It's so creative and engaging!",
  },
  {
    id: 3,
    name: "Sophia",
    quote:
      "The colors and design of this website are amazing. It really stands out from the crowd.",
  },
  {
    id: 4,
    name: "David",
    quote:
      "TheNujaStore offers a fantastic selection of handcrafted jewelry. I love supporting independent artisans!",
  },
  {
    id: 5,
    name: "Emily",
    quote:
      "I'm amazed by the quality and craftsmanship of the jewelry I purchased from TheNujaStore. It exceeded my expectations!",
  },
];

export const Testimonials = () => {
  const [quote, setQuote] = React.useState(testimonials[0]);
  const getNextQuote = (direction: string) => {
    const currentQuoteIndex = testimonials.findIndex(
      (item) => item.id === quote.id
    );

    if (direction === "left") {
      const previousIndex =
        currentQuoteIndex > 0 ? currentQuoteIndex - 1 : testimonials.length - 1;
      setQuote(testimonials[previousIndex]);
    } else {
      const nextIndex = (currentQuoteIndex + 1) % testimonials.length;
      setQuote(testimonials[nextIndex]);
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonial-container">
        <Container fluid>
          <Row>
            <Col sm={12} lg={6} className="col1">
              <h2 className="testimonials-title">
                From our <b>community.</b>
              </h2>
              <p className="subText">
                Here's what people like you had to say about thenujastore.
              </p>
              <Button
                className="quote-btn"
                onClick={() => getNextQuote("left")}
              >
                <img src={btnLeft} alt="left" />
              </Button>
              <Button
                className="quote-btn"
                onClick={() => getNextQuote("right")}
              >
                <img src={btnRight} alt="right" style={{ left: "1rem" }} />
              </Button>
            </Col>
            <Col sm={12} lg={6}>
              <div className="testimonial-list">
                <div className="testimonial">
                  <img src={quoteLeft} alt="quote" className="quote-left" />
                  <p className="quote">{quote.quote}</p>
                  <p className="name">{quote.name}</p>
                  <img src={quoteRight} alt="quote" className="quote-right" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
