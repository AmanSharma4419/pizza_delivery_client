import axios from "axios";

export const getAllPizzas = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
      const response = await axios.get("api/pizzas/getpizzas");
      if (response) {
        return dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
      }
    } catch (error) {
      console.log(error.message);
      return dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
    }
  };
};
