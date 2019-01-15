import React, { Component } from 'react';
import './App.css';

import NewTask from './Components/NewTask'

import List from './Components/List'

class App extends Component {
  constructor() {
    super()
    this.state={
      tasks: []
    }

    this.updateTask = this.updateTask.bind(this)
  }

  updateTask(task){
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  render() {
    return (
      <div className="App">
        <h4>My to-do list</h4>
        <NewTask list={this.updateTask}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
