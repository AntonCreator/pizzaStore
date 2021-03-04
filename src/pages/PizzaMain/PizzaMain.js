import React from "react";
import {connect} from "react-redux";
import {fetchPizza} from "../../actions/actions"



class PizzaMain extends React.Component {

  constructor (props) {
    super (props)
  }
  
  componentDidMount() {
    this.props.fetchPizza()
  }

  render () {

    return (
      
      <div>Pizza</div>

    )
  }
}

const mapDispatchToProps = { fetchPizza }

export default connect(null, mapDispatchToProps)(PizzaMain);