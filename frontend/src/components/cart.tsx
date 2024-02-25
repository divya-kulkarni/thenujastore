import { Row, Col, Container, Button } from "react-bootstrap";
import "../styling/cart.css";
import { Footer } from "./footer";
import { NavBar } from "./navbar";
import necklace from "../assets/necklace-thumbnail.jpg";
import bracelet from "../assets/bracelet-thumbnail.jpg";
import earring from "../assets/earring-thumbnail.jpg";
import { Quantifier } from "./quantifier";

export const Cart = () => {
  var total = 0;
  return (
    <>
      <NavBar />
      <div className="cart-container">
        <h1>CART</h1>
        <Container>
          {cartData.map(
            (item) => (
              (total += item.price*item.quantity),
              (
                <Row className="item">
                  <Col xs={4} md={4}>
                    <img
                      src={item.image}
                      alt={item.image}
                      className="img-fluid"
                    />
                  </Col>
                  <Col xs={8} md={8}>
                    <h3>{item.name}</h3>
                    <h4>{item.collection}</h4>
                    <p className="price">${item.price}</p>
                    <Quantifier />
                  </Col>
                </Row>
              )
            )
          )}
          <hr />
          <p className="total">Total: ${total}</p>
          <Button className="checkout">CHECKOUT</Button>
        </Container>
      </div>
      <Footer />
    </>
  );
};

const cartData = [
  {
    id: 1,
    name: "Forget-Me-Not Necklace",
    collection: "Forget-Me-Not",
    price: 50,
    quantity: 1,
    image: necklace,
  },
  {
    id: 2,
    name: "Butterfly Earrings",
    collection: "Pastel Dreams",
    price: 30,
    quantity: 2,
    image: earring,
  },
  {
    id: 3,
    name: "Forget-Me-Not Bracelet",
    collection: "Forget-Me-Not",
    price: 40,
    quantity: 1,
    image: bracelet,
  },
];
