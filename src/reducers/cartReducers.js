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
} from "../actions/actionTypes";

const initialState = {
  itemAddedToCart: [],
  error: "",
  loading: false,
  cartItemsList: [],
  deletedItemFromCart: [],
  updatedQuantityInCart: [],
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
        cartItemsList: action.payload,
      };
    case VIEW_CART_DATA_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_ITEM_FROM_CART_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ITEM_FROM_CART_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedItemFromCart: [action.payload],
      };
    case DELETE_ITEM_FROM_CART_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ITEM_QUANTITY_CHANGE_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };
    case ITEM_QUANTITY_CHANGE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedQuantityInCart: [action.payload],
      };
    case ITEM_QUANTITY_CHANGE_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
