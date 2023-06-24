import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { placeOrderPayment } from "../actions/paymentAction";
import { useDispatch, useSelector } from "react-redux";
import { BiLoader } from "react-icons/bi";

const Payment = ({ totalAmt, cartItems }) => {
  const dispatch = useDispatch();

  const cartItemsIds = cartItems && cartItems.map((item) => item._id);
  const handleStripeToken = (token) => {
    dispatch(placeOrderPayment({ token, totalAmt, cartItemsIds }));
  };

  const orderPaymentInfo = useSelector((state) => state.orderPaymentReducer);
  const { loading, isPaymentSuccess } = orderPaymentInfo;
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
          {loading ? (
            <button className="px-6 py-2 mt-4 text-white text-right rounded-sm bg-red-600">
              <BiLoader className="h-7 w-14" />
            </button>
          ) : isPaymentSuccess ? (
            <div className="h-10 mt-10 border bg-blend-darken p-2 shadow-xl  animate-bounce ">
              {"Your order placed successfully"}
            </div>
          ) : (
            <button className="px-6 py-2 mt-4 text-white text-right rounded-sm bg-red-600">
              Pay Now
            </button>
          )}
        </StripeCheckout>
      </div>
    </>
  );
};

export default Payment;
