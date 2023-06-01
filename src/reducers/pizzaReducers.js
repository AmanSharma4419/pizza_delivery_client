const initialState = {};
export const getAllPizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        ...state,
      };
    case "GET_PIZZAS_FAILED":
      return {
        ...state,
      };
    default:
      return state;
  }
};
