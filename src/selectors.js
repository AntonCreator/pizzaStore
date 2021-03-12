import * as R from "ramda"

export const getPizzaByID = (state,id) => R.prop(id,state.pizzaReducer)

export const getPizzas = (state) => 
{const pizzas = R.map(id => getPizzaByID(state,id),state.pizzaMainPageIndexReducer.ids)
  return pizzas }

export const getCartCount = (state) => R.length(state.addCartReducer)

export const getCartTotalPrice = (state) => {
  const totalCartPrice = R.compose(
  R.sum,
  R.pluck("cost"),
  R.map(id => getPizzaByID(state,id))
)(state.addCartReducer)

return totalCartPrice
}