import pizzaData from "./pizzaData"

export const fetchPizzaData = async () => {

  return new Promise((resolve,reject) => {
    resolve(pizzaData)
  })
}