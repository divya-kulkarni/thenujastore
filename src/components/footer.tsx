import { Row, Col, Container } from "react-bootstrap";
import "../styling/footer.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="footer">
      <Container>
        <Row className="details">
          <Col xs={12} md={3}>
            <img src={logo} alt="logo" className="img-fluid" />
          </Col>
          <Col xs={12} md={3}>
            <h2>
              <u>ABOUT US</u>
            </h2>

            <p>
              At thenujastore, we believe in the power of self-expression and
              individuality. <br />
              <br />
              Our journey began with a simple idea: to provide unique,
              high-quality products that inspire and uplift our customers.
              <br />
              <br /> Our mission is to empower you to express yourself
              authentically and confidently.
            </p>
          </Col>
          <Col xs={6} md={3} className="links">
            <h2>
              <u>MENU</u>
            </h2>
            <h3 onClick={() => navigate("/faq")}>FAQ</h3>
            <h3>Privacy Policy</h3>
          </Col>
          <Col xs={6} md={3} className="links">
            <h2>
              <u>SHOP</u>
            </h2>
            <h3 onClick={() => navigate("/necklace")}>Necklaces</h3>
            <h3 onClick={() => navigate("/earrings")}>Earrings</h3>
            <h3 onClick={() => navigate("/bracelet")}>Bracelets</h3>
            <h3 onClick={() => navigate("/rings")}>Rings</h3>
          </Col>
        </Row>
        <Row>
          <div className="copy">
            <p>All Rights Reserved. thenujastore &copy; 2024</p>
          </div>
        </Row>
      </Container>
    </div>
  );
};
