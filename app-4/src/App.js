import React, { Component } from 'react';
import './App.css';

import Login from './Components/Login'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUser(val){
    this.setState({username : val})
  }

  updatePass(val){
    this.setState({password: val})

  }
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
