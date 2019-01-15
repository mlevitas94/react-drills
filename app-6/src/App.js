import React, { Component } from 'react';
import './App.css';

import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      tasks: []
    }
    this.addNewTask = this.addNewTask.bind(this)
  }

  updateInput(val){
    this.setState({
      userInput: val
    })
  }

  addNewTask(){
    this.setState({ 
      tasks: [...this.state.tasks, this.state.userInput ], 
      userInput: '' 
    });
  }
  render() {
    console.log(this.state)
    let list = this.state.tasks.map((ele, i) =>{
        return(
          <Todo key={i} task={ele}/>
        )
    })
    return (

      <div className="App">
        <h4>My to-do list</h4>
        <input onChange={(e) => this.updateInput(e.target.value)}/>
        <br></br>
        <button onClick={this.addNewTask}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
