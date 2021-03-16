import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {compose} from "redux";
import classNames from "classnames";
import * as R from "ramda";

import {getActiveCategory, getCategories} from "../../selectors";
import {fetchCategories} from "../../actions/actions";


class Categories extends React.Component {
  constructor(props) {
    super (props)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }
  
  render() {

  const {categories} = this.props

  const linkClass = (id) => classNames({
    "list-group-item btn " : true,
    "active btn-secondary" : this.props.activeCategoryId == id

  })

  const allCatyClass = classNames({
    "list-group-item btn" : true,
    "active btn-secondary" : (this.props.activeCategoryId) == undefined

  })

  return (
    <div className = "well categoriesList">
      <h4 className = "catTitle">Pizza`s categories</h4>
      
      <div className = "list-group catGroup">
        <Link to = "/"  className = {allCatyClass}>All categories</Link>
        {categories.map((category, index) => <Link to = {`/categories/${category.id}`}
                                                    key = {index}
                                                    className = {linkClass(category.id)}> 
                                                    {category.name}
                                              </ Link>)}

      </div> 
    </div>
    
  )}
}

const mapStateToProps = (state, ownProps) => ({
  categories : getCategories(state),
  activeCategoryId : getActiveCategory(ownProps)
})

const mapDispatchToProps = {
  fetchCategories
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(Categories)