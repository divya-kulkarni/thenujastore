import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../pages/checkoutForm";

type Props = {};

const Checkout = (props: Props) => {
  const stripePromise = loadStripe(
    "pk_test_51OnwizGrcxMydgOeWsFvEs13vfgd7VzMlaSqnWzI9jsER4LmqPUkaGk3gaCc93x3qEjLZ8QbFfjfcbRN5pdVUfHG00uZv2HEQJ"
  );

  const options = {
    mode: "payment" as const,
    amount: 1099,
    currency: "usd",
  };

  return (
    <div className="flex container mt-8">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
