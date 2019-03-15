import React, { Component } from 'react';

class BreweryCard extends Component{

  // console.log(this.props.info);
  render(){
    return(
      <div>
        <h4>{this.props.info.name}</h4>
      </div>
    )
  }
}

export default BreweryCard
