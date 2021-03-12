import React from "react";
import {connect} from "react-redux"

import Layout from "../main/Layout";
import RenderPizza from "../PizzaMain/pizzaCard";
import {getSearchedPizzas} from "../../selectors";
import {cartAdd} from "../../actions/actions";
import {Link} from "react-router-dom";

class SearchName extends React.Component {
  constructor(props) {
    super(props)
  }

  render (){
  const {searchedPizzas} = this.props
  return (
    <Layout>
    {searchedPizzas&&<div className = "row">
        {searchedPizzas.map((pizza,index) => (<RenderPizza pizza = {pizza} 
                                                   key = {index}
                                                   cartAdd = {this.props.cartAdd}/>))}
      </div>}
    <div className = "row">
      <Link to = "/" className = "btn btn-primary btn-block"> &larr; back to store</Link>
    </div>
    </Layout>
  )
  }
}

const mapStateToProps = (state) => ({
  searchedPizzas : getSearchedPizzas(state)
})
const mapDispatchToProps = { cartAdd }

export default connect(mapStateToProps,mapDispatchToProps)(SearchName)