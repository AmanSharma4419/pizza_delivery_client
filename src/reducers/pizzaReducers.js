const initialState = {
  allPizzaDataInfo: [],
  error: "",
  loading: false,
};

export const getAllPizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        ...state,
        loading: false,
        allPizzaDataInfo: [...action.payload],
      };
    case "GET_PIZZAS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
