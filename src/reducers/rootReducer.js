import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import pizzaReducer from "./pizzaReducer";
import pizzaMainPageIndexReducer from "./pizzaMainPageIndexReducer"
import pizzaPageReducer from "./pizzaPageReducer"
import addCartReducer from "./addCartReducer";

export default (history) => combineReducers ({
  
  pizzaReducer,
  pizzaPageReducer,
  pizzaMainPageIndexReducer,
  addCartReducer,
  router : connectRouter(history)
})