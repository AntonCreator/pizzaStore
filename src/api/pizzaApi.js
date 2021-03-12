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

export const searchPizzaByName = async (name) => {
  return new Promise((resolve, reject) => {
    const filterFunc = item => R.contains(name.toLowerCase(), (R.prop("name", item)).toLowerCase())
    const searchResult = R.filter(filterFunc,pizzaData)
    resolve(searchResult)
  })
}
