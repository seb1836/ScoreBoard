import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlayerActionCreators from './actions/player'
import { addPlayer, removePlayer, UpdatePlayerScore, UpdatePlayerDetails } from './actions/player'
import './App.css'
import Header from './Components/Header'
import Player from './Components/Player'
import AddPlayerForm from './Components/AddPlayerForm'
import PlayerDetails from './Components/PlayerDetails'

class App extends Component {
  //   state = {
  //     players: [
  //       {
  //         name: 'Guil',
  //         id: 1,
  //         score: 0
  //       },
  //       {
  //         name: 'Treasure',
  //         id: 2,
  //         score: 0
  //       },
  //       {
  //         name: 'Ashley',
  //         id: 3,
  //         score: 0
  //       },
  //       {
  //         name: 'James',
  //         id: 4,
  //         score: 0
  //       }
  //     ]
  //   }
  // checkIfTieBefore = () => {
  //   arrayIndexSup.forEach((currentIndex, index) => {
  //     if (this.props.players[currentIndex] > this.props.players[currentIndex + 1] && arrayIndexSup.length >= 2) {
  //       console.log(arrayIndexSup, currentIndex)
  //       arrayIndexSup.splice(index + 1)
  //       console.log(arrayIndexSup)
  //     }
  //   })
  // }

  handleHighestScoreAndTie = () => {
    let biggestscore = Math.max(...this.props.players.map(players => players.score))
    return biggestscore
  }
  // handleScoreChange = (operation, index,isHighscore) => {
  //   if (isHighscore=== true){
  //     sup-=1
  //   }
  //   this.setState(prevState => {
  //     const updatedPlayers = [...prevState.players]
  //     const updatedPlayer = { ...updatedPlayers[index] }
  //     updatedPlayer.score += operation
  //     updatedPlayers[index] = updatedPlayer
  //     console.log('into handle score', updatedPlayers)
  //     return { players: updatedPlayers }
  //   })
  // }
  // handleRemovePlayer = id => {
  //   this.setState(prevState => {
  //     return {
  //       players: prevState.players.filter(p =>{
  //         arrayIndexSup=arrayIndexSup.filter((indexSup)=>{
  //           return indexSup !== id-1
  //         })
  //        return p.id !==id
  //         }
  //     )
  //     }
  //   })
  //   arrayIndexSup=[]
  //   sup=0

  // }

  // handleUpdatePlayersState = submittedName => {
  //   this.setState(prevState => {
  //     const updatedPlayers = [...prevState.players]
  //     console.log(updatedPlayers, 'dfsdf')
  //     updatedPlayers.push({ name: submittedName, id: this.state.players.length + 1, score: 0 })
  //     console.log(updatedPlayers, 'addp')

  //     return { players: updatedPlayers }
  //   })
  // }

  checkIfOnePointHasBeenScored = () => {
    console.log(this.props.players, 'check')
    return this.props.players.some((player, index) => {
      return player.score > 0
    })
  }
  render() {
    // const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, this.props.dispatch)
    // const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, this.props.dispatch)
    // const updatePlayerScore = bindActionCreators(PlayerActionCreators.UpdatePlayerScore, this.props.dispatch)
    // const updatePlayerDetails = bindActionCreators(PlayerActionCreators.UpdatePlayerDetails, this.props.dispatch)

    const playersRendererWithHighScoreAndTie = score => {
      console.log(score, 'hiiighscore')
      return this.props.players.map((player, index) => {
        if (player.score === score) {
          return (
            <Player
              key={player.id.toString()}
              playerName={player.name}
              id={player.id}
              // handleRemovePlayer={this.handleRemovePlayer}
              removePlayer={this.props.removePlayer}
              score={player.score}
              // handleScoreChange={this.handleScoreChange}
              updatePlayerScore={this.props.UpdatePlayerScore}
              updatePlayerDetails={this.props.UpdatePlayerDetails}
              index={index}
              highScore='is-high-score'
            ></Player>
          )
        }
        return (
          <Player
            key={player.id.toString()}
            playerName={player.name}
            id={player.id}
            // handleRemovePlayer={this.handleRemovePlayer}
            removePlayer={this.props.removePlayer}
            score={player.score}
            //  handleScoreChange={this.handleScoreChange}
            updatePlayerScore={this.props.UpdatePlayerScore}
            updatePlayerDetails={this.props.UpdatePlayerDetails}
            index={index}
            highScore='is-not-high-score'
          ></Player>
        )
      })
    }
    const playersRenderer = () => {
      console.log(this.checkIfOnePointHasBeenScored())

      if (this.checkIfOnePointHasBeenScored() === false) {
        return this.props.players.map((player, index) => {
          console.log(player.name)
          return (
            <Player
              key={player.id.toString()}
              playerName={player.name}
              id={player.id}
              // handleRemovePlayer={this.handleRemovePlayer}
              removePlayer={this.props.removePlayer}
              score={player.score}
              updatePlayerDetails={this.props.UpdatePlayerDetails}
              // handleScoreChange={this.handleScoreChange}
              updatePlayerScore={this.props.UpdatePlayerScore}
              index={index}
            ></Player>
          )
        })
      } else if (this.checkIfOnePointHasBeenScored()) {
        return playersRendererWithHighScoreAndTie(this.handleHighestScoreAndTie())
      }
    }
    const playerDetailsRenderer = () => {
      if (this.props.index !== -1) {
        return (
          <PlayerDetails
            selectedPlayerIndex={this.props.index}
            playerName={this.props.players[this.props.index].name}
            playerScore={this.props.players[this.props.index].score}
            dateOfCreation={this.props.players[this.props.index].created}
            dateOfUpdate={this.props.players[this.props.index].updated}
          />
        )
      }
      return <PlayerDetails selectedPlayerIndex={this.props.index} />
    }

    console.log(this.props.players, 'red', this.props.index, this.props.addPlayer)
    return (
      <div>
        <Header title='scoreboard' players={this.props.players}></Header>
        {playersRenderer()}
        <AddPlayerForm addPlayer={this.props.addPlayer} />
        {playerDetailsRenderer()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players,
  index: state.selectedPlayerIndex
})

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: name => {
      dispatch(addPlayer(name))
    },
    removePlayer: index => {
      dispatch(removePlayer(index))
    },
    UpdatePlayerScore: (score, index) => {
      dispatch(UpdatePlayerScore(score, index))
    },
    UpdatePlayerDetails: index => {
      dispatch(UpdatePlayerDetails(index))
    }
  }
}
//export default connect(mapStateToProps,{addPlayer,removePlayer,UpdatePlayerDetails,UpdatePlayerScore})(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
