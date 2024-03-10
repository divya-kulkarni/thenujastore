import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styling/navbar.css";
import shoppingCart from "../assets/icons/cart.svg";
import { NavDropdown, NavbarText } from "react-bootstrap";
import { CartContext } from "./cartContext";
import logo from "../assets/logo-transparent.png";

export const NavBar = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  const { cartItems } = useContext(CartContext);
  const [isHoveredCategory, setIsHoveredCategory] = useState(false);
  const handleHoverCategory = () => {
    setIsHoveredCategory(!isHoveredCategory);
  };
  const [isHoveredCollection, setIsHoveredCollection] = useState(false);
  const handleHoverCollection = () => {
    setIsHoveredCollection(!isHoveredCollection);
  };
  const [isHoveredInfo, setIsHoveredInfo] = useState(false);
  const handleHoverInfo = () => {
    setIsHoveredInfo(!isHoveredInfo);
  };

  return (
    <Navbar expand="md" id="navbar" fixed="top">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Brand onClick={() => getNextPage("/")}>
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
              <Nav.Link className="main-link" onClick={() => getNextPage("/")}>
                HOME
              </Nav.Link>
              <hr />
              <NavDropdown title="SHOP BY CATEGORY" className="main-link">
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/necklace")}
                >
                  NECKLACES
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/bracelet")}
                >
                  BRACELETS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/earrings")}
                >
                  EARRINGS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/rings")}
                >
                  RINGS
                </NavDropdown.Item>
              </NavDropdown>
              <hr />
              <NavDropdown title="COLLECTIONS" className="main-link">
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/necklace")}
                >
                  ROSEBUD
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/bracelet")}
                >
                  FAIRYTALE
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="inner-link"
                  onClick={() => getNextPage("/earrings")}
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
            onClick={() => getNextPage("/cart")}
          />
        </NavbarText>
      </Container>
    </Navbar>
  );
};
