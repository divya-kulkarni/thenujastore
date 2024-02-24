import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import "../styling/navbar.css";
import shoppingCart from "../assets/icons/cart.svg";
import { NavbarText } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <Navbar expand="md" className="mb-3" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Brand href="#">thenujastore</Navbar.Brand>
          <NavbarText className="cart">
            <img src={shoppingCart} alt="shopping cart" />
          </NavbarText>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                thenujastore
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 top-nav">
                <Nav.Link className="main-link" href="#action1">
                  HOME
                </Nav.Link>
                <hr />
                <Nav.Link className="main-link" href="#action2">
                  NEW ARRIVALS
                </Nav.Link>
                <hr />
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Nav.Link className="main-link" href="#action2">
                        SHOP
                      </Nav.Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Nav.Link className="inner-link" href="#action2">
                        NECKLACES
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        BRACELETS
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        EARRINGS
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        RINGS
                      </Nav.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr />
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Nav.Link className="main-link" href="#action2">
                        COLLECTIONS
                      </Nav.Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Nav.Link className="inner-link" href="#action2">
                        BLOOMING ROSEBUD
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        FORGET-ME-NOT FAIRYTALE
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        PASTEL DREAMS
                      </Nav.Link>
                      <Nav.Link className="inner-link" href="#action2">
                        GOLDEN HOUR
                      </Nav.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr />
                <Nav.Link className="main-link" href="#action2">
                  SALE
                </Nav.Link>
                <hr />
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3 bottom-nav">
                <Nav.Link className="other-link" href="#action1">
                  Search
                </Nav.Link>
                <Nav.Link className="other-link" href="#action2">
                  FAQ
                </Nav.Link>
                <Nav.Link className="other-link" href="#action2">
                  Privacy Policy
                </Nav.Link>
                <Nav.Link className="other-link" href="#action2">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
