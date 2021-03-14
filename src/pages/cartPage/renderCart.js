import React from "react";
import * as R from "ramda";

const RenderCart = ({total, pizzasInCart,...props}) => {
  const isCartEmpty = R.isEmpty(pizzasInCart)
  return(
    <div>
    <div className = "table-responsive">
      <table className="table table-hover">
        <thead className = "thead-dark">
          <tr>
            <th>#</th>
            <th></th>
            <th>pizza`s name</th>
            <th>cost</th>
            <th>count</th>
            <th></th>
            </tr>
        </thead>
        <tbody> 
          {pizzasInCart.map((pizza, index) =>  (
            <tr key = {index}>
            <th scope="row">{pizza.id}</th>
            <td className = "first-column-checout">
              <img src = {pizza.image}
                    alt = {pizza.name} />
            </td>
            <td>{pizza.name}</td>
            <td>{pizza.cost} $</td>
            <td>{pizza.count}</td>
            <td><button onClick = {() => props.removePizza(pizza.id)}
                        className = "btn btn-outline-dark">
              <i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>
          ))}
       
         </tbody>
      </table>
    </div>
     {
      R.not(isCartEmpty) && 
      <div className = "row">
        <div className = "offset-md-9 col-md-3">
        <h5 className = "textTotal" >Total : {total} $ </h5>
        </div>
      </div>
    
    }
    </div>

  )
}

export default RenderCart