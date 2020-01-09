import React, { PropTypes } from 'react'


const PlayerDetails = ({ selectedPlayerIndex, playerName,playerScore,dateOfCreation,dateOfUpdate }) => {
  if (selectedPlayerIndex !== -1) {
    return (
      <div>
        <h3>{playerName}</h3>
        <ul>
          <li>
            <span>Score:{playerScore} </span>
            {}
          </li>
          <li>
            <span>Created:{dateOfCreation} </span>
            {}
          </li>
          <li>
            <span>Updated:{dateOfUpdate} </span>
            {}
          </li>
        </ul>
      </div>
    )
  } else {
    return <p>Click on a player to see more details</p>
  }
}

export default PlayerDetails
