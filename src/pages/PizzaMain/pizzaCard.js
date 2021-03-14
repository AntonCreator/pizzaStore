import React from "react";
import {Link} from "react-router-dom";

const RenderPizza = ({pizza, index, ...props}) => {
  return( 
  
    <div className="card col-sm-6 col-lg-4" >
      <img className="card-img-top" src={pizza.image} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <h5> cost : {pizza.cost} $</h5> 
          <p className ="card-text">
          <button onClick = {() => props.cartAdd(pizza.id)} className = "btn btn-warning">
           🛒
           </button>
          <Link to = {`/pizzas/${pizza.id}`}>
          <button className = "btn btn-secondary">See more</button>
          </Link>
          </p>
      </div>
    </div>    
    )
  }

export default RenderPizza