import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import n1 from "../assets/necklace1.jpg";
import n2 from "../assets/f8.jpg";
import b1 from "../assets/bestsellers/b1.jpg";
import b3 from "../assets/bestsellers/b3.jpg";
import b5 from "../assets/bestsellers/b5.jpg";
import b6 from "../assets/bestsellers/b6.jpg";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { CartContext } from "../pages/Cart/cartContext";
import { Suggestions } from "../components/suggestions";
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
                <p className="description">{product.description}</p>
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

export const productData = [
  {
    id: 1,
    name: "FORGET-ME-NOT HEXAGON NECKLACE",
    collection: "Forget-Me-Not",
    price: 50,
    image: n1,
    path: "forget-me-not-hexagon-necklace",
    category: "necklace",
    description:
      "Carry the sentiment of everlasting love with our Forget-Me-Not Necklace. Handcrafted with care, this necklace features a delicate pendant adorned with real forget-me-not flowers preserved in resin. Each flower is meticulously selected and arranged to capture the beauty and charm of these tiny blossoms. Suspended from a sterling silver chain, this pendant serves as a heartfelt reminder of cherished memories and enduring affection.",
  },
  {
    id: 2,
    name: "FORGET-ME-NOT NECKLACE",
    collection: "Forget-Me-Not",
    price: 30,
    image: fairytale,
    path: "forget-me-not-necklace",
    category: "bracelet",
    description:
      "Carry the sentiment of everlasting love and cherished memories with our Forget-Me-Not Bracelet. With its adjustable chain and lobster clasp closure, this bracelet ensures a comfortable fit for any wrist size. Wear it as a daily reminder of the special bonds that will never be forgotten.",
  },
  {
    id: 1,
    name: "CLEMATIS NECKLACE",
    collection: "Rosebud",
    price: 50,
    image: n2,
    path: "clematis-necklace",
    category: "necklace",
    description:
      "Bring the essence of the forest wherever you go with our Clematis Necklace. Handmade from sterling silver, this necklace features a lariat-style design adorned with finely detailed leaves and branches. The adjustable length allows for versatile styling, while the organic texture of the leaves adds a touch of rustic elegance. Whether worn alone or layered with other botanical-inspired pieces, this necklace is a stunning representation of nature's beauty.",
  },
  {
    id: 5,
    name: "ROSE DROP EARRINGS",
    price: 25,
    image: b5,
    path: "rose-drop-earrings",
    category: "earrings",
    description:
      "Adorn yourself with the timeless elegance of our Rose Earrings. Delicately crafted with meticulous attention to detail, each earring features real rose petals, symbolizing love, beauty, and femininity. Made from high-quality materials, these earrings exude sophistication and charm, making them the perfect accessory for any occasion. Whether you're dressing up for a special event or adding a touch of romance to your everyday look, our Rose Earrings are sure to turn heads and capture hearts. Elevate your style with a touch of floral-inspired luxury.",
  },
  {
    id: 3,
    name: "PASTEL DREAMS EARRINGS",
    collection: "Pastel Dreams",
    price: 40,
    image: pastel,
    path: "pastel-dreams-earrings",
    category: "earrings",
    description:
      "Handcrafted clay earrings, inspired by the colors of the sky. Each pair is unique and made with love.",
  },
  {
    id: 2,
    name: "STARDUST EARRINGS",
    price: 15,
    image: b1,
    path: "stardust-earrings",
    category: "earrings",
    description:
      "Illuminate your look with our Stardust Earrings, designed to add a touch of sparkle and glamour to any outfit. Crafted with lightweight yet durable materials, these earrings feature a cascade of shimmering glitter suspended from sterling silver or gold-plated hooks. The glitter catches the light with every movement, creating a dazzling effect that is sure to turn heads.",
  },
  {
    id: 3,
    name: "LAVENDER HAZE HOOPS",
    price: 25,
    image: b3,
    path: "lavender-haze-hoops",
    description:
      "Step into a tranquil oasis with our Lavender Haze Earrings, inspired by the serene beauty of blooming lavender fields. Handcrafted with care, these earrings feature delicate lavender blooms meticulously crafted from resin, capturing the essence of nature's tranquility. Each hoop is adorned with a cluster of these miniature flowers, creating a whimsical and feminine design.Whether worn as a subtle nod to nature's beauty or as a statement piece to brighten your ensemble, these Lavender Fields Hoop Earrings will add a touch of charm and sophistication to any look. ",
  },
  {
    id: 6,
    name: "GOLDEN HOUR EARRINGS",
    price: 25,
    image: b6,
    path: "golden-hour-earrings",
    category: "earrings",
    description:
      "Handcrafted glitter earrings, inspired by the colors of the sunset. Each pair is unique and made with love.",
  },
];
