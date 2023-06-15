import {
  REGISTERATION_REQUEST_SENT,
  REGISTERATION_SUCCESS,
  REGISTERATION_FAILED,
  LOGIN_REQUEST_SENT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionTypes";

const initialState = {
  user: [],
  error: "",
  loading: false,
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERATION_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };

    case REGISTERATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case REGISTERATION_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGIN_REQUEST_SENT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
