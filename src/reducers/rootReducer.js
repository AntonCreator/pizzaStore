import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import pizzaReducer from "./pizzaReducer";
import pizzaMainPageIndexReducer from "./pizzaMainPageIndexReducer"
import pizzaPageReducer from "./pizzaPageReducer"
import addCartReducer from "./addCartReducer";
import searchByNameReducer from "./searchByNameReducer";
import categoriesReducer from "./categoriesReducer";
import categoriesPageIdsReducer from "./categoryPageIdsReducer";

export default (history) => combineReducers ({
  
  pizzaReducer,
  pizzaPageReducer,
  pizzaMainPageIndexReducer,
  addCartReducer,
  searchByNameReducer,
  categoriesReducer,
  categoriesPageIdsReducer,
  router : connectRouter(history)
})