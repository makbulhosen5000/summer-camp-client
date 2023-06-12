import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../SectionTitle/SectionTitle";



const Payment = () => {

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="m-5">
      <SectionTitle
        title="Payment"
        subTitle="All About Payment Process"
      />
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
