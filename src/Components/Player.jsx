import React from 'react'
import '../App.css'
import Counter from './Counter'

const Player = props => {
  return (
    <div className='player'>
      <button className="remove-player" onClick={props.handleRemovePlayer(props.id)}>✖</button>
      <span className='player-name'>Guil</span>
      <Counter></Counter>
    </div>
  )
}

export default Player
