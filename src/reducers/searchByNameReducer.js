import * as R from "ramda";

import {SEARCH_PIZZA_BY_NAME_SUCCESS} from "../actions/actionTypes"

const initialState = {
  ids : []
}

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case SEARCH_PIZZA_BY_NAME_SUCCESS :
      return R.merge(state,{ids : R.pluck("id", payload)})
    default : return state
  }
}