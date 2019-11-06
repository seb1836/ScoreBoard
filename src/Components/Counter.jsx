import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Counter = ({handleScoreChange,score,index,highScore}) => {
  //   incrementScore = () => {
  // this.setState(prevstate =>({score:prevstate +1})

  // )}

  //   decrementScore = () => {
  //     this.setState(prevstate =>({score:prevstate-1}))
  //   }

  return (
    <div className='counter'>
      <button className='counter-action decrement' onClick={() =>{
        if(highScore==="is-high-score"){
        return handleScoreChange(-1, index,true)}
        else{return handleScoreChange(-1, index,false)}
        }}>
      {' '}
        -{' '}
      </button>
      <span className='counter-score'>{score}</span>
      <button className='counter-action increment' onClick={() =>handleScoreChange(+1, index)}>
        {' '}
        +{' '}
      </button>
    </div>
  )
}

Counter.propTypes = {
  score: PropTypes.number,
  index: PropTypes.number,
  handleScoreChange: PropTypes.func
}

export default Counter
