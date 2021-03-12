import pizzaData from "./pizzaData"
import * as R from "ramda"

export const fetchPizzaData = async (limit) => {
  return new Promise((resolve, reject) => {
    resolve(pizzaData.slice(0, limit))
  })
}

export const loadPizzaData = async (offset) => {
  return new Promise((resolve, reject) => {
    resolve(pizzaData.slice(0, offset))
  })
}

export const fetchPizzaById = async (id) => {
  return new Promise((resolve, reject) => {
    const PizzaInf = R.find(R.propEq("id", id), pizzaData)
    resolve(PizzaInf)
  })
}
