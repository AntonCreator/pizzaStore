import {FETCH_PIZZA_BY_ID_SUCCESS, 
        FETCH_PIZZA_SUCCESS,
        LOAD_PIZZA_SUCCESS, 
        SEARCH_PIZZA_BY_NAME_SUCCESS,
        FETCH_PIZZA_CATEGORIES_INF_SUCCESS} from "../actions/actionTypes";

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
    case SEARCH_PIZZA_BY_NAME_SUCCESS :
      const searchedPizzas = R.indexBy(R.prop("id"), payload)
      return R.merge(state, searchedPizzas)
    case FETCH_PIZZA_CATEGORIES_INF_SUCCESS : 
      const catigoryPizza = R.indexBy(R.prop("id"), payload)
      return R.merge(state, catigoryPizza)
    default : return state;

  }
 
}