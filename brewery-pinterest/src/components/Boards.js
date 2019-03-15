import React, { Component } from 'react';
import BoardCard from './BoardCard'

class Boards extends Component{

  state = {
    name:""
  }

  handleSubmit= event =>{
    event.preventDefault()
    console.log("hi");
    this.props.handleSubmit(this.state)
    this.setState(
      {name:""}
    )
  }

  changeHandler=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.changeHandler} type="text" placeholder="name" name="name"
        value={this.state.name}></input>
        <button>Make A New Board</button>
        </form>
        <BoardCard />
      </div>
    )
  }
}

export default Boards
