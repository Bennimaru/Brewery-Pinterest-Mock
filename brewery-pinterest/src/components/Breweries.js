import React, { Component } from 'react';
import BreweryCard from './BreweryCard'

class Breweries extends Component{

  renderBreweries = brewery => {
    return <BreweryCard key={brewery.id} info={brewery}/>
  }

  render(){
    return(
      <div>
        {this.props.data.map(this.renderBreweries)}
      </div>
    )
  }
}

export default Breweries
