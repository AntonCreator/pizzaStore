import * as R from "ramda"

export const getPizzaByID = (state,id) => R.prop(id,state.pizzaReducer)

export const getPizzas = (state) => 
{const pizzas = R.map(id => getPizzaByID(state,id),state.pizzaMainPageIndexReducer.ids)
  return pizzas }
