import { Row, Col, Container } from "react-bootstrap";
import "../styling/collections.css";
import rosebud from "../assets/categories/rosebud.jpg";
import fairytale from "../assets/categories/necklace-thumbnail.jpg";
import pastel from "../assets/categories/pastel-dreams.jpg";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const Collections = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <>
      <NavBar />
      <div className="collection-container">
        <h1>COLLECTIONS</h1>
        <Container fluid>
          <Row>
            {collectionData.map((item) => {
              var pathname = "/collections/" + item.path;
              return (
                <Col xs={12} md={6}>
                  <div className="collection">
                    <img
                      src={item.image}
                      alt="rings"
                      className="img-fluid"
                      onClick={() => getNextPage(pathname)}
                    />
                    <h3>{item.name}</h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

const collectionData = [
  {
    id: 2,
    name: "FAIRYTALE",
    image: fairytale,
    path: "fairytale",
  },
  {
    id: 1,
    name: "BLOOMING ROSEBUDS",
    image: rosebud,
    path: "rosebud",
  },
  {
    id: 3,
    name: "PASTEL DREAMS",
    image: pastel,
    path: "pastel",
  },
];
