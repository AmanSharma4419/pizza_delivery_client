import axios from "axios";

import {
  ORDER_PAYMENT_REQUEST_SENT,
  ORDER_PAYMENT_REQUEST_SUCCESS,
  ORDER_PAYMENT_REQUEST_FAILED,
} from "./actionTypes";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const placeOrderPayment = ({ token, totalAmt, cartItemsIds }) => {
  return async (dispatch) => {
    dispatch({ type: ORDER_PAYMENT_REQUEST_SENT });
    try {
      const response = await axios.post(
        `${BASE_URL}/api/cart/order-payment`,
        { token: token, totalAmt: totalAmt, cartItemsIds: cartItemsIds },
        {
          withCredentials: true,
        }
      );
      if (response) {
        return dispatch({
          type: ORDER_PAYMENT_REQUEST_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: ORDER_PAYMENT_REQUEST_FAILED,
        payload: error.message,
      });
    }
  };
};
