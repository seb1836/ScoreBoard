import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Player from './Components/Player'
import AddPlayerForm from './Components/AddPlayerForm'

class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        id: 1,
        score: 0
      },
      {
        name: 'Treasure',
        id: 2,
        score: 0
      },
      {
        name: 'Ashley',
        id: 3,
        score: 0
      },
      {
        name: 'James',
        id: 4,
        score: 0
      }
    ]
  }

  handleScoreChange = (operation, index) => {
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players]
      const updatedPlayer = { ...updatedPlayers[index] }
      updatedPlayer.score += operation
      updatedPlayers[index] = updatedPlayer
      console.log('into handle score', updatedPlayers)
      return { players: updatedPlayers }
    })
  }
  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => 
           p.id !==id
      )
      }
    })
  }

handleHighestScoreAndTie = () => {
  
}

  playersRenderer = () => {
    console.log(this.checkIfOnePointHasBeenScored())
    if(this.checkIfOnePointHasBeenScored()===false){
    return this.state.players.map((player, index) => {
      console.log(player.name)
      return (
        <Player
          key={player.id.toString()}
          playerName={player.name}
          id={player.id}
          handleRemovePlayer={this.handleRemovePlayer}
          score={player.score}
          handleScoreChange={this.handleScoreChange}
          index={index}
        ></Player>
      )
    })
  }else if(this.checkIfOnePointHasBeenScored()){
    return 
  }
  }
   handleUpdatePlayersState = (submittedName) =>{
     this.setState(prevState =>{
       const updatedPlayers = [...prevState.players]
       console.log(updatedPlayers,"dfsdf")
        updatedPlayers.push({name:submittedName,id:this.state.players.length+1,score:0})
       console.log(updatedPlayers,"addp")
       
       return {players:updatedPlayers}
     }
       )
   }

   checkIfOnePointHasBeenScored = () =>{
     return this.state.players.some( (player,index) => {
       return player.score >0
     }
     )}
  render() {
    return (
      <div>
        <Header title='scoreboard' players={this.state.players}></Header>
        {this.playersRenderer()}
        <AddPlayerForm addPlayer={this.handleUpdatePlayersState} />
      </div>
    )
  }
}
export default App
