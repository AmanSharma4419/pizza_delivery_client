import {
  ORDER_PAYMENT_REQUEST_SENT,
  ORDER_PAYMENT_REQUEST_SUCCESS,
  ORDER_PAYMENT_REQUEST_FAILED,
} from "../actions/actionTypes";

const initialState = {
  isPaymentSuccess: false,
  isPaymentFailed: false,
  error: "",
  loading: false,
};

export const orderPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PAYMENT_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };
    case ORDER_PAYMENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isPaymentSuccess: true,
      };
    case ORDER_PAYMENT_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isPaymentFailed: true,
      };
    default:
      return state;
  }
};
