import {
  ITEM_TO_CART_SENT,
  ITEM_TO_CART_SENT_FAILED,
  ITEM_TO_CART_SENT_SUCCESS,
  VIEW_CART_DATA_REQUEST_SENT,
  VIEW_CART_DATA_REQUEST_SUCCESS,
  VIEW_CART_DATA_REQUEST_FAILED,
} from "../actions/actionTypes";

const initialState = {
  itemAddedToCart: [],
  error: "",
  loading: false,
  cartItemsList: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_TO_CART_SENT:
      return {
        ...state,
        loading: true,
      };
    case ITEM_TO_CART_SENT_SUCCESS:
      return {
        ...state,
        loading: false,
        itemAddedToCart: action.payload,
      };
    case ITEM_TO_CART_SENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case VIEW_CART_DATA_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };
    case VIEW_CART_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        itemAddedToCart: action.payload,
      };
    case VIEW_CART_DATA_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
