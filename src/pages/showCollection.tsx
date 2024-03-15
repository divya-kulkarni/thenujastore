import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Row, Col, Container } from "react-bootstrap";
import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import { useLocation } from "react-router-dom";
import "../styling/showCollection.css";

export const ShowCollection = () => {
  var collectionData: any[] = [];
  var title = "";
  const location = useLocation().pathname;
  if (location === "/collections/fairytale") {
    title = "FAIRYTALE";
    collectionData = fairytaleData;
  } else if (location === "/collections/rosebud") {
    title = "ROSEBUD";
    collectionData = rosebudData;
  } else if (location === "/collections/pastel") {
    title = "PASTEL DREAMS";
    collectionData = pastelData;
  }
  const getNextPage = (productName: string) => {
    window.location.pathname = "/products/" + productName;
  };

  return (
    <div>
      <NavBar />
      <div className="collection-item">
        <Container fluid>
          <Row>
            <h1>{title}</h1>
            {collectionData.map((item) => {
              return (
                <Col xs={6} lg={3}>
                  <div className="collection">
                    <img
                      src={item.image}
                      alt="rings"
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
      </div>
      <Footer />
    </div>
  );
};

const fairytaleData = [
  {
    id: 1,
    name: "Forget-Me-Not Necklace",
    collection: "Forget-Me-Not",
    price: 50,
    image: fairytale,
    path: "forget-me-not-necklace",
  },
  {
    id: 2,
    name: "Forget-Me-Not Bracelet",
    collection: "Forget-Me-Not",
    price: 30,
    image: fairytale,
    path: "forget-me-not-bracelet",
  },
  {
    id: 3,
    name: "Forget-Me-Not Earrings",
    collection: "Forget-Me-Not",
    price: 40,
    image: fairytale,
    path: "forget-me-not-earrings",
  },
];

const rosebudData = [
  {
    id: 1,
    name: "Rosebud Necklace",
    collection: "Rosebud",
    price: 50,
    image: rosebud,
    path: "rosebud-necklace",
  },
  {
    id: 2,
    name: "Rosebud Bracelet",
    collection: "Rosebud",
    price: 30,
    image: rosebud,
    path: "rosebud-bracelet",
  },
  {
    id: 3,
    name: "Rosebud Earrings",
    collection: "Rosebud",
    price: 40,
    image: rosebud,
    path: "rosebud-earrings",
  },
];

const pastelData = [
  {
    id: 1,
    name: "Pastel Dreams Necklace",
    collection: "Pastel Dreams",
    price: 50,
    image: pastel,
    path: "pastel-dreams-necklace",
  },
  {
    id: 2,
    name: "Pastel Dreams Bracelet",
    collection: "Pastel Dreams",
    price: 30,
    image: pastel,
    path: "pastel-dreams-bracelet",
  },
  {
    id: 3,
    name: "Pastel Dreams Earrings",
    collection: "Pastel Dreams",
    price: 40,
    image: pastel,
    path: "pastel-dreams-earrings",
  },
];
