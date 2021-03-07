import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import pizzaReducer from "./pizzaReducer";
import pizzaMainPageIndexReducer from "./pizzaMainPageIndexReducer"

export default (history) => combineReducers ({
  pizzaReducer,
  pizzaMainPageIndexReducer,
  router : connectRouter(history)
})