import {FETCH_PIZZA_SUCCESS} from "../actions/actionTypes";

import * as R from "ramda"

const initialState = {}

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case FETCH_PIZZA_SUCCESS :
      const ownPizzas = R.indexBy(R.prop("id"), payload)
      return R.merge(state, ownPizzas)
    
    default : return state;
 
  }
 
}