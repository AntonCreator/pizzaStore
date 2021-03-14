import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getCartCount, getCartTotalPrice} from "../../selectors";

const Cart = (props) => {
  return (
    <div className = "cart">
      <div className = "cart-container">
        <Link to = "/cart" className = "btn btn-outline-dark btn-block cart-link">
          <span className = "cart-text">{props.cartTotalItems} pizza(s) - {props.cartTotalPrice} $</span>
        </Link>
        <img className = "cart-back" src = "/cart-back.jpg"/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartTotalItems : getCartCount(state),
    cartTotalPrice : getCartTotalPrice(state)
  }
}

export default connect(mapStateToProps, null)(Cart)