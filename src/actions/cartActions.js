import axios from "axios";

import {
  ITEM_TO_CART_SENT,
  ITEM_TO_CART_SENT_FAILED,
  ITEM_TO_CART_SENT_SUCCESS,
  VIEW_CART_DATA_REQUEST_SENT,
  VIEW_CART_DATA_REQUEST_SUCCESS,
  VIEW_CART_DATA_REQUEST_FAILED,
  DELETE_ITEM_FROM_CART_REQUEST_SENT,
  DELETE_ITEM_FROM_CART_REQUEST_SUCCESS,
  DELETE_ITEM_FROM_CART_REQUEST_FAILED,
  ITEM_QUANTITY_CHANGE_REQUEST_SENT,
  ITEM_QUANTITY_CHANGE_REQUEST_SUCCESS,
  ITEM_QUANTITY_CHANGE_REQUEST_FAILED,
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

export const cartItemList = (id) => {
  return async (dispatch) => {
    dispatch({ type: VIEW_CART_DATA_REQUEST_SENT });
    try {
      const response = await axios.get(
        `${BASE_URL}/api/cart/item-list-cart/${id}`,
        {
          withCredentials: true,
        }
      );
      if (response) {
        return dispatch({
          type: VIEW_CART_DATA_REQUEST_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: VIEW_CART_DATA_REQUEST_FAILED,
        payload: error.message,
      });
    }
  };
};

export const removeCartItem = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_ITEM_FROM_CART_REQUEST_SENT });
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/cart/remove-cart-item/${id}`,
        {
          withCredentials: true,
        }
      );
      if (response) {
        return dispatch({
          type: DELETE_ITEM_FROM_CART_REQUEST_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: DELETE_ITEM_FROM_CART_REQUEST_FAILED,
        payload: error.message,
      });
    }
  };
};

export const changeCartItemQuantity = (item) => {
  return async (dispatch) => {
    dispatch({ type: ITEM_QUANTITY_CHANGE_REQUEST_SENT });
    try {
      const { quantity, price, id, value } = item;
      const itemPrice = value * price;
      const response = await axios.post(
        `${BASE_URL}/api/cart/item-quantity-change?quantity=${quantity}&price=${itemPrice}&itemId=${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response) {
        return dispatch({
          type: ITEM_QUANTITY_CHANGE_REQUEST_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({
        type: ITEM_QUANTITY_CHANGE_REQUEST_FAILED,
        payload: error.message,
      });
    }
  };
};
