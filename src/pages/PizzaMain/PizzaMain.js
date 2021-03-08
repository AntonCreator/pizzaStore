import React from "react";
import {connect} from "react-redux";

import {fetchPizza, loadPizza} from "../../actions/actions";
import {getPizzas} from "../../selectors"
import RenderPizza from "./pizzaCard";


class PizzaMain extends React.Component {

  constructor (props) {
    super (props)
  }
  
  componentDidMount() {
    this.props.fetchPizza()
  }

  render () {
    const {pizzas} = this.props
    return (

      <div>
      <div className = "row">
        {pizzas.map((pizza,index) => (<RenderPizza pizza = {pizza} index = {index}/>))}
      </div>
      <div className = "row">
        <div className = "col-md-12">
          <button onClick = {this.props.loadPizza} className = "btn btn-primary btn-block load-btn">
            load more ...
          </button>
        </div>
      </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  pizzas : getPizzas(state)
})
const mapDispatchToProps = { fetchPizza, loadPizza }

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMain);