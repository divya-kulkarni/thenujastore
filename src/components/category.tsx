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
      <h4>VIEW OUR</h4>
      <h2>Popular Categories</h2>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} xxl={3}>
            <div className="category">
              <div className="category-img">
                <img
                  src={rings}
                  alt="rings"
                  className="img-fluid"
                  onClick={() => getNextPage("/rings")}
                />
              </div>
              <h3>RINGS</h3>
            </div>
          </Col>
          <Col xs={12} md={6} xxl={3}>
            <div className="category">
              <div className="category-img">
                <img
                  src={necklace}
                  alt="necklace"
                  className="img-fluid"
                  onClick={() => getNextPage("/necklace")}
                />
              </div>
              <h3>NECKLACES</h3>
            </div>
          </Col>
          <Col xs={12} md={6} xxl={3}>
            <div className="category">
              <div className="category-img">
                <img
                  src={earrings}
                  alt="earrings"
                  className="img-fluid"
                  onClick={() => getNextPage("/earring")}
                />
              </div>
              <h3>EARRINGS</h3>
            </div>
          </Col>
          <Col xs={12} md={6} xxl={3}>
            <div className="category">
              <div className="category-img">
                <img
                  src={bracelets}
                  alt="bracelets"
                  className="img-fluid"
                  onClick={() => getNextPage("/bracelet")}
                />
              </div>
              <h3>BRACELETS</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
