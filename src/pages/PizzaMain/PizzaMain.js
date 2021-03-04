import React from "react";
import {connect} from "react-redux";

class PizzaMain extends React.Component {

  constructor (props) {
    super (props)
  }
  
  componentDidMount() {
    this.props.fetchProps()
  }

  render () {

    return (
      
      <div>Pizza</div>

    )
  }
}

mapDispatchToProps = () => {  return fetchPizza

}

export default connect(null, mapDispatchToProps)(PizzaMain);