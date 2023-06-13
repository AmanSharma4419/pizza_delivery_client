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

export const userRegister = (user, userProfileImg) => {
  return async (dispatch) => {
    dispatch({ type: REGISTERATION_REQUEST_SENT });
    try {
      const { name, email, password } = user;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avtar", userProfileImg);
      const response = await axios.post(
        `${BASE_URL}/api/user/add-user`,
        formData,
        {
          withCredentials: true,
        }
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
        user.loginFormData,
        {
          withCredentials: true,
        }
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
