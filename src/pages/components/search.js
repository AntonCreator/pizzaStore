import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {searchPizzaByName} from "../../actions/actions";
import {getSearchedNameLength} from "../../selectors";

class Search extends React.Component {
  constructor(props){
    super (props)

    this.state = {
      input : ""
    }
  }
  
  handleChange = (event) => {
    this.setState({
      input : event.target.value
     
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchPizzaByName(this.state.input)
  }

  render () {
    return (
      <div>
        <h4>Search by name</h4>
        <form onSubmit={this.handleSubmit}>
          <div className = "input-group">
            <input onChange = {this.handleChange}
                   type = "text"
                   className = "form-control"
                   value = {this.state.input}
                   placeholder = "put a pizza`s name">
            </input>
            <div className="input-group-append">
              
              <button className = "btn btn-warning"><i className="fa fa-search" aria-hidden="true"></i></button>
              
            </div>
            <Link to = {"/searchingName"} className = "btn btn-block btn-outline-dark">Show results</Link>

          </div>
        </form> 
      </div>
    )
  }
}

const mapDispatchToProps = {searchPizzaByName}

const mapStateToProps = (state) => ({ nums : getSearchedNameLength(state)})

export default connect(mapStateToProps, mapDispatchToProps)(Search) 