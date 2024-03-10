import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import n1 from "../assets/necklace1.jpg";
import n2 from "../assets/f8.jpg";
import b1 from "../assets/bestsellers/b1.jpg";
import b3 from "../assets/bestsellers/b3.jpg";
import b5 from "../assets/bestsellers/b5.jpg";
import b6 from "../assets/bestsellers/b6.jpg";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import { CartContext } from "../components/cartContext";
import { Suggestions } from "./suggestions";
import "../styling/product.css";

export const Product = () => {
  const { productName } = useParams();
  const product = productData.find((product) => product.path === productName);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  if (product) {
    return (
      <>
        <NavBar />
        <div className="product">
          <Container>
            <Row>
              <Col sm={12} md={7}>
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
              </Col>
              <Col sm={12} md={5} className="product-details">
                <h1>{product.name}</h1>
                <h3>${product.price}</h3>

                {!cartItems.find((item: any) => item.id === product.id) ? (
                  <Button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                ) : (
                  <div className="quantifier">
                    <input
                      type="button"
                      value="-"
                      className="buttonMinus"
                      onClick={() => removeFromCart(product)}
                    />
                    <input
                      type="number"
                      max=""
                      className="quantityField"
                      value={
                        cartItems.find((item: any) => item.id === product.id)
                          .quantity
                      }
                    />
                    <input
                      type="button"
                      value="+"
                      className="buttonPlus"
                      onClick={() => addToCart(product)}
                    />
                  </div>
                )}
                <hr />
                <h2>
                  <u>PRODUCT DETAILS</u>
                </h2>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Col>
            </Row>
            <Row>
              <Suggestions />
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  } else {
    return <h1>Product not found</h1>;
  }
};

const productData = [
  {
    id: 1,
    name: "FORGET-ME-NOT NECKLACE",
    collection: "Forget-Me-Not",
    price: 50,
    image: n1,
    path: "forget-me-not-necklace",
    category: "necklace",
  },
  {
    id: 2,
    name: "FORGET-ME-NOT BRACELET",
    collection: "Forget-Me-Not",
    price: 30,
    image: fairytale,
    path: "forget-me-not-bracelet",
    category: "bracelet",
  },
  {
    id: 1,
    name: "ROSEBUD NECKLACE",
    collection: "Rosebud",
    price: 50,
    image: n2,
    path: "rosebud-necklace",
    category: "necklace",
  },
  {
    id: 2,
    name: "ROSEBUD BRACELET",
    collection: "Rosebud",
    price: 30,
    image: rosebud,
    path: "rosebud-bracelet",
    category: "bracelet",
  },
  {
    id: 5,
    name: "ROSE DROP EARRINGS",
    price: 25,
    image: b5,
    path: "rose-drop-earrings",
    category: "earrings",
  },
  {
    id: 3,
    name: "PASTEL DREAMS EARRINGS",
    collection: "Pastel Dreams",
    price: 40,
    image: pastel,
    path: "pastel-dreams-earrings",
    category: "earrings",
  },
  {
    id: 2,
    name: "DISCO QUEEN EARRINGS",
    price: 15,
    image: b1,
    path: "disco-queen-earrings",
    category: "earrings",
  },
  {
    id: 3,
    name: "LAVENDER HAZE HOOPS",
    price: 25,
    image: b3,
    path: "lavender-haze-hoops",
  },
  {
    id: 6,
    name: "GOLDEN HOUR EARRINGS",
    price: 25,
    image: b6,
    path: "golden-hour-earrings",
    category: "earrings",
  },
];
