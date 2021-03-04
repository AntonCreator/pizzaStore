import React from "react";
import {Switch, Route} from "react-router";

import PizzaMain from "../PizzaMain/PizzaMain";

const routes = (
  <Switch>
    <Route path = "/" component = {PizzaMain} exact/>
  </Switch>
)

class Main extends React.Component {

  constructor (props) {
    super (props)
  }

  render () {

    return (
      
      <div>{routes}</div>

    )
  }
}

export default Main