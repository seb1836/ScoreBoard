import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Player from './Components/Header'

 class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        id: 1,
        score:0      
      },
      {
        name: 'Treasure',
        id: 2,
        score:0
      },
      {
        name: 'Ashley',
        id: 3,
        score:0
      },
      {
        name: 'James',
        id: 4,
        score:0
      }
    ]
  }

  handleScoreChange =(operation,index) => {
    this.setState(prevState =>{
      const updatedPlayers = [...prevState.players]
      const updatedPlayer = [...updatedPlayers[index]]
      updatedPlayer.score += operation
      updatedPlayers[index]=updatedPlayer
      return{players:updatedPlayers}
    })
    }
  handleRemovePlayer =(id) =>{ 
    this.setState(prevState => prevState.filter((player) => player.id !== id))
  }

  playersRenderer = () => {
    return this.state.players.map((player, index) => {
      return <Player key={player.id.toString()} playerName={player.name} id={player.id} handleRemovePlayer={this.handleRemovePlayer} score={player.score} handleScoreChange={this.handleScoreChange} index={index} ></Player>
    })
  }
  render() {
    return (
      <div>
        <Header title='scoreboard' totalPlayers={this.state.players.length} players={this.state.players}></Header>
        {this.playersRenderer()}
      </div>
    )
  }
}
export default App
