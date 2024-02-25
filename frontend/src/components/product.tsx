import { useParams } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import "../styling/product.css";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import { Quantifier } from "./quantifier";

export const Product = () => {
  const { productName } = useParams();
  const product = productData.find((product) => product.path === productName);
  if (product) {
    return (
      <>
        <NavBar />
        <div className="product">
          <Container>
            <Row>
              <Col sm={12} md={7} className="product-img">
                <img src={product.image} alt={product.name} />
              </Col>
              <Col sm={12} md={5} className="details">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <Quantifier />
                <Button className="add-to-cart">ADD TO CART</Button>
                <h2>PRODUCT DETAILS</h2>
                <hr />
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
    name: "Forget-Me-Not Necklace",
    collection: "Forget-Me-Not",
    price: "$50",
    image: fairytale,
    path: "forget-me-not-necklace",
    category: "necklace",
  },
  {
    id: 2,
    name: "Forget-Me-Not Bracelet",
    collection: "Forget-Me-Not",
    price: "$30",
    image: fairytale,
    path: "forget-me-not-bracelet",
    category: "bracelet",
  },
  {
    id: 3,
    name: "Forget-Me-Not Earrings",
    collection: "Forget-Me-Not",
    price: "$40",
    image: fairytale,
    path: "forget-me-not-earrings",
    category: "earrings",
  },

  {
    id: 1,
    name: "Rosebud Necklace",
    collection: "Rosebud",
    price: "$50",
    image: rosebud,
    path: "rosebud-necklace",
    category: "necklace",
  },
  {
    id: 2,
    name: "Rosebud Bracelet",
    collection: "Rosebud",
    price: "$30",
    image: rosebud,
    path: "rosebud-bracelet",
    category: "bracelet",
  },
  {
    id: 3,
    name: "Rosebud Earrings",
    collection: "Rosebud",
    price: "$40",
    image: rosebud,
    path: "rosebud-earrings",
    category: "earrings",
  },

  {
    id: 1,
    name: "Pastel Dreams Necklace",
    collection: "Pastel Dreams",
    price: "$50",
    image: pastel,
    path: "pastel-dreams-necklace",
    category: "necklace",
  },
  {
    id: 2,
    name: "Pastel Dreams Bracelet",
    collection: "Pastel Dreams",
    price: "$30",
    image: pastel,
    path: "pastel-dreams-bracelet",
    category: "bracelet",
  },
  {
    id: 3,
    name: "Pastel Dreams Earrings",
    collection: "Pastel Dreams",
    price: "$40",
    image: pastel,
    path: "pastel-dreams-earrings",
    category: "earrings",
  },
];
