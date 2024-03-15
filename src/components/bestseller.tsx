import "../styling/bestsellers.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import b1 from "../assets/bestsellers/b1.jpg";
import b2 from "../assets/bestsellers/b2.jpg";
import b3 from "../assets/bestsellers/b3.jpg";
import b4 from "../assets/bestsellers/b4.jpg";
import b5 from "../assets/bestsellers/b5.jpg";
import b6 from "../assets/bestsellers/b6.jpg";
import n3 from "../assets/necklace2.jpg";
import n2 from "../assets/f8.jpg";
import {useNavigate} from "react-router-dom";

export const Bestsellers = () => {
  const navigate=useNavigate();
  return (
    <div className="bestseller-container">
      <h4>CHECK OUT OUR</h4>
      <h2>Bestsellers</h2>
      <Container fluid>
        <Row>
          {bestsellerData.map((product) => {
            return (
              <Col xs={6} md={3} xxl={3}>
                <div className="bestseller">
                  <div className="bestseller-img">
                    <img
                      src={product.image}
                      alt=""
                      className="img-fluid"
                      onClick={() => navigate("/products/" + product.path)}
                    />
                  </div>
                  <h5>{product.name}</h5>
                  <h6>${product.price}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Button className="mt-3" onClick={() => navigate("/products")}>
        VIEW ALL PRODUCTS
      </Button>
    </div>
  );
};

const bestsellerData = [
  {
    id: 1,
    name: "STARDUST EARRINGS",
    price: 15,
    image: b1,
    path: "stardust-earrings",
  },
  {
    id: 2,
    name: "FORGET ME NOT NECKLACE",
    price: 25,
    image: b2,
    path: "forget-me-not-necklace",
  },
  {
    id: 3,
    name: "LAVENDER HAZE HOOPS",
    price: 25,
    image: b3,
    path: "lavender-haze-hoops",
  },
  {
    id: 4,
    name: "ROSE DROP EARRINGS",
    price: 25,
    image: b5,
    path: "rose-drop-earrings",
  },
  {
    id: 5,
    name: "ORCHID NECKLACE",
    price: 25,
    image: n2,
    path: "orchid-necklace",
  },

  {
    id: 6,
    name: "PASTEL DREAM EARRINGS",
    price: 25,
    image: b4,
    path: "pastel-butterfly-earrings",
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
