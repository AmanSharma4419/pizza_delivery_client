import axios from "axios";

import {
  ITEM_TO_CART_SENT,
  ITEM_TO_CART_SENT_FAILED,
  ITEM_TO_CART_SENT_SUCCESS,
} from "./actionTypes";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const itemAddToCart = (itemData) => {
  return async (dispatch) => {
    dispatch({ type: ITEM_TO_CART_SENT });
    try {
      const response = await axios.post(
        `${BASE_URL}/api/cart/add-item-cart`,
        itemData,
        { withCredentials: true }
      );
      if (response) {
        return dispatch({
          type: ITEM_TO_CART_SENT_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: ITEM_TO_CART_SENT_FAILED,
        payload: error.message,
      });
    }
  };
};

export const cartItemList = () => {
  return async (dispatch) => {
    dispatch({ type: ITEM_TO_CART_SENT });
    try {
      const response = await axios.get(`${BASE_URL}/api/cart/item-list-cart`, {
        withCredentials: true,
      });
      if (response) {
        return dispatch({
          type: ITEM_TO_CART_SENT_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: ITEM_TO_CART_SENT_FAILED,
        payload: error.message,
      });
    }
  };
};
