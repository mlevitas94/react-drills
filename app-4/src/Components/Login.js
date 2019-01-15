import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state ={
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
    alertInfo(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }  

    render(){
        return(
        <div>
            <h4>Enter Username</h4>
            <input onChange={(e) => this.updateUser(e.target.value)}/>
            <h4>Enter Password</h4>
            <input onChange={(e) => this.updatePass(e.target.value)}/>
            <br></br>
            <br></br> 
            <button onClick={() => this.alertInfo()}>Submit</button>
        </div>
        )
    }
}

export default Login