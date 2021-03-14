import {ADD_PIZZA_TO_CART,
        REMOVE_PIZZA_FROM_CART,
        CLEAN_CART} from "../actions/actionTypes"
import * as R from "ramda";

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PIZZA_TO_CART :
      return R.append(payload, state)
    case REMOVE_PIZZA_FROM_CART :
      return R.without(R.of(payload),state)
    case CLEAN_CART :
      return initialState
    default: return state  
  }
}