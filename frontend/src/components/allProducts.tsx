import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import n1 from "../assets/necklace1.jpg";
import n2 from "../assets/f8.jpg";
import n3 from "../assets/necklace2.jpg";
import b1 from "../assets/bestsellers/b1.jpg";
import b3 from "../assets/bestsellers/b3.jpg";
import b5 from "../assets/bestsellers/b5.jpg";
import b6 from "../assets/bestsellers/b6.jpg";
import "../styling/showCategory.css";
import { Row, Col, Container } from "react-bootstrap";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const AllProducts = () => {
  return (
    <div className="product-container">
      <NavBar />
      <h2>ALL PRODUCTS</h2>
      <Container fluid>
        <Row>
          {productData.map((item) => {
            return (
              <Col xs={6} md={4} xl={3}>
                <div className="category-item">
                  <img src={item.image} alt="" className="img-fluid" />
                  <h3>{item.name}</h3>
                  <h4>{item.price}</h4>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export const productData = [
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
    id: 3,
    name: "ROSEBUD NECKLACE",
    collection: "Rosebud",
    price: 50,
    image: n2,
    path: "rosebud-necklace",
    category: "necklace",
  },
  {
    id: 4,
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
    id: 6,
    name: "PASTEL DREAMS EARRINGS",
    collection: "Pastel Dreams",
    price: 40,
    image: pastel,
    path: "pastel-dreams-earrings",
    category: "earrings",
  },
  {
    id: 7,
    name: "DISCO QUEEN EARRINGS",
    price: 15,
    image: b1,
    path: "disco-queen-earrings",
    category: "earrings",
  },
  {
    id: 8,
    name: "LAVENDER HAZE HOOPS",
    price: 25,
    image: b3,
    path: "lavender-haze-hoops",
  },
  {
    id: 9,
    name: "GOLDEN HOUR EARRINGS",
    price: 25,
    image: b6,
    path: "golden-hour-earrings",
    category: "earrings",
  },
  {
    id: 10,
    name: "FORGET-ME-NOT CIRCULAR NECKLACE",
    price: 15,
    image: n3,
    path: "forget-me-not-necklace-circular",
    category: "necklace",
  },
];
