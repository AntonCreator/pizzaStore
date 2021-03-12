import {FETCH_PIZZA_BY_ID_SUCCESS, FETCH_PIZZA_SUCCESS, LOAD_PIZZA_SUCCESS} from "../actions/actionTypes";

import * as R from "ramda"

const initialState = {}

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case FETCH_PIZZA_SUCCESS :
      const ownPizzas = R.indexBy(R.prop("id"), payload)
      return R.merge(state, ownPizzas)
    case LOAD_PIZZA_SUCCESS :
      const loadedPizzas = R.indexBy(R.prop("id"), payload)
      return R.merge(state, loadedPizzas)
    case FETCH_PIZZA_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    default : return state;

  }
 
}