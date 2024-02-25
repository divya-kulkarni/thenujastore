import "../styling/category.css";
import { Row, Col, Container } from "react-bootstrap";
import necklace from "../assets/necklace-thumbnail.jpg";
import earrings from "../assets/earring-thumbnail.jpg";
import rings from "../assets/rings.jpg";
import bracelets from "../assets/bracelet-thumbnail.jpg";

export const Category = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="category-container">
      <h2>SHOP BY CATEGORY</h2>
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <div className="category">
              <img
                src={rings}
                alt="rings"
                className="img-fluid"
                onClick={() => getNextPage("/rings")}
              />
              <h3>RINGS</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img
                src={necklace}
                alt="necklace"
                className="img-fluid"
                onClick={() => getNextPage("/necklace")}
              />
              <h3>NECKLACES</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img
                src={earrings}
                alt="earrings"
                className="img-fluid"
                onClick={() => getNextPage("/earring")}
              />
              <h3>EARRINGS</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="category">
              <img
                src={bracelets}
                alt="bracelets"
                className="img-fluid"
                onClick={() => getNextPage("/bracelet")}
              />
              <h3>BRACELETS</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
