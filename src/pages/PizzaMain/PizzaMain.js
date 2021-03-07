import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import {fetchPizza} from "../../actions/actions";
import {getPizzas} from "../../selectors"


class PizzaMain extends React.Component {

  constructor (props) {
    super (props)
  }
  
  componentDidMount() {
    this.props.fetchPizza()
  }

  renderPizza = (pizza, index) => {
    return( 
    
      <div className="card col-sm-6 col-lg-4" key = {index}>
      <img className="card-img-top" src={pizza.image} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4>
        <h5> cost : {pizza.cost}</h5>
        <p className ="card-text">
        <button className = "btn btn-warning">
         Add a cart 🛒
        </button>
       <Link to = {`/pizzas/${pizza.id}`}>
       <button className = "btn btn-success">See more</button>
       </Link>
        </p>
      </div>
</div>    
      )
    }

  

  render () {
    const {pizzas} = this.props
    return (

      <div className = "books row">
        {pizzas.map((pizza,index) => this.renderPizza(pizza,index))}
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  pizzas : getPizzas(state)
})
const mapDispatchToProps = { fetchPizza }

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMain);