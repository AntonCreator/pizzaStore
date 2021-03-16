import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import {fetchPizzaById, cartAdd} from "../../actions/actions";
import {getPizzaByID} from "../../selectors"
import RenderPizzaPage from "./renderPizza";
import Cart from "../components/cart"

class PizzaPage extends React.Component {
  constructor(props) {
    super (props)
  }
  componentDidMount () {
    this.props.fetchPizzaById(this.props.match.params.id)
  }
  
  renderSidebar = () => {
    const {pizzaInfo, cartAdd} = this.props;
    return (
      <div>
        <h4>Quick shop </h4>
        <hr></hr>
        <Cart/>
        
        <hr></hr>
        <div className = "form-group">
        <h4 className = "containsName">{pizzaInfo.name}</h4>
        <h4 className = "containsName">{pizzaInfo.cost} $</h4>
        </div>
        <Link to = "/" className = "btn btn-block btn-outline-dark">
          Continue shopping
        </Link>
        <button onClick = {() => cartAdd(pizzaInfo.id)} className = "btn btn-block btn-warning">Add a cart</button>
      </div>

    ) 
  }
  
  render () {
    const {pizzaInfo} = this.props
    
    return (
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-md-9 col-lg-9"> {pizzaInfo &&<RenderPizzaPage pizzaInfo = {pizzaInfo}/>}
          </div>
          <div className = "col-md-3 col-lg-3">{pizzaInfo &&this.renderSidebar()}</div>
          
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {return {pizzaInfo : getPizzaByID(state, state.pizzaPageReducer.id)}
}
const mapDispatchToProps = {fetchPizzaById , cartAdd}
export default connect( mapStateToProps, mapDispatchToProps)(PizzaPage)