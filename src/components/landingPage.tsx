import { Col, Row } from "react-bootstrap";
import "../styling/landingPage.css";
import { NavBar } from "./navbar";

export const LandingPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="landing">
        <Row>
          <Col sm={12} md={6} className="column-left">
            <div className="overlay"></div>
          </Col>
          <Col sm={12} md={6} className="column-right">
            <div className="overlay"></div>
          </Col>
        </Row>
      </div>
    </>
  );
};
