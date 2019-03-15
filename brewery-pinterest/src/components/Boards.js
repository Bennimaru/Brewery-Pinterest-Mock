import React, { Component } from 'react';
import BoardCard from './BoardCard'

class Boards extends Component{

  state = {
    name:""
  }

  handleSubmit= event =>{
    event.preventDefault()
    this.props.handleSubmit(<BoardCard key={this.state.name} name= {this.state.name}/>)
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
        {this.props.data}
      </div>
    )
  }
}

export default Boards
