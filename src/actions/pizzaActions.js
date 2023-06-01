import axios from "axios";

export const getAllPizzas = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
      const response = await axios.get(
        "http://localhost:7000/api/pizza/get-pizzas"
      );
      if (response) {
        return dispatch({
          type: "GET_PIZZAS_SUCCESS",
          payload: response.data.data,
        });
      }
    } catch (error) {
      return dispatch({ type: "GET_PIZZAS_FAILED", payload: error.message });
    }
  };
};
