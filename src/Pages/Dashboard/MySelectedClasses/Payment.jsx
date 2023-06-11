import ChekeOutFrom from "./ChekeOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { NavLink, useLocation } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51NHNrxFZFG6tQRNirXxNiIIvIcHl51LBy5HJxePDJG3ul6a8LEcQ89vAkqQET61FScRby9wVYkiTYz9B5DWwygBT00Q74Iy1sD"
);

const Payment = () => {
  const location = useLocation();

  const selected = location.state;

  return (
    <div className=" mt-20">
      <h1 className="text-4xl font-bold text-center lg:my-10">Payment here</h1>
      <Elements stripe={stripePromise}>
        <ChekeOutFrom selected={selected} />
      </Elements>

      <div className="max-w-lg mx-auto text-center mt-10">
        <NavLink to="/dashbord/MyEnrolMentClasses">
          <button className="btn text-center text-white bg-gradient-to-r from-indigo-500 to-purple-500 ">
            view you Enrolled class
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Payment;
