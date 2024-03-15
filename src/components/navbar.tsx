import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styling/navbar.css";
import shoppingCart from "../assets/icons/cart.svg";
import { NavDropdown, NavbarText } from "react-bootstrap";
import logo from "../assets/logo-transparent.png";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="md" id="navbar" fixed="top">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={logo} alt="thenujastore" className="logo" />
        </Navbar.Brand>
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
            <Nav className="justify-content-start flex-grow-1 pe-3 top-nav">
              <Nav.Link className="main-link" onClick={() => navigate("/")}>
                HOME
              </Nav.Link>
              <hr />
              <NavDropdown title="SHOP BY CATEGORY" className="main-link">
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/necklace")}
                >
                  NECKLACES
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/bracelet")}
                >
                  BRACELETS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/earrings")}
                >
                  EARRINGS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/rings")}
                >
                  RINGS
                </NavDropdown.Item>
              </NavDropdown>
              <hr />
              <NavDropdown title="COLLECTIONS" className="main-link">
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/necklace")}
                >
                  ROSEBUD
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/bracelet")}
                >
                  FAIRYTALE
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => navigate("/earrings")}
                >
                  PASTEL DREAMS
                </NavDropdown.Item>
              </NavDropdown>
              <hr />
              <Nav.Link className="inner-link">FAQ</Nav.Link>
              <hr />
              <Nav.Link className="inner-link">Privacy Policy</Nav.Link>
              <hr />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <NavbarText className="cart">
          <img
            src={shoppingCart}
            alt="shopping cart"
            onClick={() => navigate("/cart")}
          />
        </NavbarText>
      </Container>
    </Navbar>
  );
};
