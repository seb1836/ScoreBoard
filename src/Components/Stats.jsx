import React from'react';

const Stats = (props) => {

    const calculateTotalScore = () => {
        return props.players.reduce((total,player) =>{
            return total + player.score
        },0)
    }
    return(
<table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{calculateTotalScore()}</td>
    </tr>
  </tbody>
</table>
    )
}

export default Stats