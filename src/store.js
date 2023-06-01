import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";

import { getAllPizzaReducer } from "./reducers/pizzaReducers";

const parentReducer = combineReducers({
  getAllPizzaReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  parentReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
