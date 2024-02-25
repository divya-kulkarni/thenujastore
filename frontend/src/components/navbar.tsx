import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import "../styling/navbar.css";
import shoppingCart from "../assets/icons/cart.svg";
import { NavbarText } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [scrolled]);
  return (
    <div className="navbar-container">
      <div className="banner" onClick={() => getNextPage("/products")}>
        <h1>✨ FREE SHIPPING ON ALL ORDERS OVER $50 ✨</h1>
      </div>
      <Navbar
        expand="md"
        sticky="top"
        id="navbar"
        className={scrolled ? "navbar scrolled" : "navbar"}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Brand onClick={() => getNextPage("/")}>
            thenujastore
          </Navbar.Brand>
          <NavbarText className="cart">
            <img
              src={shoppingCart}
              alt="shopping cart"
              onClick={() => getNextPage("/cart")}
            />
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
                <Nav.Link
                  className="main-link"
                  href=""
                  onClick={() => getNextPage("/")}
                >
                  HOME
                </Nav.Link>
                <hr />
                <Nav.Link className="main-link">NEW ARRIVALS</Nav.Link>
                <hr />
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Nav.Link className="main-link">
                        SHOP BY CATEGORY
                      </Nav.Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/necklace")}
                      >
                        NECKLACES
                      </Nav.Link>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/bracelet")}
                      >
                        BRACELETS
                      </Nav.Link>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/earrings")}
                      >
                        EARRINGS
                      </Nav.Link>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/rings")}
                      >
                        RINGS
                      </Nav.Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr />
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Nav.Link className="main-link" href="">
                        SHOP BY COLLECTIONS
                      </Nav.Link>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/collections/rosebud")}
                      >
                        BLOOMING ROSEBUD
                      </Nav.Link>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/collections/fairytale")}
                      >
                        FORGET-ME-NOT FAIRYTALE
                      </Nav.Link>
                      <Nav.Link
                        className="inner-link"
                        onClick={() => getNextPage("/collections/pastel")}
                      >
                        PASTEL DREAMS
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
