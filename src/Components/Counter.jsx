import React from 'react'
import '../App.css'

const Counter = props => {
  //   incrementScore = () => {
  // this.setState(prevstate =>({score:prevstate +1})

  // )}

  //   decrementScore = () => {
  //     this.setState(prevstate =>({score:prevstate-1}))
  //   }

  return (
    <div className='counter'>
      <button className='counter-action decrement' onClick={() =>props.handleScoreChange(-1, props.index)}>
        {' '}
        -{' '}
      </button>
      <span className='counter-score'>{props.score}</span>
      <button className='counter-action increment' onClick={() =>props.handleScoreChange(+1, props.index)}>
        {' '}
        +{' '}
      </button>
    </div>
  )
}

export default Counter
