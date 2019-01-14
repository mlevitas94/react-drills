import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listItems: ['milk', 'sugar', 'cookies', 'eggs', 'chips']
    }
  }
  render() {
    let listedArr = this.state.listItems.map((item, i) => {
      return (
        <h2 key={i}>{item}</h2>
      )
    })
    return (
      <div className="App">
        {listedArr}
      </div>
    );
  }
}

export default App;
