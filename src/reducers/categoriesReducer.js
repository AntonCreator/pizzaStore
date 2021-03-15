import * as R from "ramda";

import {FETCH_PIZZA_CATEGORIES_SUCCESS} from "../actions/actionTypes";

const initialState = {}

export default ( state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PIZZA_CATEGORIES_SUCCESS :
      const newCat = R.indexBy(R.prop("id"), payload)
      return R.merge(state, newCat)
    default : return state;
  }
}