import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import n1 from "../assets/necklace1.jpg";
import n2 from "../assets/f8.jpg";
import n3 from "../assets/necklace3.jpg";
import "../styling/showCategory.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const ShowCategory = () => {
  const { category } = useParams();

  const categoryData = productData.filter(
    (product) => product.category === category
  );

  const title = category?.toUpperCase();
  const getNextPage = (productName: string) => {
    window.location.pathname = "/products/" + productName;
  };
  return (
    <div className="product-container">
      <NavBar />
      <h2>{title}</h2>
      <Container fluid>
        <Row>
          {categoryData.map((item) => {
            return (
              <Col xs={6} md={4} xl={3}>
                <div className="category-item">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                    onClick={() => getNextPage(item.path)}
                  />
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

const productData = [
  {
    id: 1,
    name: "Forget-Me-Not Necklace",
    collection: "Forget-Me-Not",
    price: "$50",
    image: n1,
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
    image: n2,
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
    image: n3,
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
