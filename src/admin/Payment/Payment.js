import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_strip_Publishable_Key);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Payment for {treatment}</h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          Please pay ${price}.00 for your appointment on {appointmentDate} at{" "}
          {slot}
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
