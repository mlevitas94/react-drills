import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }

        this.updateInput = this.updateInput.bind(this)
        this.passTask = this.passTask.bind(this)
    }

    updateInput(val){
        this.setState({userInput: val})
    }

    passTask(){
        this.props.list(this.state.userInput)
        this.setState({userInput: ''})
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.updateInput(e.target.value)}/>
                <br></br>
                <button onClick={this.passTask}>Add</button>
            </div>
        )
    }
}

export default NewTask