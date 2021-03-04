import React from "react";
import {Switch, Route} from "react-router";

import PizzaMain from "../PizzaMain/PizzaMain"

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
      
      <div className = "container-fluid">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-3">Sidebar</div>
            <div className = "col-md-9">{routes}</div>
          </div>
        </div>
        </div>

    )
  }
}

export default Main