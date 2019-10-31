import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import Counter from './Counter'

class Player extends PureComponent {
  static propTypes = {
    score: PropTypes.number.isRequired,
    handleScoreChange: PropTypes.func,
    index:PropTypes.number,
    id:PropTypes.number,
    playerName:PropTypes.string.isRequired,
    handleRemovePlayer:PropTypes.func
  }
  render(){
    const {score,handleScoreChange,index,id,playerName,handleRemovePlayer} =this.props
  return (
    <div className='player'>
      <button className="remove-player" onClick={() =>handleRemovePlayer(id)}>✖</button>
      <span className='player-name'>{playerName}</span>
      <Counter score={score} handleScoreChange={handleScoreChange} index={index}></Counter>
    </div>
  )
}
}
export default Player
