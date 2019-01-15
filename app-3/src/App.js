import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      myList : [
      'cat',
      'dog',
      'lizard',
      'iguana',
      'bear',
      'monkey'],
      userInput: ''
    }
  }

  updateInput(val){
    this.setState({userInput: val})
  }
  render() {
    var filteredList = this.state.myList.map((item, i) =>{
      if(item.includes(this.state.userInput)){
        return <h4 key={i}>{item}</h4>
      }
    })

    return (
      <div className="App">
        <input onChange={(e) => this.updateInput(e.target.value)}/>
        <div>
          {filteredList}
        </div>
      </div>
    );
  }
}

export default App;
