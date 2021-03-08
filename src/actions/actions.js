import {FETCH_PIZZA_START,
        FETCH_PIZZA_SUCCESS,
        FETCH_PIZZA_ERR,
        LOAD_PIZZA_START,
        LOAD_PIZZA_SUCCESS,
        LOAD_PIZZA_ERR} from "./actionTypes"
import {fetchPizzaData as fetchPizzaApi,
        loadPizzaData as loadPizzaApi} from "../api/pizzaApi"

export const fetchPizza = () => async (dispatch) => {
  const limit = 9;
  dispatch({
    type : FETCH_PIZZA_START
  })
  try {
    const pizza = await fetchPizzaApi(limit)
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
let offset = 9
export const loadPizza = () => async (dispatch) => {
  
  offset += 9
  if (offset > 28) {
    document.querySelector(".load-btn").style.display = "none"
   
  } 
    
  dispatch({
    type : LOAD_PIZZA_START
  })
  try {
    const pizzas = await loadPizzaApi(offset)
    dispatch ({
      type : LOAD_PIZZA_SUCCESS,
      payload : pizzas
    })

  } catch (err) {
    dispatch ({
      type : LOAD_PIZZA_ERR,
      payload : err,
      err : true
    })
  }
  
}
  
