import "../styling/category.css";
import { Row, Col, Container } from "react-bootstrap";
import necklace from "../assets/necklace-thumbnail.jpg";
import earrings from "../assets/earring-thumbnail.jpg";
import rings from "../assets/rings.jpg";
import bracelets from "../assets/bracelet-thumbnail.jpg";

export const Category = () => {
  return (
    <div className="category-container">
      <h2>SHOP BY CATEGORY</h2>
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <div className="category">
              <img src={rings} alt="rings" className="img-fluid" />
              <h3>RINGS</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img src={necklace} alt="necklace" className="img-fluid" />
              <h3>NECKLACES</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img src={earrings} alt="earrings" className="img-fluid" />
              <h3>EARRINGS</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img src={bracelets} alt="bracelets" className="img-fluid" />
              <h3>BRACELETS</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};
