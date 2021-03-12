import React from "react";

import Cart from "./cart";
import Search from "./search";

const Sidebar = () => {
  return (
    
    <div className = "sidebar">
      <div className = "container brand">
        <h4> Redux PIZZA</h4>
        <img className="round-logo" src = "/pizza-logo2.jpg" />
      </div>
      <hr></hr>
      <Cart />
      <hr></hr>
      <Search />
    </div>
    

  )
}

export default Sidebar