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
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
      <Navbar.Brand onClick={() => navigate("/")}>
        <img src={logo} alt="thenujastore logo" className="logo" />
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
            <NavDropdown
              title="SHOP BY CATEGORY"
              className="main-link"
              data-testid="category"
            >
              <NavDropdown.Item
                href=""
                className="inner-link"
                onClick={() => navigate("/necklaces")}
                data-testid="necklaces"
              >
                NECKLACES
              </NavDropdown.Item>
              <NavDropdown.Item
                href=""
                className="inner-link"
                onClick={() => navigate("/bracelets")}
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
            <NavDropdown title="SHOP BY COLLECTIONS" className="main-link">
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
    </Navbar>
  );
};
