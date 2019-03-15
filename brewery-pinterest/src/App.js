import React, { Component } from 'react';
import Breweries from './components/Breweries'
import './App.css';
import Boards from './components/Boards'

class App extends Component {

  state= {
    index:[],
    boards:[]
  }

  handleSubmit= boardInfo =>{
    console.log(boardInfo.name);
  }

  componentDidMount(){
    fetch('https://api.openbrewerydb.org/breweries?by_state=new_york')
      .then(res => res.json())
      .then(breweries => this.setState({index:breweries})
    )
  }

  render() {
    return (
      <div className="App">
        <div className="Breweries">
        <h2>List of NY Breweries</h2>
        <Breweries data={this.state.index}/>
        </div>
        <div className="Boards">
        <h2>List of My Boards</h2>
        <Boards handleSubmit={this.handleSubmit} data={this.state.boards}/>
        </div>
      </div>
    );
  }
}

export default App;
