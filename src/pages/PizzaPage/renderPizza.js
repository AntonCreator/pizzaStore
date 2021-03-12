import React from "react";

const RenderPizzaPage = ({pizzaInfo}) =>
{ 
  return ( 
<div className = "row">
  <div className = "col-md-8">
  <img src = {pizzaInfo.image} alt = {pizzaInfo.name}/>
  </div>
  <div className = "col-md-4 info-column">
    <div className = "container">
    <ul> <h4>Contains :</h4>
    {pizzaInfo.contain.map((ingredient,index) => <li className = "engridient" key = {index}>{ingredient}</li>)}
    </ul>

    </div>
    <div className = "container ">
      <h4> Weight : {pizzaInfo.weight}</h4>
      
    </div>
  </div>

</div> 


)}

export default RenderPizzaPage