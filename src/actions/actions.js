import {FETCH_PIZZA_START,
        FETCH_PIZZA_SUCCESS,
        FETCH_PIZZA_ERR,
        LOAD_PIZZA_START,
        LOAD_PIZZA_SUCCESS,
        LOAD_PIZZA_ERR,
        FETCH_PIZZA_BY_ID_START,
        FETCH_PIZZA_BY_ID_SUCCESS,
        FETCH_PIZZA_BY_ID_ERR,
        ADD_PIZZA_TO_CART,
        SEARCH_PIZZA_BY_NAME_START,
        SEARCH_PIZZA_BY_NAME_ERR,
        SEARCH_PIZZA_BY_NAME_SUCCESS} from "./actionTypes"
import {fetchPizzaData as fetchPizzaApi,
        loadPizzaData as loadPizzaApi,
        fetchPizzaById as fetchPizzaByIdApi,
        searchPizzaByName as searchPizzaByNameApi} from "../api/pizzaApi";

import {getPizzaByID} from "../selectors";
import * as R from "ramda";

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

export const fetchPizzaById = (id) => async (dispatch) => {
  
  dispatch({
    type : FETCH_PIZZA_BY_ID_START
  })

  try { 
    
    const index = await fetchPizzaByIdApi(id)
    dispatch ({
      type : FETCH_PIZZA_BY_ID_SUCCESS,
      payload : index
    })
  } catch (err) {
    dispatch ({
      type : FETCH_PIZZA_BY_ID_ERR,
      payload : err,
      err : true
    })
  }
}

export const cartAdd = (id) => (dispatch) => {
  dispatch ({
    type : ADD_PIZZA_TO_CART,
    payload : id
  })
}

export const searchPizzaByName = (name) => async (dispatch) => {
  
  dispatch({
    type : SEARCH_PIZZA_BY_NAME_START
  })

  try { 
    
    const search = await searchPizzaByNameApi(name)
    dispatch ({
      type : SEARCH_PIZZA_BY_NAME_SUCCESS,
      payload : search
    })
  } catch (err) {
    dispatch ({
      type : SEARCH_PIZZA_BY_NAME_ERR,
      payload : err,
      err : true
    })
  }
}
