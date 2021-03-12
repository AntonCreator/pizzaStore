import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getCartCount, getCartTotalPrice} from "../../selectors";

const Cart = (props) => {
  return (
    <div className = "cart align-middle">
      <div className = "dropdown">
        <Link to = "/cart" className = "btn btn-block btn-warning btn-lg">
          <i className = "fas fa-shopping-cart" />
          <span>{props.cartTotalItems} pizza(s) - {props.cartTotalPrice} $</span>
        </Link>
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