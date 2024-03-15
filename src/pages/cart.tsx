import { Row, Col, Container, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { CartContext } from "../components/cartContext";
import { SuccessModal } from "../components/successModal";
import "../styling/cart.css";
import "../styling/quantifier.css";
import empty from "../assets/empty-cart.png";
import { Link, useLocation } from "react-router-dom";
import { Suggestions } from "../components/suggestions";

export const Cart = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  const location = useLocation();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirectResult = searchParams.get("redirect_status");
    if (redirectResult === "succeeded") {
      setPaymentSuccess(true);
      clearCart();
      setModalShow(true);
    }
    // eslint-disable-next-line
  }, [location.search]);
  return (
    <>
      <NavBar />
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <h1>CART</h1>
            <Row className="cart-title">
              <Col md={7}>
                <h4 style={{ textAlign: "left", paddingLeft: "2rem" }}>
                  PRODUCT
                </h4>
              </Col>
              <Col md={3}>
                <h4
                  style={{
                    textAlign: "left",
                  }}
                >
                  QUANTITY
                </h4>
              </Col>
              <Col md={2}>
                <h4
                  style={{
                    textAlign: "left",
                  }}
                >
                  TOTAL
                </h4>
              </Col>
            </Row>
            <hr />
          </>
        ) : null}
        <Container>
          {cartItems.map((item: any) => (
            <>
              <Row className="item">
                <Col xs={4} md={7}>
                  <div className="cart-item">
                    <div className="cart-img">
                      <img
                        src={item.image}
                        alt={item.image}
                        className="img-fluid"
                      />
                    </div>
                    <div className="cart-details">
                      <h4 style={{ opacity: "1" }}>{item.name}</h4>
                      <h4>{item.collection}</h4>
                      <p className="price">${item.price}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={8} md={3}>
                  <div className="quantifier">
                    <input
                      type="button"
                      value="-"
                      className="buttonMinus"
                      onClick={() => removeFromCart(item)}
                    />
                    <input
                      type="number"
                      max=""
                      className="quantityField"
                      value={item.quantity}
                    />
                    <input
                      type="button"
                      value="+"
                      className="buttonPlus"
                      onClick={() => addToCart(item)}
                    />
                  </div>
                </Col>
                <Col md={2}>
                  <p style={{ textAlign: "left" }}>
                    ${item.price * item.quantity}
                  </p>
                </Col>
              </Row>
              <hr />
            </>
          ))}
          {paymentSuccess ? (
            <SuccessModal show={modalShow} onHide={() => setModalShow(false)} />
          ) : null}
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <Row className="cart-title">
                <Col md={7}></Col>
                <Col md={3}></Col>
                <Col md={2}>
                  <h4 style={{ textAlign: "left" }}>${getCartTotal()}</h4>
                </Col>
              </Row>
              <Row>
                <Button
                  className="checkout"
                  onClick={() => getNextPage("/checkout")}
                >
                  CHECKOUT
                </Button>
              </Row>
            </div>
          ) : (
            <div className="empty-cart">
              <img src={empty} className="img-fluid" alt="empty-cart" />
              <h2>YOUR CART LOOKS LIGHTER THAN A FEATHER!</h2>
              <Button className="mt-3">
                <Link to="/products">TREAT YOURSELF</Link>
              </Button>
            </div>
          )}
        </Container>
      </div>
      <Suggestions />
      <Footer />
    </>
  );
};
