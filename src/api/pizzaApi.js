import pizzaData from "./pizzaData"

export const fetchPizzaData = async (limit) => {

  return new Promise((resolve,reject) => {
    resolve(pizzaData.slice(0,limit))
  })
}

export const loadPizzaData = async (offset) => {
  
  return new Promise((resolve,reject) => {
    resolve(pizzaData.slice(0, offset))
  })
}