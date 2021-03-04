import {FETCH_PIZZA_START,FETCH_PIZZA_SUCCESS,FETCH_PIZZA_ERR} from "./actionTypes"

export const fetchPizza = () => async (dispatch) => {
  dispatch({
    type : FETCH_PIZZA_START
  })
  try {
    const pizza = await fetchPizzaApi()
    dispatch ({
      type : FETCH_PIZZA_SUCCESS,
      payload : pizza
    })

  } catch (err) {
    dispatch ({
      type : FETCH_PIZZA_ERR,
      payload : err,
      err : true
    })
  }
  


}
