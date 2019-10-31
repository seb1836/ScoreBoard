import React,{Component} from 'react'


class AddPlayerForm extends Component {
    state = {
        value:""
    }

    

    
handleInputChange = (e) => {
    this.setState({value:e.target.value})
}

handleAddPlayerEvent = (e) => {
    const {addPlayer} = this.props
    e.preventDefault()
addPlayer(this.state.value)
this.setState({value:""})
}
    render(){
        
return(
<form onSubmit={this.handleAddPlayerEvent}>
<input type="text" placeholder="Enter a player's name" value ={this.state.value} onChange={this.handleInputChange}/>
<input type="submit" value="Add player" />
</form>

)

    }
}

export default AddPlayerForm