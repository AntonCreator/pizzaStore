import React from "react";
import {Link} from "react-router-dom";

const RenderPizza = ({pizza, index}) => {
  return( 
  
    <div className="card col-sm-6 col-lg-4" key = {index}>
      <img className="card-img-top" src={pizza.image} />
      <div className="card-body">
        <h4 className="card-title">{pizza.name}</h4>
        <h5> cost : {pizza.cost}</h5> 
          <p className ="card-text">
          <button className = "btn btn-warning">
           🛒
           </button>
          <Link to = {`/pizzas/${pizza.id}`}>
          <button className = "btn btn-success">See more</button>
          </Link>
          </p>
      </div>
    </div>    
    )
  }
export default RenderPizza