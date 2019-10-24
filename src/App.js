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
        id: 1
      },
      {
        name: 'Treasure',
        id: 2
      },
      {
        name: 'Ashley',
        id: 3
      },
      {
        name: 'James',
        id: 4
      }
    ]
  }

  handleRemovePlayer =(id) =>{
    this.setState(prevState => prevState.filter((player) => player.id !== id))
  }

  playersRenderer = () => {
    return this.state.players.map((player, index) => {
      return <Player key={player.id.toString()} playerName={player.name} id={player.id} handleRemovePlayer={this.handleRemovePlayer} ></Player>
    })
  }
  render() {
    return (
      <div>
        <Header title='scoreboard' totalPlayers={this.state.players.length}></Header>
        {this.playersRenderer()}
      </div>
    )
  }
}
export default App
