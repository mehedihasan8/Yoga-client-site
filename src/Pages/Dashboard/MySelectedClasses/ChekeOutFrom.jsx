import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const ChekeOutFrom = ({ price }) => {
  const [errors, setErrors] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  console.log("client ", clientSecret);

  //   useEffect(() => {
  //     axiosSecure.post("/create-payment-intent", { price }).then((res) => {
  //       console.log(res.data.clientSecret);
  //       setClientSecret(res.data.clientSecret);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         if (price > 0) {
  //           const response = await axiosSecure.post("/create-payment-intent", {
  //             price,
  //           });
  //           const { clientSecret } = response.data;
  //           console.log(clientSecret);
  //           setClientSecret(clientSecret);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching client secret:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log("insart the card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrors(error.message);
    } else {
      setErrors("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
  };
  return (
    <form className="w-2/4 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500 text-center ">{errors}</p>
      <div className="text-center mt-4">
        <button
          className="btn btn-info"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default ChekeOutFrom;
