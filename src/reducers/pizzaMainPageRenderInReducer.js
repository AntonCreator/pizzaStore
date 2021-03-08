import  {FETCH_PIZZA_SUCCESS,LOAD_MORE_PIZZA} from "../actions/actionTypes";

import * as R from "ramda";
const offset = 9;
const initialState = { 
  ids : []
};
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PIZZA_SUCCESS :
      return R.merge(state, { ids : (R.pluck("id",payload)).slice(0,offset) })
    case LOAD_MORE_PIZZA :
      offset += 9;
      return R.merge(state, { ids : (R.pluck("id",payload)).slice(0,offset) })

    default : return state;
  }
}