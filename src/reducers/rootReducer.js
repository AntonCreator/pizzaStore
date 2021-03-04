
import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import pizzaReducer from "./pizzaReducer";


export default createRootReducer = (history) => combineReducers ({
  pizzaReducer,
  router : connectRouter(history)


})