import "../styling/bestsellers.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import b1 from "../assets/bestsellers/b1.jpg";
import b2 from "../assets/bestsellers/b2.jpg";
import b3 from "../assets/bestsellers/b3.jpg";
import b4 from "../assets/bestsellers/b4.jpg";
import b5 from "../assets/bestsellers/b5.jpg";
import b6 from "../assets/bestsellers/b6.jpg";

export const Bestsellers = () => {
  return (
    <div className="bestseller-container">
      <h4>CHECK OUT OUR</h4>
      <br />
      <h2>BESTSELLERS</h2>
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <div className="bestseller">
              <img src={b1} alt="rings" className="img-fluid" />
              <h5>DISCO QUEEN EARRINGS</h5>
              <h6>$15</h6>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="bestseller">
              <img src={b2} alt="necklace" className="img-fluid" />
              <h5>FORGET ME NOT NECKLACE</h5>
              <h6>$25</h6>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="bestseller">
              <img src={b3} alt="earrings" className="img-fluid" />
              <h5>LAVENDER HAZE HOOPS</h5>
              <h6>$25</h6>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="bestseller">
              <img src={b4} alt="bracelets" className="img-fluid" />
              <h5>PASTEL BUTTERFLY EARRINGS</h5>
              <h6>$25</h6>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="bestseller">
              <img src={b5} alt="bracelets" className="img-fluid" />
              <h5>ROSE DROP EARRINGS</h5>
              <h6>$25</h6>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="bestseller">
              <img src={b6} alt="bracelets" className="img-fluid" />
              <h5>GOLDEN HOUR EARRINGS</h5>
              <h6>$25</h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Button className="mt-3">
        VIEW ALL PRODUCTS
      </Button>
    </div>
  );
};
