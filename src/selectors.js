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

export const getSearchedPizzas = (state) => 
{const searchedPizzas = R.map(id => getPizzaByID(state,id),state.searchByNameReducer.ids)
  return searchedPizzas }

export const getSearchedNameLength = (state) => {
  const length = R.length(state.searchByNameReducer.ids)
  return length
}

export const getPizzasWithCountInCart = (state) => {
  const uniqItems = R.uniq(state.addCartReducer)
  const count = (id) => R.compose(
      R.length,
      R.filter(cartId => R.equals(id,cartId))
    )(state.addCartReducer)
  

  const addCount = (item) => R.assoc("count", count(item.id), item)

  const pizzasWithCount = R.compose(
      R.map(addCount),
      R.map(id => getPizzaByID(state,id))
    )(uniqItems)
  
  return pizzasWithCount
}  

export const getCategories = (state) => {
  return R.values(state.categoriesReducer)
}

export const getCategoriesPizzas = (state) => 
{const pizzasCaty = R.map(id => getPizzaByID(state,id),state.categoriesPageIdsReducer.ids)
  return pizzasCaty }

export const getActiveCategory = (ownProps) => {
  return R.path(["match","params","id"], ownProps)
}