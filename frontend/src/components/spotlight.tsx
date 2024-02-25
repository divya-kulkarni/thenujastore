import { Button, Container, Row } from "react-bootstrap";
import "../styling/spotlight.css";
import spotlight from "../assets/welcome.jpg";

export const Spotlight = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="spotlight-container">
      <Container fluid>
        <Row>
          <div className="spotlight">
            <img src={spotlight} alt="spotlight" className="img-fluid" />
          </div>
          <div className="spotlight-text justify-items-right align-items-right">
            <h5>SPOTLIGHT ON</h5>
            <h3>Forget-Me-Not Necklace</h3>
            <Button onClick={() => getNextPage("/products")}>SHOP NOW</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
