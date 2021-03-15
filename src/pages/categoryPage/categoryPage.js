import React from "react";
import {connect} from "react-redux";

import Layout from "../main/Layout";
import {fetchCategoriesINFO} from "../../actions/actions"


class CategoryPage extends React.Component {

  constructor (props) {
    super (props)
  }

  componentDidMount() {
    this.props.fetchCategoriesINFO(this.props.match.params.id)
  }

  render () {
    return(
      <Layout>
      <div>category</div>
      </Layout>
      
    )
  }
}

const mapDispatchToProps = {
  fetchCategoriesINFO
}

export default connect(null, mapDispatchToProps)(CategoryPage)

