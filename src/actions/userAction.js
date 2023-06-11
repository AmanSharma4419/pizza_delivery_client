import axios from "axios";
import {
  REGISTERATION_REQUEST_SENT,
  REGISTERATION_SUCCESS,
  REGISTERATION_FAILED,
  LOGIN_REQUEST_SENT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "./actionTypes";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const userRegister = (user) => {
  return async (dispatch) => {
    dispatch({ type: REGISTERATION_REQUEST_SENT });
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/add-user`,
        user.signupFormData
      );
      if (response) {
        return dispatch({
          type: REGISTERATION_SUCCESS,
          payload: { data: response.data.data, status: response.status },
        });
      }
    } catch (error) {
      return dispatch({ type: REGISTERATION_FAILED, payload: error.message });
    }
  };
};

export const userLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST_SENT });
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/login-user`,
        user.loginFormData
      );
      if (response) {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: { data: response.data.data, status: response.status },
        });
      }
    } catch (error) {
      return dispatch({ type: LOGIN_FAILED, payload: error.message });
    }
  };
};
