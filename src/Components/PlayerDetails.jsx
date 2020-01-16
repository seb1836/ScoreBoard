import React, { PropTypes } from 'react'

const PlayerDetails = ({ selectedPlayerIndex, playerName, playerScore, dateOfCreation, dateOfUpdate }) => {
  const playerDetailsFields = ['Score:', 'Created:', 'Updated:']
  const propsArray = [playerScore, dateOfCreation, dateOfUpdate]
  const detailsRenderer = () => {
    return playerDetailsFields.map((string, index) => {
      return (
        <li>
          <span>
            {string}
            {propsArray[index]}
          </span>
        </li>
      )
    })
  }
  if (selectedPlayerIndex !== -1) {
    return (
      <div>
        <h3>{playerName}</h3>
        <ul>{detailsRenderer()}</ul>
      </div>
    )
  }
  return <p>Click on a player to see more details</p>
}

export default PlayerDetails
