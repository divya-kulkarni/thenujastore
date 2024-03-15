import React, { FormEvent, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CartContext } from "../components/cartContext";
import { useContext } from "react";
import "../styling/checkoutForm.css";

export const CheckoutForm = () => {
  const clearCart = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const backendUrl = "https://cnrccfwkit.us.aircode.run/payments";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      setErrorMessage(submitError.message);
      return;
    }

    const price = 12;
    const res = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "usd",
        email: emailInput,
        amount: price * 100,
        paymentMethodType: "card",
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/cart`,
      },
    });

    if (error) {
      setErrorMessage(error.message || error.toString());
    } else {
      clearCart();
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
        className="px-4"
      >
        <div className="mb-3">
          <label htmlFor="email-input">Email</label>
          <div>
            <input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              type="email"
              id="email-input"
              placeholder="johndoe@gmail.com"
              className="input-field"
            />
          </div>
        </div>
        <div className="payment">
          <PaymentElement />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={!stripe || !elements}
        >
          PAY
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      <a
        href="/cart"
        style={{
          borderColor: "black !important",
          textAlign: "center",
          color: "black",
        }}
      >
        <h5>← BACK TO CART</h5>
      </a>
    </div>
  );
};
