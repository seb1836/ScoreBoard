import React from'react';
import PropTypes from 'prop-types'
const Stats = ({players}) => {

    const calculateTotalScore = () => {
        console.log(players,"into stats before push")
        
        

        return players.reduce((total,player) =>{
            return total + player.score
        },0)
    }
    return(
<table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>{players.length}</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{calculateTotalScore()}</td>
    </tr>
  </tbody>
</table>
    )
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  })),

}

export default Stats