import { Row, Col, Container } from "react-bootstrap";
import "../styling/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="links">
          <Col>
            <h3>thenujastore</h3>
            <p>As unique as you</p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Products</p>
            <p>Log Out</p>
          </Col>
          <Col>
            <h3>Categories</h3>
            <p>Necklaces</p>
            <p>Earrings</p>
            <p>Bracelets</p>
            <p>Rings</p>
          </Col>
          <Col>
            <h3>Contact</h3>
          </Col>
        </Row>
        <Row>
          <p>thenujastore &copy; 2021</p>
        </Row>
      </Container>
    </div>
  );
};
