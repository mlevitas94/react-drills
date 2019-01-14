import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  updateInput(val){
    this.setState({userInput :val})
  }
  render() {
    return (
      <div className="App" onChange={(e) => this.updateInput(e.target.value)}>
        <h4>Enter Text Here</h4>
        <input/>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
