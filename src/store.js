import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";

import { getAllPizzaReducer } from "./reducers/pizzaReducers";
import { userAuthReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderPaymentReducer } from "./reducers/paymentReducer";

const parentReducer = combineReducers({
  getAllPizzaReducer,
  userAuthReducer,
  cartReducer,
  orderPaymentReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  parentReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
