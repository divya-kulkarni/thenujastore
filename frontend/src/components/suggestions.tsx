import { Row, Col, Container } from "react-bootstrap";
import { productData } from "./allProducts";
import "../styling/suggestions.css";

const getRandomSuggestions = () => {
  const suggestionLength: number = 4;
  const shuffled = productData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, suggestionLength);
};

export const Suggestions = () => {
  const getNextPage = (productName: string) => {
    window.location.pathname = "/products/" + productName;
  };
  let randomSuggestions = getRandomSuggestions();
  return (
    <div className="suggestions">
      <hr />
      <h2>YOU MIGHT ALSO LIKE</h2>
      <Container>
        <Row>
          {randomSuggestions.map((item) => {
            return (
              <Col xs={6} lg={3}>
                <div className="suggestion-item">
                  <div className="item-image">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid"
                      onClick={() => getNextPage(item.path)}
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <h4>${item.price}</h4>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
