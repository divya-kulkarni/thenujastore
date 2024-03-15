import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../pages/Cart/cartContext";
import { useContext } from "react";

export const SuccessModal = (props: any) => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  const resetCart = () => {
    navigate("/cart");
    clearCart();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onHide={() => resetCart()}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontFamily: "Grotesk-light" }}
        >
          WE'VE GOT YOUR ORDER! 🎉
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <p style={{ fontFamily: "Grotesk-light" }}>
          Thank you for shopping with us! Your items will be shipped shortly. If
          you have any questions or concerns, feel free to reach out to our
          customer support team. Happy shopping! 🛍️
        </p>
      </Modal.Body>
    </Modal>
  );
};
