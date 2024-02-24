import { Button, Col, Container, Row } from "react-bootstrap";
import "../styling/spotlight.css";
import spotlight from "../assets/welcome.jpg";

export const Spotlight = () => {
  return (
    <div className="spotlight-container">
      <Container fluid>
        <Row>
          <h5>SPOTLIGHT ON</h5>
          <div className="spotlight">
            <img src={spotlight} alt="spotlight" className="img-fluid" />
          </div>
          <div className="spotlight-text justify-items-right align-items-right">
            <h3>Forget-Me-Not Necklace</h3>
            <Button>SHOP NOW</Button>
          </div>
        </Row>
      </Container>
      <hr />
    </div>
  );
};
