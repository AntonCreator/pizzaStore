import React from "react";
import {Switch, Route} from "react-router";

import PizzaMain from "./pages/PizzaMain/PizzaMain";
import PizzaPage from "./pages/PizzaPage/pizzaPage";
import Cart from "./pages/components/cart";
import SearchName from "./pages/searchByName/searchByName";

export default (
  <Switch>
    <Route path = "/" component = {PizzaMain} exact/>
    <Route path = "/pizzas/:id" component = {PizzaPage} exact/>
    <Route path = "/cart" component = {Cart} />
    <Route path = "/searchingName" component = {SearchName} />
  </Switch>
)

