import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {getPizzasWithCountInCart, getCartTotalPrice} from "../../selectors";
import {removePizzaFromCart, cleanCart, checkout} from "../../actions/actions";
import RenderCart from "./renderCart";

const CartPage = (props) => {
  const isCartEmpty = R.isEmpty(props.pizzasInCart)
  
  const renderSidebar = () => (
      <div className = "cartSidebar">
      
        <Link to = "/" className = "btn btn-block btn-outline-dark">
          Continue shopping
        </Link>
        {R.not(isCartEmpty) &&
        <div className = "btn-block" >
        <button onClick = {props.cleanCart}
                className = "btn btn-block btn-secondary">
          clear cart   <i className ="fa fa-minus-circle" aria-hidden = "true"></i>
        </button>
        <button onClick = {() => props.checkout(props.pizzasInCart)}
                className = "btn btn-block btn-success">
         Checkout   <i className ="fa fa-envelope" aria-hidden = "true"></i>
        </button>
        </div>}
      </div>
    )
  
    
  return( 
    
    <div className = "container-fluid cartfull">
      <div className = "container">
        <div className = "row">
          <div className = "col-md-9">
          <RenderCart total = {props.total}
                      pizzasInCart = {props.pizzasInCart}
                      removePizza = {props.removePizzaFromCart} />
          </div>
          <div className = "col-md-3">
            {renderSidebar()}
          </div>
        </div>
      </div>
    </div>
     
  )
}


const mapStateToProps = (state) => {
  return{
  total : getCartTotalPrice(state),
  pizzasInCart : getPizzasWithCountInCart(state)
}}

const mapDispatchToProps = {
  removePizzaFromCart,
  cleanCart, 
  checkout
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)