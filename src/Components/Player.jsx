import React from 'react'
import '../App.css'
import Counter from './Counter'

const Player = props => {
  return (
    <div className='player'>
      <button className="remove-player" onClick={props.handleRemovePlayer(props.id)}>✖</button>
      <span className='player-name'>Guil</span>
      <Counter score={props.score} handleScoreChange={props.handleScoreChange} index={props.index}></Counter>
    </div>
  )
}

export default Player
