import {
  REGISTERATION_REQUEST_SENT,
  REGISTERATION_SUCCESS,
  REGISTERATION_FAILED,
} from "../actions/actionTypes";

const initialState = {
  user: [],
  error: "",
  loading: false,
};

export const userRegisterReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
