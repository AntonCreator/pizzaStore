import  {FETCH_PIZZA_SUCCESS, LOAD_PIZZA_SUCCESS} from "../actions/actionTypes";

import * as R from "ramda";

const initialState = { 
  ids : []
};
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PIZZA_SUCCESS :
      return R.merge(state, { ids : R.pluck("id",payload)})
    case LOAD_PIZZA_SUCCESS :
      return R.merge(state, { ids : R.pluck("id",payload)})

    default : return state;
  }
}