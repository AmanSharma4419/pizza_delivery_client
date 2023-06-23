import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payment = ({ totalAmt }) => {
  const handleStripeToken = (token) => {
    // In Progress
  };

  return (
    <>
      <div>
        <StripeCheckout
          amount={totalAmt * 100}
          shippingAddress
          token={handleStripeToken}
          stripeKey={process.env.REACT_APP_STRIPE_PAYMENT_KEY}
          currency="INR"
        >
          <button className="px-6 py-2 mt-4 text-white text-right rounded-sm bg-red-600">
            Pay Now
          </button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default Payment;
