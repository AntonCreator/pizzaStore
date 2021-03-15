import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import {getCategories} from "../../selectors";

const Categories = ({categories}) => {
  
  return (
    <div className = "well categoriesList">
      <h4 className = "catTitle">Pizza`s categories</h4>
      
      <div className = "list-group catGroup">
        {categories.map((category, index) => <Link to = {`/categories/${category.id}`}
                                                    key = {index}
                                                    className = " list-group-item btn catLink "> 
                                                    {category.name}
                                              </ Link>)}

      </div> 
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  categories : getCategories(state)
})

export default connect(mapStateToProps, null)(Categories)