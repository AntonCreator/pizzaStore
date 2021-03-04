import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import pizzaReducer from "./pizzaReducer";

export default (history) => combineReducers ({
  pizzaReducer,
  router : connectRouter(history)
})