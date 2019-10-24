import React,{Component} from 'react'
import '../App.css'


class Counter extends Component {
  state ={
    score:0
  }

  incrementScore = () => {
this.setState(prevstate =>({score:prevstate +1})

)}

  decrementScore = () => {
    this.setState(prevstate =>({score:prevstate-1}))
  }
  render(){
return (

   
      <div className="counter">
        <button className="counter-action decrement" onClick={this.incrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
      
)


}
}
export default Counter