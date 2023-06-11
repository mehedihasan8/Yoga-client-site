import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ChekeOutFrom = ({ selected }) => {
  const { price, image, instructorName, yogaName, _id, classId } = selected;
  // console.log(price);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [processing, setProcessing] = useState(false);
  const [transitionId, setTransitionId] = useState("");

  // console.log(transitionId);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
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
    setProcessing(true);
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

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent.id);
      setSuccess(`Your Payment Success your id ${paymentIntent.id}`);
      // Swal.fire("Good payment complite!", "You clicked the button!", "success");
      const history = {
        image,
        instructorName,
        yogaName,
        _id,
        classId,
        email: user?.email,
        payment: "paid",
        transitionId: paymentIntent.id,
      };

      axiosSecure.post("/payment", history).then((res) => {
        setTransitionId(paymentIntent.id);
        if (res.data.insertedId) {
          axiosSecure.delete(`/selectedClass/${_id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Good payment complite!",
                "You clicked the button!",
                "success"
              );
            }
          });
        }
      });
    }
  };
  return (
    // <form className="w-2/4 mx-auto " onSubmit={handleSubmit}>
    //   <CardElement
    //     options={{
    //       style: {
    //         base: {
    //           fontSize: "16px",
    //           color: "#424770",
    //           "::placeholder": {
    //             color: "#aab7c4",
    //           },
    //         },
    //         invalid: {
    //           color: "#9e2146",
    //         },
    //       },
    //     }}
    //   />
    //   <p className="text-red-500 text-center ">{errors}</p>
    //   <p className="text-green-600 text-center ">{success}</p>
    //   <div className="text-center mt-4">
    //     <button
    //       className="btn btn-info"
    //       type="submit"
    //       disabled={!stripe || !clientSecret || processing}
    //     >
    //       Pay
    //     </button>
    //   </div>
    // </form>

    <form className="max-w-lg mx-auto " onSubmit={handleSubmit}>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-4 text-center ">
            Card Details
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#ffffff",
                  "::placeholder": {
                    color: "#cbd5e0",
                  },
                },
                invalid: {
                  color: "#e53e3e",
                },
              },
            }}
          />
        </div>
        <p className="text-red-500 text-center mb-2">{errors}</p>
        <p className="text-green-600 text-center mb-4">{success}</p>
        <div className="text-center">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            {processing ? "processing...." : "Pay"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChekeOutFrom;
