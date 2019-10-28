import React,{Component} from 'react'


class AddPlayerForm extends Component {
    state = {
        value:""
    }
handleInputChange = (e) => {
    this.setState({value:e.target.value})
}

handleAddPlayerEvent = (e) => {
    e.preventDefault()
this.props.addPlayer(this.state.value)
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