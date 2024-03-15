import Accordion from "react-bootstrap/Accordion";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import "../styling/faq.css";

export const FAQ = () => {
  return (
    <>
      <NavBar />
      <div className="faq">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>ARE THESE PIECES WATERPROOF?</Accordion.Header>
            <Accordion.Body>
              While we strive to provide high-quality products, we do not
              guarantee that all items are waterproof. We recommend reviewing
              the product descriptions for specific details on waterproof
              features or contacting our customer service team for further
              assistance.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              DO YOU OFFER INTERNATIONAL SHIPPING?
            </Accordion.Header>
            <Accordion.Body>
              Currently, we do not offer international shipping. Our services
              are limited to domestic shipping within India. We apologize for
              any inconvenience this may cause.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>WHAT IS YOUR RETURN POLICY</Accordion.Header>
            <Accordion.Body>
              At TheNujastore, we prioritize customer satisfaction. Since each
              piece is made-to-order with great care, we do not accept return
              requests. We appreciate your understanding.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>HOW CAN I CONTACT YOU?</Accordion.Header>
            <Accordion.Body>
              For any inquiries or concerns, please contact us on our Instagram
              page @thenujastore or email us at thenujastore@gmail.com. We will
              be happy to assist you.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};
