import axios from "axios";
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILED,
} from "./actionTypes";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllPizzas = ({ limit, page }) => {
  return async (dispatch) => {
    dispatch({ type: GET_PIZZAS_REQUEST });
    try {
      const response = await axios.get(
        `${BASE_URL}/api/pizza/get-pizzas?limit=${limit}&page=${page}`,
        {
          withCredentials: true,
        }
      );
      if (response) {
        return dispatch({
          type: GET_PIZZAS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      return dispatch({ type: GET_PIZZAS_FAILED, payload: error.message });
    }
  };
};
