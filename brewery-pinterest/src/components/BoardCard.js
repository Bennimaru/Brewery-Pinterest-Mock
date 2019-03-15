import React, {Component} from 'react'

class BoardCard extends Component{

  handleClick=()=>{
    console.log("hi");
  }

  render(){
    return(
      <div>
        <h4>{this.props.name}</h4>
        <button onClick={this.handleClick}>Delete Me</button>
      </div>
    )
  }
}

export default BoardCard
