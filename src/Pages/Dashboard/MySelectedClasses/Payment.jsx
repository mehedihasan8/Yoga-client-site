import React from "react";
import ChekeOutFrom from "./ChekeOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useParams } from "react-router-dom";
// const stripePromise = loadStripe(import.meta.env.VITEI_Payment_Gateway_PK);
const stripePromise = loadStripe(
  "pk_test_51NHNrxFZFG6tQRNirXxNiIIvIcHl51LBy5HJxePDJG3ul6a8LEcQ89vAkqQET61FScRby9wVYkiTYz9B5DWwygBT00Q74Iy1sD"
);

// console.log(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();

  const price = location.state;
  console.log(price);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:my-10">payment here</h1>
      <Elements stripe={stripePromise}>
        <ChekeOutFrom price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
