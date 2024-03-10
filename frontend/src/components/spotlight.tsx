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
            <h3>FORGET-ME-NOT NECKLACE</h3>
            <h5>In medieval europe, forget-me-nots were given as tokens of affection between lovers. <br />they were believed to have the power to keep love alive and strengthen the bond between couples.</h5>
            <Button onClick={() => getNextPage("/products/forget-me-not-necklace")}>CHECK IT OUT</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
