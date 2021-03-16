import React from "react";
import {connect} from "react-redux";

import Layout from "../main/Layout";
import {fetchCategoriesINFO, cartAdd} from "../../actions/actions";
import {getCategoriesPizzas, getActiveCategory} from "../../selectors";
import RenderPizza from "../PizzaMain/pizzaCard";


class CategoryPage extends React.Component {

  constructor (props) {
    super (props)
  }
  
  
  componentDidMount() {
  
    this.props.fetchCategoriesINFO(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchCategoriesINFO(this.props.match.params.id)
    }
  } 
  
  render () {
    const {pizzas} = this.props
    return(
      <Layout>
        
       <div className = "row">
        {pizzas.map((pizza,index) => (<RenderPizza pizza = {pizza} 
                                                   key = {index}
                                                   cartAdd = {this.props.cartAdd}/>))}
      </div>
      </Layout>
      
    )
  }
}

const mapDispatchToProps = {
  fetchCategoriesINFO, cartAdd
}

const mapStateToProps = (state) => ({
  pizzas : getCategoriesPizzas(state),
  id : getActiveCategory (state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)

