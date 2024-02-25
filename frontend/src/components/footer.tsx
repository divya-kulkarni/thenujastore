import { Row, Col, Container } from "react-bootstrap";
import "../styling/footer.css";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img src={logo} alt="logo" className="img-fluid" />
          </Col>
          <Col xs={12} md={3}>
            <h2>ABOUT US</h2>

            <p>
              At thenujastore, we believe in the power of self-expression and
              individuality. <br />
              <br />
              Our journey began with a simple idea: to provide unique,
              high-quality products that inspire and uplift our customers.
              <br />
              <br /> Our mission is to empower you to express yourself
              authentically and confidently.{" "}
            </p>
          </Col>
          <Col xs={6} md={3}>
            <h2>MENU</h2>
            <h3>Search</h3>
            <h3>FAQ</h3>
            <h3>Privacy Policy</h3>
            <h3>Contact Us</h3>
          </Col>
          <Col xs={6} md={3}>
            <h2>SHOP</h2>
            <h3>Necklaces</h3>
            <h3>Earrings</h3>
            <h3>Bracelets</h3>
            <h3>Rings</h3>
          </Col>
        </Row>
        <Row className="copy">
          <p>thenujastore &copy; 2024</p>
        </Row>
      </Container>
    </div>
  );
};
